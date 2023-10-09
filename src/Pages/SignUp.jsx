import { useContext, useState } from 'react';
import Input from '../Components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Services/AuthProvider/AuthProvider';
import passwordErrorChecker from '../Services/Utility/PasswordErrorChecker';
import GoogleSignIn from '../Components/GoogleSignIn';
import firebaseAuthError from '../Services/Utility/FirebaseAuthError';
import firebaseStorageError from '../Services/Utility/FirebaseStorageError';
import Swal from 'sweetalert2';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth, storage } from '../Configs/firebase.config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Modal from '../Services/Utility/Modal';

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [imageName, setImageName] = useState('Optional*');
  const [imageUpload, setImageUpload] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const { createUser } = useContext(AuthContext);

  // handlePasswordChange
  const handlePasswordChange = (e) => {
    setPasswordErrorMessage(passwordErrorChecker(e));
    setErrorMessage(null);
  };

  //   handle Image Input on change
  const handleImageInput = (event) => {
    setImageUpload(event.target.files[0]);
    setImageName(event.target.files[0].name);
  };

  //   handle Image Upload
  const handleImageUpload = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const imageRef = ref(
      storage,
      `NewsHunt/profilePicture/${randomNumber}${imageUpload.name}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      setModalMessage(
        '<p>Creating Your Account ⏳</p> <p>Account Created Successfully ✔️</p> <p>Profile Updated ✔️</p> <p>Profile Picture Uploaded Successfully ✔️</p>'
      );
      getDownloadURL(snapshot.ref).then((url) => {
        updateProfile(auth.currentUser, {
          photoURL: url,
        })
          .then(() => {
            setImageName(null);
            setModalMessage(
              '<p>Creating Your Account ⏳</p> <p>Account Created Successfully ✔️</p> <p>Profile Updated ✔️</p> <p>Profile Picture Uploaded Successfully ✔️</p> <p>Registration Complete ✔️</p> <p>Verification Email Sent ✔️</p>'
            );
            sendEmailVerification(auth.currentUser).then(() => {
              setTimeout(() => {
                setShowModal(false);
                Swal.fire({
                  title: 'Sign Up Complete',
                  text: 'Account Created & Profile Picture Updated Successfully. Now you can  Verify Your Account But It Is Optional',
                  icon: 'success',
                  confirmButtonText: 'Sign In Now',
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate('/login');
                  }
                });
              }, 1500);
            });
          })
          .catch((error) => {
            setShowModal(false);
            firebaseStorageError(error.message);
          });
      });
    });
  };

  //   handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    setShowModal(true);
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    if (!passwordError) {
      setPasswordErrorMessage(null);
      createUser(email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          setModalMessage(
            '<p>Creating Your Account ⏳</p> <p>Account Created Successfully ✔️</p>'
          );
          e.target.name.value = '';
          e.target.email.value = '';
          e.target.password.value = '';
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              if (imageUpload) {
                handleImageUpload();
              } else {
                sendEmailVerification(auth.currentUser).then(() => {
                  setModalMessage(
                    '<p>Creating Your Account ⏳</p> <p>Account Created Successfully ✔️</p> <p>Profile Updated ✔️</p> <p>Verification Email Sent ✔️</p>'
                  );
                  setTimeout(() => {
                    setShowModal(false);
                    Swal.fire({
                      title: 'Sign Up Complete',
                      text: 'Account Created & Profile Updated Successfully. A Verification Email has Sent. Email Verification Is Optional',
                      icon: 'success',
                      confirmButtonText: 'Sign In Now',
                    }).then((result) => {
                      if (result.isConfirmed) {
                        navigate('/login');
                      }
                    });
                  }, 1500);
                });
              }
            })
            .catch((error) => {
              setShowModal(false);
              firebaseAuthError(error.message);
            });
        })
        .catch((error) => {
          setModalMessage(
            '<p>Creating Your Account ⏳</p> <p>Failed To Create Account ❌</p>'
          );
          setShowModal(false);
          firebaseAuthError(error.message);
        });
    } else {
      setShowModal(false);
      setErrorMessage(passwordError);
    }
  };

  return (
    <div className=' w-full h-[90vh] md:h-[95vh] justify-center items-center flex font-roboto'>
      <div
        style={{ boxShadow: '5px 5px 15px 5px #15E1F2' }}
        className='bg-secondaryColor md:p-32 p-8 rounded-lg '
      >
        <h2 className='md:text-[32px] text-[22px] rounded-lg  text-center font-bold mb-6 text-white'>
          Create A New Account
        </h2>
        <form
          className='flex flex-col gap-6 w-full'
          onSubmit={handleRegister}
        >
          <Input
            type='text'
            name={'name'}
            placeholder='Enter Your Name'
            isRequired={true}
          />
          <Input
            type='email'
            name={'email'}
            placeholder='Enter Your Email'
            isRequired={true}
          />
          <Input
            type='password'
            name={'password'}
            placeholder='Create Your Password'
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleOnChange={handlePasswordChange}
            passwordError={passwordError}
            isRequired={true}
          />
          <div className='font-medium bg-transparent duration-700 flex flex-col justify-center items-center  h-[45px] text-secondaryColor text-center text-[16px] rounded-full '>
            <label
              className='cursor-pointer hover:bg-[#b3b2b2] bg-white w-full h-full rounded-full'
              htmlFor='profileImg'
            >
              Upload Profile Picture
              {imageName && (
                <p className=' text-[#05c422] text-[14px] text-center'>
                  {imageName}
                </p>
              )}
            </label>
            <input
              className='hidden'
              type='file'
              name='photoImg'
              id='profileImg'
              accept='.png, .jpg, .jpeg, .gif, .webp'
              onChange={handleImageInput}
            />
          </div>
          <Input
            type='submit'
            value={'Sign Up'}
            bgColor={'#15E1F2'}
            textColor={'black'}
            textSize={'22px'}
          />
          <p className='text-center'>
            Already Have an Account?{' '}
            <Link to='/login'>
              <span className='text-primaryColor'>Login</span>
            </Link>
          </p>
          {errorMessage && (
            <p className='text-[rgb(208,6,6)] max-w-[320px] font-medium text-[18px] text-center mt-4'>
              {errorMessage}
            </p>
          )}
        </form>

        {/* horizontal row */}
        <div className='w-full flex justify-center items-center gap-3 my-4'>
          <hr className='w-full h-[2px] bg-gray-300' />
          <span className=' font-medium'>Or</span>
          <hr className='w-full h-[2px] bg-gray-300' />
        </div>
        {/* sign in with google section */}
        <GoogleSignIn />
      </div>
      <Modal
        title='Creating Account'
        message={modalMessage}
        modalStatus={showModal}
      />
    </div>
  );
};

export default SignUp;

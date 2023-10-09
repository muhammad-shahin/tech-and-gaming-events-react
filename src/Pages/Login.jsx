import { useContext, useEffect, useState } from 'react';
import Input from '../Components/Input';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../Components/GoogleSignIn';
import firebaseAuthError from '../Services/Utility/FirebaseAuthError';
import Swal from 'sweetalert2';
import { AuthContext } from '../Services/AuthProvider/AuthProvider';
import passwordErrorChecker from '../Services/Utility/PasswordErrorChecker';
import Modal from '../Services/Utility/Modal';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordErrorMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  //   importing context
  const { loginUser, user } = useContext(AuthContext);

  // handlePasswordChange
  const handlePasswordChange = (e) => {
    setPasswordErrorMessage(passwordErrorChecker(e));
    setErrorMessage(null);
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setShowModal(true);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    setModalMessage('<p>Login To Your Account ⏳</p>');
    if (passwordError === null) {
      setErrorMessage('');
      loginUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setModalMessage(
            '<p>Login To Your Account ⏳</p> <p>Login Successfully ✔️</p>'
          );
          setShowModal(false);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Logged In With Email & Password',
            showConfirmButton: false,
            timer: 2000,
          });
          // navigate after login
          navigate(location?.state ? location.state : '/');

          e.target.email.value = '';
          e.target.password.value = '';
        })
        .catch((error) => {
          setModalMessage(
            '<p>Login To Your Account ⏳</p> <p>Failed To Login ❌</p>'
          );
          setShowModal(false);
          firebaseAuthError(error.code);
        });
    } else {
      setShowModal(false);
      setErrorMessage(passwordError);
    }
  };

  // redirect user if user is logged in
  useEffect(() => {
    if (user) {
      // If the user is logged in, navigate them to the home screen
      navigate(location?.state ? location.state : '/');
    }
  }, [user, navigate, location]);

  return (
    <div className=' w-full h-[90vh] justify-center items-center flex font-roboto'>
      <div
        style={{ boxShadow: '5px 5px 15px 5px #15E1F2' }}
        className='bg-secondaryColor md:p-32 p-8 rounded-lg '
      >
        <h2 className='md:text-[32px] text-[22px] rounded-lg  text-center font-bold mb-6 text-white'>
          Login To Your Account
        </h2>
        <form
          className='flex flex-col gap-6 w-full'
          onSubmit={handleLogin}
        >
          <Input
            type='email'
            placeholder='Enter Your Email'
            name={'email'}
            isRequired={true}
          />
          <Input
            type='password'
            placeholder='Enter Your Password'
            showPassword={showPassword}
            name={'password'}
            handleOnChange={handlePasswordChange}
            setShowPassword={setShowPassword}
            isRequired={true}
          />
          <Input
            type='submit'
            value={'Login'}
            bgColor={'#15E1F2'}
            textColor={'black'}
            textSize={'22px'}
          />
          <p className='text-center'>
            Don&apos;t Have an Account?{' '}
            <Link to='/sign-up'>
              <span className='text-primaryColor'>Register</span>
            </Link>
          </p>
          {errorMessage && (
            <p className='text-red-600 font-medium text-[18px] text-center mt-4'>
              {errorMessage}
            </p>
          )}
        </form>

        {/* horizontal row */}
        <div className='w-full flex justify-center items-center gap-3 my-4'>
          <hr className='w-full h-[2px] bg-gray-300' />
          <span className='text-gray-600 font-medium'>Or</span>
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

export default Login;

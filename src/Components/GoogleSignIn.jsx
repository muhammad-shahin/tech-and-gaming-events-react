import Swal from 'sweetalert2';
import firebaseAuthError from '../Services/Utility/FirebaseAuthError';
import { AuthContext } from '../Services/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle } = useContext(AuthContext);
  // handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Signed In With Google',
          showConfirmButton: false,
          timer: 2000,
        });
        // navigate after login
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        firebaseAuthError(error.message);
      });
  };
  return (
    <div>
      <button
        className='text-[20px] outline-none border-2 border-[#787676] px-5 py-2 rounded-full bg-white  text-bgColor flex justify-center items-center gap-3 w-full hover:scale-[0.95] duration-500'
        onClick={handleGoogleSignIn}
      >
        <FcGoogle className='text-[26px]' />
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;

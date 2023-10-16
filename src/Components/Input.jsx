import PropTypes from 'prop-types';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Input = ({
  type,
  placeholder,
  handleOnChange,
  width,
  height,
  value,
  bgColor,
  textColor,
  textSize,
  showPassword = false,
  setShowPassword,
  passwordError,
  name,
  isRequired,
}) => {
  return (
    <div className='relative'>
      <input
        style={{
          width: `${width}`,
          height: `${height}`,
          backgroundColor: `${bgColor}`,
          color: `${textColor}`,
          fontSize: `${textSize}`,
        }}
        className={`outline-none px-5 py-3 rounded-full text-[18px] text-bgColor md:w-[350px] w-[320px] ${
          type === 'submit' && 'cursor-pointer hover:scale-[0.95] duration-500'
        }`}
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        name={name}
        {...(isRequired ? { required: 'required' } : {})}
      />
      {type === 'password' &&
        (showPassword ? (
          <AiFillEyeInvisible
            className='absolute top-[13px] right-[5%] text-[24px] cursor-pointer text-bgColor'
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <AiFillEye
            className='absolute top-[13px] right-[5%] text-[24px] cursor-pointer text-bgColor'
            onClick={() => setShowPassword(!showPassword)}
          />
        ))}
      {passwordError && (
        <p className='text-[#000000] text-[16px] text-center mt-1 max-w-[300px]'>
          {passwordError}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  showPassword: PropTypes.bool,
  setShowPassword: PropTypes.func,
  passwordError: PropTypes.string,
  name: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default Input;

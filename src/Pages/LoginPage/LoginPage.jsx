import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input, Button } from '@material-tailwind/react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '../../providers/AuthProviders';
import {toast} from "react-hot-toast"
const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  ;

  const navigate = useNavigate();
  const location = useLocation();
  const { user, signIn } = useContext(AuthContext);

  const from = location?.state?.from?.pathname || '/'
  console.log(from)
  const handleLogin = data => {

    const { email, password } = data
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        if (user.accessToken) {
          navigate(from, { replace: true });
        }
      })
      .catch(error => toast.error(error?.message));

  }

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true })
    }
  }, [user])


  const togglePass = (e) => {
    const inputType = e.target.parentElement.nextElementSibling.type
    if (inputType === 'password') {
      e.target.parentElement.nextElementSibling.type = 'text'
    } else {
      e.target.parentElement.nextElementSibling.type = 'password'
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-y-3 min-w-[450px] bg-white shadow-md p-5'>
        <Input
          type="email"
          label="Email"

          {...register('email', { required: true })}
          className="mb-4"
        />
        <Input
          type="password"
          label="Password"

          {...register('password', { required: true })}
          className="mb-4"
          icon={<EyeIcon title='show' className='cursor-pointer p-3' onClick={togglePass} />}
        />

        <Button
          color="blue"
          buttonType="filled"
          size="md"

          type="submit"
          className="mb-4"
        >
          Login
        </Button>
      </form>
      <div className='mt-5'>
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

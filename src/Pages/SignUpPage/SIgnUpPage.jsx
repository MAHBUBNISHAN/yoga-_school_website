import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input, Option, Button, Select } from '@material-tailwind/react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '../../providers/AuthProviders';
import { useMutation } from 'react-query';
import { createUserAPI } from '../../api/userApi';
import { toast } from 'react-hot-toast'
const SignUpPage = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();



    const { createUser, user, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();


    const from = location?.state?.from?.pathname || '/'

    const userSignUpMutation = useMutation(createUserAPI)

    const togglePass = (e) => {
        const inputType = e.target.parentElement.nextElementSibling.type
        if (inputType === 'password') {
            e.target.parentElement.nextElementSibling.type = 'text'
        } else {
            e.target.parentElement.nextElementSibling.type = 'password'
        }
    }

    const handleSignup = data => {

        const { email, password } = data

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photoUrl: data.photoUrl, role: "student" }
                        fetch('https://yoga-school-server-mahbubnishan.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {

                                    toast.success("User Registered")
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => {
                        toast.error(error?.message)
                    })
            }).catch(error=>{
                toast.error(error?.message)

            })
            


    }

    // useEffect(() => {
    //     if (user) {
    //         navigate(from, { replace: true })
    //     }
    // }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-8">
            <h1 className="text-3xl font-bold mb-4">Registration</h1>
            <form onSubmit={handleSubmit(handleSignup)} className='flex flex-col gap-y-3 min-w-[450px] bg-white shadow-md p-5'>
                <Input
                    type="text"
                    label="Name"
                    {...register('name', { required: true })}
                    className="mb-4"
                />
                <Input
                    type="email"
                    label="Email"
                    {...register('email', { required: true })}
                    className="mb-4"
                />
                <Input
                    type="password"
                    label="Password"
                    {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })}
                    className="mb-4"
                    icon={<EyeIcon onClick={togglePass} className='p-3' />}
                />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">Password must have one Uppercase one lower case, one number and one special character.</p>}

                <Input
                    type="password"
                    label="Confirm Password"
                    {...register('confirmPassword', { required: true })}
                    className="mb-4"
                    icon={<EyeIcon onClick={togglePass} className='p-3' />}
                />
                <Input
                    type="text"
                    label="Photo URL"
                    {...register('photoUrl')}
                    className="mb-4"
                />


                <Select variant="outlined"
                    label="Gender (optional)"
                    {...register('gender')}
                    className="mb-4"
                >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
                <Input
                    type="text"
                    label="Phone Number (optional)"
                    {...register('phoneNumber')}
                    className="mb-4"
                />
                <Input
                    type="text"
                    label="Address (optional)"
                    {...register('address')}
                    className="mb-4"
                />
                <Button
                    color="blue"
                    buttonType="filled"
                    size="md"
                    type="submit"
                    className="mb-4"
                >
                    Register
                </Button>
            </form>
            <div className='mt-5'>
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Login here
                </Link>
            </div>
        </div>
    );
};

export default SignUpPage;

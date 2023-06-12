import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {

    const { createUser, user } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();


  const from = location?.state?.from?.pathname || '/'

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password)

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if(user){
      navigate(from, { replace: true })
    }
  }, [user])

    return (
        <div>
            <div className="hero min-h-screen bg-base-400">
      <div className="hero-content flex-col bg-slate-600 rounded-md ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-600">Please Register now!</h1>

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;
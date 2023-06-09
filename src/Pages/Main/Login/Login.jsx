import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';




const Login = () => {

    const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useContext(AuthContext);

  const from = location?.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        if (user.accessToken) {
          navigate(from, { replace: true });
        }
      })
      .catch(error => console.log(error));

  }

  useEffect(() => {
    if(user){
      navigate(from, { replace: true })
    }
  }, [user])


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Please Login now!</h1>

      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin}  className="card-body">
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
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <Link to="/register">
          <button className="btn btn-active btn-link">New User?</button>
        </Link>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Login;
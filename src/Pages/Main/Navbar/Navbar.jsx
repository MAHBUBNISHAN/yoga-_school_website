import React from 'react';
import logo from '../../../assets/logo.webp'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>

        <div className="navbar bg-emerald-700 text-neutral-content flex justify-between ">
            <div className=''>

                <img src={logo} alt="" className='h-10 w-20 m-2 rounded-full' />
                <a className="btn btn-ghost normal-case text-xl bg-teal-400 mx-2">Yoga School</a>

            </div>
            <div className='mx-3'>

                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="">Instructors</Link>


               
                        <>
                            <Link className="btn btn-ghost normal-case text-xl" to="">Classes </Link>
                            <Link className="btn btn-ghost normal-case text-xl" to="/">Dashboard</Link>
                            <button className="btn btn-ghost normal-case text-xl">Logout</button>
                        </>
                        :
                        <>
                            <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                            <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                        </>

                

                <Link className="btn btn-ghost normal-case text-xl" to="/blog">Blog</Link>

            </div>
        </div>
    </div>
    );
};

export default Navbar;
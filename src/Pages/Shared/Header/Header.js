import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItem = <>
        <li className='font-bold'><Link to={'/'}>Home</Link></li>
        <li className='font-bold'><Link to={'/'}>About</Link></li>
        <li className='font-bold'><Link to={'/services'}>Services</Link></li>
        <li className='font-bold'><Link to={'/'}>Blogs</Link></li>
        <li className='font-bold'><Link to={'/'}>Contact</Link></li>
        <li className='font-bold'><Link to={'/orders'}>Orders</Link></li>
        <li className='font-bold'><Link to={'/'}> Order Review </Link></li>
        <li className='font-bold'><Link to={'/'}> Manage Inventory </Link></li>

        {
            user?.uid ? <>
                <li className='font-bold'><Link onClick={handleSignOut} to={'/login'}>Sign Out</Link></li>
            </> :
                <>
                    <li className='font-bold'><Link to={'/login'}>Login</Link></li>
                    <li className='font-bold'><Link to={'/signup'}>Sign Up</Link></li>
                </>
        }

    </>
    return (
        <div className="navbar max-h-44 my-4 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to={'/'} className=" max-h-20 normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Header;
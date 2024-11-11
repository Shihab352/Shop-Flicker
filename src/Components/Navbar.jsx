import { useContext } from "react"
import logo from "../assets/images/logo.png"
import { AuthContext } from "../Provider/AuthProvider"
import { Link } from "react-router-dom";

const Navbar = () => {

    const { user , logOut} = useContext(AuthContext);

    return (
        <div className='navbar rounded-2xl shadow-2xl text-black container px-4 mx-auto'>
            <div className='flex-1'>
                <Link to={'/'} className='flex gap-2 items-center'>
                    <img className='w-auto h-8 ' src={logo} alt='' />
                    <span className='font-bold text-2xl'>ShopFlicker</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <div className=" font-semibold"> <Link to={"/"}>Home</Link> </div>
                    </li>

                    {
                        !user && (
                            <li className=" font-semibold">
                                <Link to={'/login'}>
                                Login
                                </Link>
                            </li>
                        )
                    }
                </ul>

               {
                user && (
                    <div className='dropdown dropdown-end z-50'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div className='w-10 rounded-full' title={user?.displayName}>
                            <img
                                referrerPolicy='no-referrer'
                                alt='User Profile Photo'
                                src={user?.photoURL}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52'
                    >
                        <li>
                            <Link to={'/add-job'} className='justify-between'>Add Job</Link>
                        </li>
                        <li>
                            <Link to={'/my-posted-jobs'}>My Posted Jobs</Link>
                        </li>
                        <li>
                            <Link to={'/my-bids'}>My Bids</Link>
                        </li>
                        <li>
                            <Link to={'/bid-request'}>Bid Requests</Link>
                        </li>
                        <li className='mt-2'>
                            <button
                            onClick={logOut}
                            className='bg-green-500 block text-center'>Logout</button>
                        </li>
                    </ul>
                </div>
                )
               }
            </div>
        </div>
    )
}

export default Navbar
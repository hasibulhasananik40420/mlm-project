import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft, BiUserPlus } from 'react-icons/bi';

const Navbar = () => {
    let [open, setOpen] = useState(false);

    return (
        <nav>
            <div className='shadow-sm w-full fixed top-0 left-0 z-50 '>
                <div className='md:flex items-center justify-between bg-[#1a2c79] py-4 md:px-20 px-7  '>
                    <div className=' font-bold text-2xl cursor-pointer font-[Poppins] 
text-white'>
                        <span className=''>
                            {/* <img className='' src="https://corporx.themetags.com/assets/img/logo-white.png" alt="" /> */}
                            <h1 className='text-2xl font-bold font-Poppins text-white'>C.B.C.L</h1>
                        </span>



                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <BiMenuAltLeft className='border border-[#e80566] shadow rounded w-10 hover:border-[#6d28d9] duration-300 text-white' name={open ? 'close' : 'menu'}>

                        </BiMenuAltLeft>




                    </div>



                    <ul onClick={() => setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:bg-[#1a2c79] bg-[#1a2c79] text-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 pr-6 transition-all duration-500 ease-in ${open ? 'top-14 ' : 'top-[-490px]'}`}>


                        <li>
                            <Link to='/' className='  md:ml-8 text-center text-xl md:my-0 my-7 md:pb-0 bg-[#e80566] md:bg-[#1a2c79]  mx-2 py-3 md:py-0 rounded-md duration-500 cursor-pointer block font-poppins text-white hover:bg-[#fa2d86] md:hover:py-1 md:hover:px-4 md:hover:text-white md:hover:rounded-md hover:duration-500'>Home
                            </Link>
                        </li>

                        <li>
                            <Link to='/' className='  md:ml-8 text-center text-xl md:my-0 my-7 md:pb-0 bg-[#e80566] md:bg-[#1a2c79]  mx-2 py-3 md:py-0 rounded-md duration-500 cursor-pointer block font-poppins text-white hover:bg-[#fa2d86] md:hover:py-1 md:hover:px-4 md:hover:text-white md:hover:rounded-md hover:duration-500'>About
                            </Link>
                        </li>



                        <li>
                            <Link to='/login' className='  md:ml-8 text-center text-xl md:my-0 my-7 md:pb-0 bg-[#e80566] md:bg-[#1a2c79]  mx-2 py-3 md:py-0 rounded-md duration-500 cursor-pointer block font-poppins text-white hover:bg-[#fa2d86] md:hover:py-1 md:hover:px-4 md:hover:text-white md:hover:rounded-md hover:duration-500'>Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register' className='bg-[#e80566] md:px-4 md:py-2 mx-2 py-3 rounded md:ml-8 duration-500 cursor-pointer block font-poppins text-white hover:bg-[#fa2d86]'>
                                <div className='flex justify-center items-center gap-1 font-semibold'><span><BiUserPlus size={25} /></span> <span>Sing up Now</span></div>
                            </Link>
                        </li>







                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
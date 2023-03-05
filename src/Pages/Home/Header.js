import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { FaConfluence } from 'react-icons/fa';
import { BsFillCloudMoonFill } from 'react-icons/bs';
import { TfiControlForward } from 'react-icons/tfi';

const Header = () => {
    return (
        <div className="">
            <div className=''>
                <section
                    className="header-banner h-[120vh] "
                //bg-gradient-to-r from-[#1A2C79] to-[#e80566]
                >
                    <div className=' p-8'>
                        {/* text part */}
                        <div className=" p-8  lg:w-2/4 w-full mt-24">
                            {/* <h3 className='text-lg mb-4 font-Poppins'>BUSINESS SOLUTIONS</h3> */}
                            <h3 className='lg:text-5xl text-2xl font-Poppins mb-4  font-bold '>Build,First Launch </h3>
                            <h3 className='lg:text-5xl text-2xl font-Poppins mb-4  font-bold '>Quickly </h3>
                            <h3 className='text-lg pt-3 font-Poppins mb-8'>Holisticly procrastinate mission-critical convergence with reliable customer service.
                            </h3>

                            <div className='flex items-center text-xl gap-2 mb-2'>
                                <span><TfiControlForward size={15} /></span>
                                <span>Flexible, Easy to use</span>
                            </div>
                            <div className='flex items-center text-xl gap-2 mb-2'>
                                <span><TfiControlForward size={15} /></span>
                                <span>Accounting Procedures Guidebook</span>
                            </div><div className='flex items-center text-xl gap-2'>
                                <span><TfiControlForward size={15} /></span>
                                <span>Cost Accounding Fundamentals</span>
                            </div>
                            {/* <div className='flex items-center text-xl gap-2'>
                                <span><TfiControlForward size={15} /></span>
                                <span>Corporate Cash Management</span>
                            </div>
                            <div className='flex items-center text-xl gap-2'>
                                <span><TfiControlForward size={15} /></span>
                                <span>45-Dy Money-Back Guarantee</span>
                            </div> */}

                            <div className='flex gap-6  items-center mt-6'>
                                <button className='bg-[#e80566] my-6 py-3 px-4 rounded hover:bg-[#fd2281] text-white  font-medium font-poppins  duration-500'>Get Start Now </button>

                                <button className='lg:block hidden bg-[#1a2c79] my-6 py-3 px-6 rounded hover:bg-[#fd2281] text-white  font-medium font-poppins  duration-500'>Learn More</button>
                            </div>
                        </div>


                        {/* <div className=" w-full ">
                            <div className='w-full '>

                            </div>


                        </div> */}

                    </div>


                </section>



                <div className='max-w-7xl lg:w-5/6 w-full mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  lg:mt-[-90px] mt-8'>
                    <div className='bg-white shadow-2xl rounded-md  hover:bg-gradient-to-r from-[#1a2c79] to-[#e80566] hover:text-white duration-500 lg:w-[350px] w-full p-8'>
                        <span className='bg-[#1a2c79] h-12 w-12 rounded-md flex items-center justify-center text-white'>
                            <FaConfluence size={30} />
                        </span>
                        <h1 className='font-semibold font-Poppins lg:text-2xl text-xl mt-4 '>Advertising Agency</h1>

                        <p className=' font-Poppins mt-4 mb-1'>Intrinsicly create 2.0 testing </p>
                        <p className=' font-Poppins'>fprocedures rather than </p>
                        <p className='font-Poppins'>interdependent schemas.</p>
                    </div>


                    <div className='bg-white shadow-2xl rounded-md  hover:bg-gradient-to-r from-[#1A2C79] to-[#e80566] hover:text-white duration-500 lg:w-[350px] w-full p-8'>
                        <span className='bg-[#1a2c79] h-12 w-12 rounded-md flex items-center justify-center text-white'>
                            <AiFillBug size={30} />
                        </span>
                        <h1 className='font-semibold font-Poppins lg:text-2xl text-xl mt-4 '>Cyber Security</h1>





                        <p className=' font-Poppins mt-4 mb-1'>Enthusiastically scale mission- </p>
                        <p className=' font-Poppins'>critical imperatives rather </p>
                        <p className='font-Poppins'>than an expanded array.</p>
                    </div> <div className='bg-white shadow-2xl rounded-md  hover:bg-gradient-to-r from-[#1A2C79] to-[#e80566] hover:text-white duration-500 lg:w-[350px] w-full p-8'>
                        <span className='bg-[#1a2c79] h-12 w-12 rounded-md flex items-center justify-center text-white'>
                            <BsFillCloudMoonFill size={30} />
                        </span>
                        <h1 className='font-semibold font-Poppins lg:text-2xl text-xl mt-4 '>Cloud Services</h1>



                        <p className=' font-Poppins mt-4 mb-1'>Rapidiously create cooperative resources</p>
                        <p className=' font-Poppins'>rather than client- </p>
                        <p className='font-Poppins'> based leadership skills.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
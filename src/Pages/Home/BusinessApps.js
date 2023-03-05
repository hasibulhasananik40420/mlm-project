import React from 'react';
import { AiFillWindows } from 'react-icons/ai';
import { BsApple, BsGooglePlay } from 'react-icons/bs';

const BusinessApps = () => {
    return (
        <div className="bg-[url('https://corporx.themetags.com/assets/img/hero-bg11.jpg')] object-cover ">
            <div className='lg:h-[80vh] h-full opacity-80 bg-gradient-to-r from-[#1A2C79] to-[#e80566]'>

                <div className='text-center lg:p-24 p-8'>
                    <h1 className='lg:text-5xl text-2xl font-bold font-Poppins text-white'>Download Our Business Apps</h1>
                    <p className='lg:text-xl  font-Poppins text-white mt-8'>Building your Apps helps attract more potential clients. Our integrated marketing team</p>
                    <p className='lg:text-xl  font-Poppins text-white mt-1'>will promote enabled internal or work high-impact convergence.</p>




                </div>

                <div className='lg:flex lg:justify-center lg:gap-6  text-center '>
                    <button>
                        <div className='flex  items-center gap-2 w-full rounded-full border px-6 py-3 three-btn duration-500 mb-4 lg:mb-0'>
                            <span className=''><BsApple size={35} /></span>
                            <span>
                                <p className=' font-Poppins'>Download on the</p>
                                <p className=' font-medium font-Poppins'>App Store</p>
                            </span>
                        </div>
                    </button><button>
                        <div className='flex  items-center gap-2 w-full rounded-full border px-6 py-3 three-btn duration-500 mb-4 lg:mb-0'>
                            <span className=''><BsGooglePlay size={35} /></span>
                            <span>
                                <p className=' font-Poppins'>Download on the</p>
                                <p className=' font-medium font-Poppins'>Google Store</p>
                            </span>
                        </div>
                    </button><button>
                        <div className='flex  items-center gap-2 w-full rounded-full border px-6 py-3 three-btn duration-500 mb-4 lg:mb-0'>
                            <span className=''><AiFillWindows size={35} /></span>
                            <span>
                                <p className=' font-Poppins'>Download on the</p>
                                <p className=' font-medium font-Poppins'>Windows</p>
                            </span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BusinessApps;
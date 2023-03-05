import React from 'react';
import { BsHourglass, BsLink45Deg, BsShieldShaded } from 'react-icons/bs';
import { FaRoute } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pt-24 bg-white   mb-24 container mx-auto  p-6 '>
            <h1 className='lg:text-4xl text-2xl font-bold font-Poppins pl-8'>Control Everything &</h1>
            <h1 className='lg:text-4xl text-2xl font-bold font-Poppins mt-1 pl-8'>all Solution Made for you</h1>



            <div className='lg:flex'>

                <div className='lg:w-3/5 w-full p-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  mt-16 '>
                        <div className=''>
                            <span className='bg-[#0648b3] h-20 w-20 rounded-full flex justify-center items-center  text-white'>
                                <BsLink45Deg size={50} />
                            </span>

                            <h1 className='text-black font-semibold font-Poppins lg:text-2xl text-xl mt-6'>Engage Teammates</h1>

                            <p className='text-[#707070] font-Poppins mt-4'>Distinctively foster mission-critical </p>
                            <p className='text-[#707070] font-Poppins '>focused solutions via human </p>
                        </div>

                        <div className=''>
                            <span className='bg-[#e80566] h-20 w-20 rounded-full flex items-center justify-center text-white'>
                                <BsShieldShaded size={50} />
                            </span>

                            <h1 className='text-black font-semibold font-Poppins lg:text-2xl text-xl mt-6'>Engage Teammates</h1>

                            <p className='text-[#707070] font-Poppins mt-4'>Holisticly generate plug-and-play</p>
                            <p className='text-[#707070] font-Poppins '>systems parallel task client</p>
                        </div>
                        <div className=''>
                            <span className='bg-[#05a677] h-20 w-20 rounded-full flex items-center justify-center text-white'>
                                <FaRoute size={50} />
                            </span>

                            <h1 className='text-black font-semibold font-Poppins lg:text-2xl text-xl mt-6'>Engage Teammates</h1>

                            <p className='text-[#707070] font-Poppins'>Rapidiously fabricate extensive</p>
                            <p className='text-[#707070] font-Poppins'>plagiarize extensible interfaces</p>
                        </div>

                        <div className=''>
                            <span className='bg-[#1a2c79] h-20 w-20 rounded-full flex items-center justify-center text-white'>
                                <BsHourglass size={50} />
                            </span>

                            <h1 className='text-black font-semibold font-Poppins lg:text-2xl text-xl mt-6'>Engage Teammates</h1>

                            <p className='text-[#707070] font-Poppins'>Monotonectally transform empowered</p>
                            <p className='text-[#707070] font-Poppins'>synergy wireless expertise through</p>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-0 mt-12'>
                    <img className='hero-img lg:w-[500px] lg:h-[520px] w-full h-full' src="https://corporx.themetags.com/assets/img/download.png" alt="" />
                </div>
            </div>

            <div>

            </div>

        </div>
    );
};

export default Hero;
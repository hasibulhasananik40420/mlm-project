import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';

const ClientsSay = () => {
    return (
        <div className='bg-[#f5f5f5]  mt-16 pb-24'>
            <h1 className='text-[#000000] font-bold font-sans lg:text-4xl text-2xl text-center pt-24'>What Clients Say About Us</h1>
            <p className='text-xl mt-4 text-[#707070] text-center'>Rapidiously morph transparent internal or "organic" sources whereas</p>
            <p className='text-xl  text-[#707070] text-center'>resource sucking e-business innovate compelling internal.</p>



            <div className='lg:flex  gap-12 lg:px-14 px-6 lg:justify-center mt-16 w-full'>
                <div className='bg-white rounded-md lg:w-[550px] w-full p-8'>
                    <FaQuoteLeft size={50} className='text-[#d1d3e0]' />

                    <p className='lg:text-xl font-serif text-[#707070] mt-5'>
                        Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything energistically underwhelm proactive.

                    </p>


                    <div className='flex justify-between items-center'>

                        <div className='flex gap-3 mt-6'>
                            <div>
                                <img className='h-14 w-14 rounded-full ' src="https://corporx.themetags.com/assets/img/team/team-4.jpg" alt="" />
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold text-[#707070
]'>Kyan Boards</h1>
                                <p className='mt-1 text-[#707070
]'>CEO, ThemeTags</p>
                            </div>

                        </div>


                        <div className='lg:block hidden'>
                            <div className='flex gap-1'>
                                <AiFillStar size={20} className='text-[#f5b759]' />
                                <AiFillStar size={20} className='text-[#f5b759]' />
                                <AiFillStar size={20} className='text-[#f5b759]' />
                                <AiFillStar size={20} className='text-[#f5b759]' />
                                <AiFillStar size={20} className='text-[#f5b759]' />
                            </div>
                            <p className='text-[#707070] pt-2'>5.0 Out of 5</p>
                        </div>


                    </div>



                </div>

                <div className='bg-white rounded-md lg:w-[550px] w-full p-8 lg:mt-0 mt-12'>
                    <FaQuoteLeft size={50} className='text-[#d1d3e0]' />

                    <p className='lg:text-xl font-serif text-[#707070] mt-5'>
                        Intrinsicly facilitate functional imperatives without next-generation services. Compellingly revolutionize worldwide users enterprise best practices.

                    </p>


                    <div className='flex justify-between items-center'>

                        <div className='flex gap-3 mt-6'>
                            <div>
                                <img className='h-14 w-14 rounded-full ' src="https://corporx.themetags.com/assets/img/team/team-1.jpg" alt="" />
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold text-[#707070
]'>Pirtle Karo</h1>
                                <p className='mt-1 text-[#707070
]'>Ceo, ThemeTagss</p>
                            </div>

                        </div>


                        <div className='lg:block hidden'>
                            <div className='flex gap-1 '>
                                <AiFillStar size={20} className='text-[#f5b759]' />
                                <AiFillStar size={20} className='text-[#f5b759]' />
                                <AiFillStar size={20} className='text-[#f5b759]' />
                                <AiFillStar size={20} className='text-[#f5b759]' />
                                <AiFillStar size={20} className='text-[#f5b759]' />
                            </div>
                            <p className='text-[#707070] pt-2'>5.0 Out of 5</p>
                        </div>


                    </div>



                </div>
            </div>


        </div>
    );
};

export default ClientsSay;
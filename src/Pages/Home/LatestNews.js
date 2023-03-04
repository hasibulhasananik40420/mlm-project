import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdCalendarMonth } from 'react-icons/md';

const LatestNews = () => {
    return (
        <div className='bg-[#f5f5f5] pb-24'>
            <div className="text-center pb-12 pt-24">
                <h2 className="lg:text-5xl text-3xl font-bold text-black font-Poppins mb-6">
                    Our Latest News

                </h2>
                <h1 className="font-normal text-xl md:text-xl lg:text-xl font-heading text-gray-900 mb-1">
                    Dynamically pursue reliable convergence rather than 24/7 process
                </h1>
                <h1 className="font-normal text-xl md:text-xl lg:text-xl font-heading text-gray-900">
                    improvements develop end-to-end customer service.
                </h1>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-0 justify-items-center lg:px-20 px-6 pt-8 '>

                <div className='lg:w-[350px] w-full bg-white pb-6 rounded-sm'>

                    <div className='relative'>
                        <img className='rounded-sm ' src="https://corporx.themetags.com/assets/img/blog/4.jpg" alt="" />

                        <span className='bg-[#e80566] px-1 text-white rounded absolute bottom-3 right-3'>SEO, Analytics</span>
                    </div>

                    <div className='flex justify-between px-6 pt-6'>
                        <span className='flex items-center gap-3'>
                            <img className='w-10 h-10 rounded-full border-2 border-[#0648b3]' src="https://corporx.themetags.com/assets/img/clients/client-1.jpg" alt="" />
                            <h1 className='text-[#707070]'>Admin</h1>
                        </span>

                        <span className='flex items-center gap-3'>
                            <MdCalendarMonth size={20} />
                            <h1 className='text-[#707070]'>15 March 2020</h1>
                        </span>


                    </div>

                    <h1 className='text-[#1a2c79] text-xl font-Poppins px-6 pt-6'>Holisticly promote enabled</h1>

                    <p className='text-[#707070] pt-6 px-6'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <button className='flex gap-1 items-center text-[#0648b3] font-medium pt-6 px-6 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                </div> <div className='lg:w-[350px] w-full bg-white pb-6 rounded-sm'>

                    <div className='relative'>
                        <img className='rounded-sm ' src="https://corporx.themetags.com/assets/img/blog/2.jpg" alt="" />

                        <span className='bg-[#e80566] px-1 text-white rounded absolute bottom-3 right-3'>SEO, Analytics</span>
                    </div>

                    <div className='flex justify-between px-6 pt-6'>
                        <span className='flex items-center gap-3'>
                            <img className='w-10 h-10 rounded-full border-2 border-[#0648b3]' src="https://corporx.themetags.com/assets/img/clients/client-1.jpg" alt="" />
                            <h1 className='text-[#707070]'>Admin</h1>
                        </span>

                        <span className='flex items-center gap-3'>
                            <MdCalendarMonth size={20} />
                            <h1 className='text-[#707070]'>15 March 2020</h1>
                        </span>


                    </div>

                    <h1 className='text-[#1a2c79] text-xl font-Poppins px-6 pt-6'>Holisticly promote enabled</h1>

                    <p className='text-[#707070] pt-6 px-6'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <button className='flex gap-1 items-center text-[#0648b3] font-medium pt-6 px-6 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                </div>

                <div className='lg:w-[350px] w-full bg-white pb-6 rounded-sm'>

                    <div className='relative'>
                        <img className='rounded-sm ' src="https://corporx.themetags.com/assets/img/blog/1.jpg" alt="" />

                        <span className='bg-[#e80566] px-1 text-white rounded absolute bottom-3 right-3'>SEO, Analytics</span>
                    </div>

                    <div className='flex justify-between px-6 pt-6'>
                        <span className='flex items-center gap-3'>
                            <img className='w-10 h-10 rounded-full border-2 border-[#0648b3]' src="https://corporx.themetags.com/assets/img/clients/client-1.jpg" alt="" />
                            <h1 className='text-[#707070]'>Admin</h1>
                        </span>

                        <span className='flex items-center gap-3'>
                            <MdCalendarMonth size={20} />
                            <h1 className='text-[#707070]'>15 March 2020</h1>
                        </span>


                    </div>

                    <h1 className='text-[#1a2c79] text-xl font-Poppins px-6 pt-6'>Holisticly promote enabled</h1>

                    <p className='text-[#707070] pt-6 px-6'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <button className='flex gap-1 items-center text-[#0648b3] font-medium pt-6 px-6 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                </div>

            </div>
        </div>
    );
};

export default LatestNews;
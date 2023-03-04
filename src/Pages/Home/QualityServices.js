import React from 'react';
import { TfiAnnouncement, TfiBriefcase, TfiHeadphoneAlt, TfiVector } from 'react-icons/tfi'
import { BsArrowRightShort, BsLightbulb } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
const QualityServices = () => {
    return (
        <div className='bg-[#f5f5f5] mt-24 '>
            <h1 className='text-5xl font-bold font-sans text-center pt-20 text-[#000000]'>We Provide Quality Services.</h1>
            <p className='pt-6 text-center text-xl text-[#707070]'>Efficiently aggregate end-to-end core competencies without maintainable. </p>
            <p className='text-xl text-center pt-1 text-[#707070]'>Dynamically foster tactical solutions without enabled value.</p>



            <div className='pt-12 pb-16'>
                <div className='flex flex-wrap justify-center gap-10'>
                    <div className='bg-white rounded p-12 w-[520px]  '>
                        <div className='flex gap-4'>
                            <div>
                                <TfiAnnouncement size={50} className='text-[#e80566]' />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold font-Poppins text-[#000000]'>Marketing Services</h1>
                                <p className='font-Poppins mt-3 text-[#707070]'>Progressively empower business "outside the box" thinking with resource-leveling partnerships.</p>

                                <button className='flex gap-1 items-center text-[#7e8299] font-medium mt-4 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded p-12 w-[520px]  '>
                        <div className='flex gap-4'>
                            <div>
                                <BsLightbulb size={50} className='text-[#e80566]' />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold font-Poppins text-[#000000]'>Web App Development</h1>
                                <p className='font-Poppins mt-3 text-[#707070]'>Progressively empower business "outside the box" thinking with resource-leveling partnerships.</p>

                                <button className='flex gap-1 items-center text-[#7e8299] font-medium mt-4 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                            </div>
                        </div>
                    </div>  <div className='bg-white rounded p-12 w-[520px]  '>
                        <div className='flex gap-4'>
                            <div>
                                <TfiHeadphoneAlt size={50} className='text-[#e80566]' />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold font-Poppins text-[#000000]'>24/7 Call Center Service</h1>
                                <p className='font-Poppins mt-3 text-[#707070]'>Progressively empower business "outside the box" thinking with resource-leveling partnerships.</p>

                                <button className='flex gap-1 items-center text-[#7e8299] font-medium mt-4 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                            </div>
                        </div>
                    </div>  <div className='bg-white rounded p-12 w-[520px]  '>
                        <div className='flex gap-4'>
                            <div>
                                <FiBell size={50} className='text-[#e80566]' />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold font-Poppins text-[#000000]'>Social Media Marketing</h1>
                                <p className='font-Poppins mt-3 text-[#707070]'>Progressively empower business "outside the box" thinking with resource-leveling partnerships.</p>

                                <button className='flex gap-1 items-center text-[#7e8299] font-medium mt-4 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                            </div>
                        </div>
                    </div>  <div className='bg-white rounded p-12 w-[520px]  '>
                        <div className='flex gap-4'>
                            <div>
                                <TfiBriefcase size={50} className='text-[#e80566]' />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold font-Poppins text-[#000000]'>Corporate Business</h1>
                                <p className='font-Poppins mt-3 text-[#707070]'>Progressively empower business "outside the box" thinking with resource-leveling partnerships.</p>

                                <button className='flex gap-1 items-center text-[#7e8299] font-medium mt-4 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                            </div>
                        </div>
                    </div>  <div className='bg-white rounded p-12 w-[520px]  '>
                        <div className='flex gap-4'>
                            <div>
                                <TfiVector size={50} className='text-[#e80566]' />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold font-Poppins text-[#000000]'>Creative Consultancy</h1>
                                <p className='font-Poppins mt-3 text-[#707070]'>Progressively empower business "outside the box" thinking with resource-leveling partnerships.</p>

                                <button className='flex gap-1 items-center text-[#7e8299] font-medium mt-4 hover:text-[#e80566] duration-300'><span>Read more</span> <span><BsArrowRightShort /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualityServices;
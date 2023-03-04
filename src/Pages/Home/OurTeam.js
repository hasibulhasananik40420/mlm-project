import React from 'react';
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineDribbble, AiOutlineYoutube, AiOutlineTwitter } from 'react-icons/ai'
const OurTeam = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="lg:text-5xl text-3xl font-bold text-black font-Poppins mb-6">
                        Our Team
                    </h2>
                    <h1 className="font-normal text-xl md:text-xl lg:text-xl font-heading text-gray-900 mb-1">
                        Dynamically pursue reliable convergence rather than 24/7 process
                    </h1>
                    <h1 className="font-normal text-xl md:text-xl lg:text-xl font-heading text-gray-900">
                        improvements develop end-to-end customer service.
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-14 px-6">
                    <div className="lg:w-[350px] w-full bg-[#f5f5f5] rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36  border-8 border-white" src="https://corporx.themetags.com/assets/img/team/team-6.jpg" alt="" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>

                        <div className='flex gap-4 text-[#1a2c79] mt-4'>
                            <FaFacebookF size={17} />
                            <AiOutlineTwitter size={20} />
                            <AiOutlineYoutube size={20} />
                            <AiOutlineDribbble size={20} />
                        </div>
                        <p className='text-[#707070] mt-4 font-Poppins'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                    <div className="lg:w-[350px] w-full bg-[#f5f5f5] rounded-lg p-12 flex flex-col justify-center items-center ">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36  border-8 border-white" src="https://corporx.themetags.com/assets/img/team/team-4.jpg" alt="" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Maria J. Go</p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>

                        <div className='flex gap-4 text-[#1a2c79] mt-4'>
                            <FaFacebookF size={17} />
                            <AiOutlineTwitter size={20} />
                            <AiOutlineYoutube size={20} />
                            <AiOutlineDribbble size={20} />
                        </div>
                        <p className='text-[#707070] mt-4 font-Poppins'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>

                    <div className="lg:w-[350px] w-full bg-[#f5f5f5] rounded-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img className="object-center object-cover rounded-full h-36 w-36  border-8 border-white" src="https://corporx.themetags.com/assets/img/team/team-1.jpg" alt="" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-700 font-bold mb-2">Madurai Mani Iyer</p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>

                        <div className='flex gap-4 text-[#1a2c79] mt-4'>
                            <FaFacebookF size={17} />
                            <AiOutlineTwitter size={20} />
                            <AiOutlineYoutube size={20} />
                            <AiOutlineDribbble size={20} />
                        </div>
                        <p className='text-[#707070] mt-4 font-Poppins'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>



                </div>
            </section>
        </div>
    );
};

export default OurTeam;
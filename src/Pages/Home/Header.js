import React from 'react';

const Header = () => {
    return (
        <div>
            <section
                className="  min-h-[100vh] lg:flex items-center mt-12 bg-gradient-to-r from-[#1a2c79] to-[#b0b0fa]"
            >
                <div className='lg:flex '>
                    {/* text part */}
                    <div className=" p-4  w-full ">
                        <h3 className='text-lg mb-4 font-poppins'>BUSINESS SOLUTIONS</h3>
                        <h3 className='lg:text-5xl text-2xl font-poppins mb-4  font-bold '>Your Most Trusted </h3>
                        <h3 className='lg:text-5xl text-2xl font-poppins mb-4  font-bold '>Business Partner </h3>
                        <h3 className='text-lg pt-3'>Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.
                        </h3>
                        <button className='bg-[#e80566] my-6 py-3 px-4 rounded hover:bg-[#fd2281] text-white  font-medium font-poppins  duration-500'>Get Start Now </button>
                    </div>
                    {/* Course Card */}
                    <div className=" w-full">
                        <div className='w-full '>
                            <img className='w-full h-full ' src="https://corporx.themetags.com/assets/img/portfolios/5.jpg" alt="" />

                        </div>


                    </div>

                </div>


            </section>
        </div>
    );
};

export default Header;
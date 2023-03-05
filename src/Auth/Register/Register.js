import React from 'react';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineUser } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Register = () => {

    // const location = useLocation();

    // const renderFooter = location.pathname !== '/register';

    return (
        <>

            <div className="   ">
                <div className='pt-24'>
                    <div className=' '>


                        <div className='bg-white lg:w-[450px] w-full mx-auto rounded-md p-6 border shadow-lg'>

                            <form>

                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Father Name</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Father Name" />
                                    </div>
                                </div>

                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Mother Name</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Mother Name" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Father's NID</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Father's NID" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Mother's NID</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Mother's NID" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Date Of birth</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Date Of birth" />
                                    </div>
                                </div>

                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">NID/Passport</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="NID/Passport" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Nominee Name</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Nominee Name" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Relationship with Nominee</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Relationship with Nominee" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Date of birth (nominee)</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Date of birth (nominee)" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">NID/ Birth certificate (nominee)</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="NID/ Birth certificate (nominee)" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="Name" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Mobile Number</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Mobile Number" />
                                    </div>
                                </div>


                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="email" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Email Address</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineMail size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="name@gmail.com" />
                                    </div>
                                </div>

                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="email" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Bank account no.</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Bank account no." />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="email" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Mobile banking account no.</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Mobile banking account no." />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="email" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Address</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="email" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Referrer name</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Referrer name" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="email" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Referrer id</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Referrer id" />
                                    </div>
                                </div>

                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="email" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Citizen certificate</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="name" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Citizen certificate" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6 mt-6">
                                    <label for="email" className="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Image</label>
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                            <AiOutlineUser size={20} />
                                        </div>

                                        <input id="name" type="file" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" />
                                    </div>
                                </div>





                                <div className="mb-3 flex flex-wrap content-center">
                                    <label for="remember" className="mr-auto font-Poppins font-semibold cursor-pointer">Already have an accout?</label>
                                    <Link to='/login' className=" font-semibold text-purple-700">Login now</Link>
                                </div>

                                <button className='w-full bg-[#e80566] text-white font-Poppins font-medium rounded-md h-12 mt-2 '>Singup</button>


                            </form>










                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Register;
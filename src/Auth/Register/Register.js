import React from 'react';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineUser } from 'react-icons/ai';

const Register = () => {
    return (
        <div className='register-banner'>
            <div className='pt-24 px-14'>
                <div className='flex justify-between pt-20 '>
                    <div className='w-2/4'>
                        <h1 className='lg:text-5xl text-2xl font-bold font-Poppins text-white'>Create Your</h1>
                        <h1 className='lg:text-5xl text-2xl font-bold font-Poppins text-white mt-3'>Account</h1>
                        <p className='text-xl font-medium font-Poppins text-white mt-6'>Keep your face always toward the sunshine - and</p>
                        <p className='text-xl font-medium font-Poppins text-white mt-1'>shadows will fall behind you.</p>

                    </div>

                    <div className='bg-white lg:w-[450px] w-full rounded-md p-6'>


                        <h1 className='lg:text-4xl text-2xl font-semibold font-Poppins pt-4'>Create Account</h1>
                        <p className='font-Poppins pt-3 text-xl text-[#7e8299]'>Sign in to your account to continue.</p>


                        <form>

                            <div class="flex flex-col mb-6 mt-6">
                                <label for="email" class="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Your Name</label>
                                <div class="relative">
                                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                        <AiOutlineUser size={20} />
                                    </div>

                                    <input id="name" type="name" name="name" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Enter Your Name" />
                                </div>
                            </div>


                            <div class="flex flex-col mb-6 mt-6">
                                <label for="email" class="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Email Address</label>
                                <div class="relative">
                                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                        <AiOutlineMail size={20} />
                                    </div>

                                    <input id="name" type="name" name="name" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="name@gmail.com" />
                                </div>
                            </div>

                            <div class="flex flex-col mb-6 mt-6">
                                <label for="email" class="mb-1 text-xl font-medium sm:text-sm tracking-wide text-gray-600">Password</label>
                                <div class="relative">
                                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">


                                        <AiOutlineUnlock size={20} />
                                    </div>

                                    <input id="name" type="name" name="name" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Enter Your Password" />
                                </div>
                            </div>


                            <div class="mb-3 flex flex-wrap content-center">
                                <input id="remember" type="checkbox" class="mr-1 checked:bg-purple-700" /> <label for="remember" class="mr-auto font-Poppins font-semibold cursor-pointer">I agree to the terms and conditions</label>
                                <a href="#" class=" font-semibold text-purple-700">Forgot password?</a>
                            </div>

                            <button className='w-full bg-[#e80566] text-white font-Poppins font-medium rounded-md h-12 mt-2 '>Singup</button>


                        </form>










                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
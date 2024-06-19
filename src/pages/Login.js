import React from 'react';
import { FiUser } from "react-icons/fi";
import { RiLock2Line } from "react-icons/ri";

const LoginPage = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 flex flex-col items-center p-8">
                <div className='flex flex-row justify-center'>
                    <img src="/logo.png" alt="Logo" className="mb-4 h-10 w-10" />
                    <p className='mt-2 font-bold text-2xl'>Parambil Lab</p>
                </div>
                <div className="text-center mb-8 mt-28">
                    <h1 className="text-3xl">Welcome Back</h1>
                    <p className="text-black">Login with your account to access dashboard</p>
                </div>
                <form className="w-full max-w-sm mt-20">
                    <div className="mb-4">
                        <div className="relative">
                            <input
                                type="text"
                                contentEditable={false}
                                value={'Parambil Lab'}
                                className="w-full p-3 border border-gray-200 text-md rounded-2xl text-center"
                                style={{ height: '48px', lineHeight: '48px' }}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} />
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full pl-10 p-4 rounded-2xl focus:outline-none text-sm focus:ring-2 focus:ring-purple-600 placeholder-black bg-logintxt"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="relative">
                            <RiLock2Line className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-logintxt placeholder-black "
                            />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-32 p-3 bg-loginbtn text-white rounded-xl font-bold text-sm hover:bg-purple-600 shadow-xl transition duration-300"
                        >
                            Login Now
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/2 flex relative">
                <img src="/loginimg2.png" alt="Background" className="absolute w-full h-full object-cover" />
                <div className="relative h-fit min-h-4/6 w-1/2 rounded-3xl border mt-40 ml-32 p-5 border-white bg-loginbox2 bg-opacity-75 flex flex-col items-center justify-between gap-3">
                    <div className="w-full">
                        <h1 className='text-white font-extrabold text-5xl space-y-3'>Redefining <br/> Lab <br/>  Excellence</h1>
                    </div>
                    <div className='w-full h-full min-h-fit'>
                        <img src="/loginimg1.png" alt="Background" className=" w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/AuthSlice.ts";
import {Link} from "react-router-dom";
const Register: React.FC = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
          name: "",
          email: "",
          password: "",
          role: "Client",
        });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(register(formData));
    };

    return (
        <div className="container my-20 lg:mb-32">
            <h2 className="flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                Sign Up
            </h2>
            <div className="max-w-md mx-auto space-y-6">
                <form className="grid mt-5 grid-cols-1 gap-6" onSubmit={handleSubmit}>

                    <label className="block">
                        <span className="text-neutral-800 dark:text-neutral-200">Name</span>
                        <input
                            type="text"
                            onChange={handleInputChange}
                            className="block w-full border border-gray-600 outline-0 text-black bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                            placeholder="John"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="text-neutral-800 dark:text-neutral-200">Email address</span>
                        <input
                            type="email"
                            onChange={handleInputChange}
                            className="block w-full border border-gray-600 outline-0 text-black bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                            placeholder="example@example.com"
                            required
                        />
                    </label>

                    <label className="block">
                        <span
                            className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Password</span>
                        <input
                            type="password"
                            onChange={handleInputChange}
                            className="block w-full border border-gray-600 outline-0 text-black bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                            required
                        />
                    </label>

                    <label htmlFor="roles" className="block text-sm font-medium text-gray-900 dark:text-white">
                        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Select Role</span>
                        <select
                            id="roles"
                            onChange={handleInputChange}
                            className="block w-full border border-gray-600 outline-0 text-black bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1 dark:bg-[#1F2937] dark:text-white"
                            required
                        >
                            <option value={'Client'}>Client</option>
                            <option value={'Admin'}>Admin</option>
                        </select>
                    </label>

                    <button
                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                        type="submit"
                    >
                        Continue
                    </button>
                </form>

                <span className="block text-center text-neutral-700 dark:text-neutral-300">
                    Already have an account? <Link to='/login' className="text-blue-500">Login</Link>
                </span>
            </div>
        </div>
    );
};


export default Register
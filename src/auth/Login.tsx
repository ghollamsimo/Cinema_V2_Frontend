import React, {useState} from "react";
import {login} from "../redux/slices/AuthSlice.ts";
import { useDispatch } from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import Register from "./Register.tsx";

const Login : React.FC= () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const resultAction = await dispatch(login(formData));
        if (login.fulfilled.match(resultAction)) {
            const token = resultAction.payload.token;
            localStorage.setItem("token", token);

        } else {
            console.error(resultAction.payload);
        }
    };
  return(
      <>
          <div className='mt-36 text-white'>
              <div className="container  mb-24 lg:mb-32">
                  <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                      Login
                  </h2>
                  <div className="max-w-md mx-auto space-y-6">
                      <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                          <label className="block">
                              <span className="text-neutral-800 dark:text-neutral-200">Email address</span>
                              <input
                                  type="email"
                                  onChange={handleInputChange}
                                  className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                  placeholder="example@example.com"
                              />
                          </label>
                          <label className="block">
                            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                                Password
                                <a className="text-sm" href="/forgot-pass">
                                    Forgot password?
                                </a>
                            </span>
                              <input
                                  type="password"
                                  onChange={handleInputChange}
                                  className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                              />
                          </label>
                          <button
                              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                              type="submit">
                              Continue
                          </button>
                      </form>
                      <span className="block text-center text-neutral-700 dark:text-neutral-300">
                        New user? <Link to="/register">Create an account</Link>
                    </span>

                  </div>
              </div>
          </div>

          <Routes>
              <Route path="/register" element={<Register/>}/>
          </Routes>
      </>
  )
}

export default Login
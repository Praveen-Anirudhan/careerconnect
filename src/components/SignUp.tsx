import React, {useState} from 'react';
import {Briefcase, MoveLeft} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {signUpRequest} from "../redux/features/auth/authSlice.ts";
import {useDispatch} from "react-redux";

const SignUp = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try{
            dispatch(signUpRequest({email, password, role: 'RECRUITER'}))
            navigate('/recruiter/dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center sm:min-h-screen overflow-y-auto">

            <div className="flex flex-col items-center gap-2 py-8">
                <div className="flex items-center gap-2">
                    <Briefcase className="text-cyan-600" size={32}/>
                    <h1 className="text-3xl font-bold">CareerConnect</h1>
                </div>
                <p className="text-black/40 text-lg">Recruiter Portal</p>
            </div>

            <div
                className="border border-gray-400 rounded-lg p-6 w-full max-w-sm shadow-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
                <form className="">
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-bold">Welcome Back</p>
                        <p className="text-black/40">Sign Up to your recruiter account</p>
                    </div>

                    <div className="flex flex-col pt-6 gap-1">
                        <label htmlFor="email" className="mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="recruiter@company.com"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col pt-6 gap-1">
                        <label htmlFor="password" className="mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full flex justify-center items-center gap-2 bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition mt-6`}
                        onClick={handleSubmit}
                        disabled={!email || !password}
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-4 flex flex-col gap-4 text-center">
                    <p className="text-cyan-600 hover:underline cursor-pointer">Forgot password?</p>
                    <Link to="/recruiter/signup" className="flex flex-row gap-2 justify-center items-center">
                        <MoveLeft className="text-cyan-600"/>
                        <p className="text-cyan-600 hover:underline cursor-pointer">Don't have an account?</p>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default SignUp;
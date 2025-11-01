export default function Login(){
    return(
        <div className="relative flex flex-col justify-center items-center h-screen">

            <div className="absolute top-16 flex flex-col items-center gap-2">
                <h1 className="text-3xl font-bold">CareerConnect</h1>
                <p className="text-black/40 text-lg">Recruiter Portal</p>
            </div>

            <div className="border-1 border-gray-400 rounded-lg p-6 w-full max-w-lg shadow-lg">
                <form className="">
                        <div className="flex flex-col gap-2">
                            <p className="text-3xl font-bold">Welcome Back</p>
                            <p className="text-black/40">Sign in to your recruiter account</p>
                        </div>

                        <div className="flex flex-col pt-6 gap-1">
                            <label htmlFor="email" className="mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="recruiter@company.com"
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition mt-6 "
                        >
                            Sign In
                        </button>
                </form>

                <div className="mt-4 flex flex-col gap-4 text-center">
                    <p className="text-cyan-600 hover:underline cursor-pointer">Forgot password?</p>
                    <p className="text-cyan-600 hover:underline cursor-pointer">Back to candidate portal</p>
                </div>
            </div>

        </div>
    )
}
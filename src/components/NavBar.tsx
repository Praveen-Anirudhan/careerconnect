import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSuitcase } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95">
            <div className="flex h-16 items-center justify-between px-4 lg:px-8">

                <a href="#home" className="flex items-center gap-2 flex-shrink-0">
                   <FontAwesomeIcon icon={faSuitcase} size="xl" className="text-teal-500" />
                    <span className="text-xl font-bold text-gray-600">CareerConnect</span>
                </a>

                <div className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
                    <a
                        href="#home"
                        className="text-sm font-medium transition-colors hover:text-teal-500 text-gray-600"
                    >
                        Home
                    </a>
                    <a
                        href="#jobs"
                        className="text-sm font-medium transition-colors hover:text-teal-500 text-gray-600"
                    >
                        Jobs
                    </a>
                    <a
                        href="#my-applications"
                        className="text-sm font-medium transition-colors hover:text-teal-500 text-gray-600"
                    >
                        My Applications
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-600 rounded-md hover:bg-teal-500 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        Recruiter Login
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-teal-500 text-white text-gray-600 rounded-md hover:bg-teal-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

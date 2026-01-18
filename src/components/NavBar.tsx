import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, User } from 'lucide-react';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <Link to="home" className="flex items-center gap-2 flex-shrink-0">
          <Briefcase className="h-8 w-8 text-cyan-500" />
          <span className="text-xl font-bold text-gray-600">CareerConnect</span>
        </Link>

        <div className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="#home"
            className="text-sm font-medium transition-colors hover:text-cyan-500 text-gray-600"
          >
            Home
          </Link>
          <Link
            to="jobs"
            className="text-sm font-medium transition-colors hover:text-cyan-500 text-gray-600"
          >
            Jobs
          </Link>
          <Link
            to="my-applications"
            className="text-sm font-medium transition-colors hover:text-cyan-500 text-gray-600"
          >
            My Applications
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-600 rounded-md hover:bg-cyan-500 hover:text-white transition-colors"
            onClick={() => navigate('/recruiter/login')}
          >
            <User className="h-4 w-4 mr-2" />
            Recruiter Login
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-cyan-500 text-white text-gray-600 rounded-md hover:bg-cyan-600 transition-colors">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

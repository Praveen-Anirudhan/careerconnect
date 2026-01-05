import { useNavigate } from 'react-router-dom';
import { Ghost } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 p-4">
      <Ghost className="text-cyan-400 text-9xl animate-bounce mb-6" />

      <h1 className="text-6xl font-extrabold text-cyan-600 mb-4">404</h1>

      <p className="text-xl text-gray-700 mb-8 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist. Maybe you took a wrong
        turn?
      </p>

      <button
        onClick={() => navigate('/')}
        className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white font-semibold rounded-lg shadow-lg hover:shadow-xl"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;

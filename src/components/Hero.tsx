import { ArrowRight} from 'lucide-react';
import SearchBar from './SearchBar.tsx';
import { heroImage } from '../../public/images/images.tsx';

const Hero = () => {

    return (
         <section className="relative bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find Your Dream Job
              <span className="block text-cyan-600 mt-2">Today</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Connect with top companies and discover opportunities that match your skills and passion. 
              Start your career journey with CareerConnect.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 cursor-pointer transition-colors flex items-center gap-2 text-lg">
                Browse Jobs <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-6 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 cursor-pointer transition-colors text-lg">
                For Recruiters
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="hidden md:block">
            <img 
              src={heroImage} 
              alt="Professional team collaborating" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
    <div className="mt-12">
          <SearchBar />
        </div>
      </div>
    </section>
    )
}

export default Hero;
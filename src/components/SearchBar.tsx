import { Search, MapPin } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-3 border border-cyan-400 rounded-lg">
          <Search className="h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Job title or keyword"
            className="flex-1 outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-3 p-3 border border-cyan-400 rounded-lg">
          <MapPin className="h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="City or remote "
            className="flex-1 outline-none text-sm"
          />
        </div>
        <button className="bg-cyan-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-cyan-700 cursor-pointer transition-colors flex items-center justify-center gap-2 ">
          <Search className="h-5 w-5" />
          Search Jobs
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
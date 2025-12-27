import {Ghost} from 'lucide-react';

const Offline = () => (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan-50 text-center gap-2">
        <Ghost className="h-24 w-24 text-cyan-600 animate-bounce" />
        <h1 className="text-3xl font-bold text-cyan-700">
            Boo! Your internet ghosted you 👻
        </h1>
        <p className="text-cyan-600">
            Check your Wi-Fi or sacrifice a router.
        </p>
    </div>

)

export default Offline;
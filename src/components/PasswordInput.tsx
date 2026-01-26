import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
}

const PasswordInput = ({ password, setPassword }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
        <div className="relative">
            <input
                type={showPassword ? 'text' : "password"}
                id="password"
                name="password"
                placeholder="********"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
    );
};

export default PasswordInput;
export const TextInput = ({ label, placeholder }: { label: string; placeholder: string }) => {
    return (
        <div className="flex flex-col">
            <label className="mb-1 font-medium">{label} *</label>
            <input
                type="text"
                placeholder={placeholder}
                className="border border-gray-400 focus:border-cyan-600 focus:outline-none rounded-md p-2"
            />
        </div>
    );
};

export const TextArea = ({ label, placeholder }: { label: string; placeholder: string }) => {
    return (
        <div className="flex flex-col">
            <label className="mb-1 font-medium">{label} *</label>
            <textarea
                placeholder={placeholder}
                className="border border-gray-400 focus:border-cyan-600 focus:outline-none rounded-md p-2 min-h-[100px]"
            />
        </div>
    );
};

export const SelectInput = ({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) => {
    return (
        <div className="relative flex flex-col">
            <label className="mb-1 font-medium">{label} *</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border border-gray-400 focus:border-cyan-600 focus:outline-none rounded-md p-2 w-full appearance-none"
            >
                <option value="">Select a type</option>
                {options.map((option) => (
                    <option key={option} value={option} className="text-gray-500 p-2">
                        {option}
                    </option>
                ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-[38px] text-gray-500">▼</span>
        </div>
    );
};



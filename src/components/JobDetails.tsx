export const TextInput = ({ label, placeholder }: { label: string; placeholder: string }) => {
    return (
        <div className="flex flex-col">
            <label className="mb-1 font-medium">{label} *</label>
            <input
                type="text"
                placeholder={placeholder}
                className="border rounded-md p-2"
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
                className="border rounded-md p-2 min-h-[80px]"
            />
        </div>
    );
};



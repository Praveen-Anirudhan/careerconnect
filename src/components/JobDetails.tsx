import React from 'react';

interface SelectInputProps {
  label: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
}

export const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label} *</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-400 focus:border-cyan-600 focus:outline-none rounded-md p-2"
      />
    </div>
  );
};

export const TextArea = ({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">{label} *</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-400 focus:border-cyan-600 focus:outline-none rounded-md p-2 min-h-[100px]"
      />
    </div>
  );
};

export const SelectInput = ({
  label,
  options,
  value,
  onChange,
}: SelectInputProps) => {
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
          <option
            key={option.value}
            value={option.value}
            className="text-gray-500 p-2"
          >
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-[38px] text-gray-500">
        ▼
      </span>
    </div>
  );
};

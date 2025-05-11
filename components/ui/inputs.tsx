import { JSX } from "react";

export function InputField({ label, type, placeholder, value, onChange }:{ label: string; type: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }): JSX.Element {
    return (
        <div className="mb-4">
            <label className="w-full block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
                {label}
            </label>
            <input
                className="w-full border border-gray-300 rounded p-2"
                id={label}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export function TextAreaField({ label, placeholder, value, onChange }:{ label: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }): JSX.Element {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
                {label}
            </label>
            <textarea
                className="border border-gray-300 rounded p-2"
                id={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export function SelectField({ label, options, value, onChange }:{ label: string; options: { value: string; label: string }[]; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }): JSX.Element {
    if (!options || options.length === 0) {
        return <div className="mb-4">No options available</div>;
    }
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
                {label}
            </label>
            <select
                className="border border-gray-300 rounded p-2"
                id={label}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
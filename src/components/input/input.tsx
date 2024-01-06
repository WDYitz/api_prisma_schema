type InputType = {
    placeholder: string;
    label: string;
    onChange: any;
    value: string;
}
export const Input = ({ placeholder, label, onChange, value }: InputType) => {
    return (
        <>
            <label htmlFor={label} className="block text-sm font-medium leading-6 text-white">{label}</label>
            <div className="relative mt-2 rounded-md shadow-sm w-full">
                <input
                    type="text" name="email" id={label} className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}
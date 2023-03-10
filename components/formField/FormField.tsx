type FormFieldType = {
    type: string,
    label: string,
    value: string,
    name: string,
    handleChange: any
}

const FormField = ({ label, name, type, value, handleChange }: FormFieldType) => {
    return (
        <>
            <main className="text-gray-600 font-semibold mb-10 flex flex-col items-start">
                <label htmlFor={label} className="text-center capitalize" >{label}</label>
                <input
                    required
                    name={name}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    className={`${name === "name" && "capitalize"} bg-transparent border-b-2 border-gray-600 px-4 outline-none w-[30em] max-2xl:w-full h-[7vh]`} id={label}
                />
            </main>
        </>
    )
}

export default FormField;

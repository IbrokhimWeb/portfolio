import { useState } from "react";
import gsap from "gsap";
import FormField from "../components/formField/FormField";


const Contact: React.FC = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`
        👨🏻‍💻 Kimdan: ${name}\n
        📧 Pochta: ${email}\n
        ☎️ Nomer: ${number}\n
        🖇 Xabar: ${message}
        `);
        alert("Siz Kiritgan Malumotlar Adminga Yuborildi")

        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
    };







    return (
        <>
            <main className="w-full h-[90vh] flex items-center justify-center overflow-auto">
                <div className="pt-10 w-[80%] h-full">
                    <section className="text-white">
                        <h1 className="text-[3.5rem] font-bold">Contact Me!</h1>
                        <p className="text-[1.3rem] text-gray-500">If you have any information, you can send it to me by filling the fields below correctly and clicking the button</p>
                    </section>
                    <form onSubmit={handleSubmit} className="mt-10">
                        <div className="flex justify-between max-2xl:block">
                            <section>
                                <FormField label="Your Name" type="text" value={name} onChange={setName} />
                                <FormField label="Your Email" type="email" value={email} onChange={setEmail} />
                                <FormField label="Phone Number" type="text" value={number} onChange={setNumber} />
                            </section>
                            <section className="flex flex-col text-gray-600">
                                <label htmlFor="textarea">Type Your Message Here</label>
                                <textarea
                                    required
                                    id="textarea"
                                    value={message}
                                    cols={80} rows={5}
                                    onChange={(e) => setMessage(e?.target?.value)}
                                    className="outline-none p-3 bg-transparent border-b-2 border-gray-600 mb-10"
                                ></textarea>
                            </section>
                        </div>
                        <button className="text-white w-[200px] max-2xl:w-full mb-10 h-[45px] bg-green-600" type="submit">Send</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Contact;

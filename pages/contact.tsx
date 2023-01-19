import { useState } from "react";
import FormField from "../components/formField/FormField";


const Contact: React.FC = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, number, message } = data;
        let myText = `👨🏻‍💻 Kimdan: <b> ${name}</b> %0A`;
        myText += `📧 Pochta: <b> ${email}</b> %0A`;
        myText += `☎️ Nomer: <b> ${number}</b> %0A`;
        myText += `🖇 Xabar: <b> ${message}</b> %0A`;


        let api = new XMLHttpRequest();
        api.open(
            "GET",
            `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}&text=${myText}&parse_mode=html`,
            true
        );
        api.send();
        alert("Siz Kiritgan Malumotlar Adminga Yuborildi")
        setData({
            name: '',
            email: '',
            number: '',
            message: '',
        })
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
                                <FormField label="Your Name" name="name" type="text" value={data.name} handleChange={handleChange} />
                                <FormField label="Your Email" name="email" type="email" value={data.email} handleChange={handleChange} />
                                <FormField label="Phone Number" name="number" type="text" value={data.number} handleChange={handleChange} />
                            </section>
                            <section className="flex flex-col text-gray-600">
                                <label htmlFor="textarea">Type Your Message Here</label>
                                <textarea
                                    required
                                    id="textarea"
                                    value={data.message}
                                    cols={80} rows={5}
                                    name="message"
                                    onChange={handleChange}
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

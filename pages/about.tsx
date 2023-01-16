import Image from "next/image";
import my from "../public/images/my.jpg";

const About = () => {

    function calculateAge(birthDate: Date): number {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const birthDate = new Date(2001, 7, 28);

    return (
        <>
            <main className="w-full min-h-[90vh] flex items-center justify-center">
                <div className="flex items-center gap-10 justify-center">
                    <section className="flex items-center justify-center">
                        <Image className="w-[25em] rounded-full" src={my} alt="" />
                    </section>
                    <section className="text-white px-10 w-[60%] flex flex-col">
                        <h1 className="text-[4rem] font-bold">About Me!</h1>
                        <p className="text-[1.4rem] text-gray-500">Hello my dears! I am Ibrokhim Ergashov, {calculateAge(birthDate) + " "} years old. I am from Tashkent, Uzbekistan and currently live in Parkent, Tashkent region. So, I have been learning programming since 2019 and completed my full education as a model student at Astrum IT Academy from 2020 to early 2023!</p>
                        <h1 className="text-[1.6rem] font-bold my-3">Why I chose Front-End ?</h1>
                        <p className="text-[1.4rem] text-gray-500">I really enjoy writing code, it seems to calm my nerves. The reason I chose Front-End is that it seems to have a life</p>
                    </section>
                </div>
            </main>
        </>
    )
}

export default About;

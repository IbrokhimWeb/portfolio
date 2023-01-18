import Image from "next/image";
import s from "../styles/about.module.scss";
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
            <main className={`${s.main} w-full min-h-[90vh] flex items-center justify-center`}>
                <div className={`${s.box} flex items-center gap-10 justify-center p-20`}>
                    <section className={`${s.image} flex items-center justify-center`}>
                        <Image className={`${s.img} w-[25em] rounded-full`} src={my} alt="" />
                    </section>
                    <section className={`${s.description} text-white px-10 w-[60%] flex flex-col`}>
                        <h1 className={`${s} text-[4rem] font-bold`} >About Me!</h1>
                        <p className={`${s} text-[1.4rem] text-gray-500`}>Hello my dears! I am Ibrokhim Ergashov, {calculateAge(birthDate) + " "} years old. I am from Tashkent, Uzbekistan and currently live in Parkent, Tashkent region. So, I have been learning programming since 2021 and completed my full education as a model student at Astrum IT Academy from 2022 to early 2023!</p>
                        <h2 className={`${s} text-[1.6rem] font-bold my-3`}>Why I chose Front-End ?</h2>
                        <p className={`${s} text-[1.4rem] text-gray-500`}>I really enjoy writing code, it seems to calm my nerves. The reason I chose Front-End is that it seems to have a life</p>
                    </section>
                </div>
            </main>
        </>
    )
}

export default About;

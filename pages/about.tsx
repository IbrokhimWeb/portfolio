import Image from "next/image";
import my from "../public/images/my.jpg";

const About = () => {
    return (
        <>
            <main className="w-full min-h-[90vh] flex items-center justify-center">
                <div className="flex items-center justify-center max-lg:block">
                    <section className="flex items-center justify-center max-lg:mt-[50px]">
                        <Image className="w-[25em] rounded-full mr-10 max-lg:mr-0 max-sm:w-[15rem]" src={my} alt="" />
                    </section>
                    <section className="text-white w-[50%] max-lg:w-[100%] px-[10%] flex flex-col items-center justify-center">
                        <h1 className="text-[4rem] font-bold max-lg:text-center max-sm:text-[2.5rem]">About Me!</h1>
                        <p className="text-[1.4rem] text-gray-500 max-lg:text-center max-sm:text-[1rem]">Hello my dears! I am Ibrokhim Ergashov, 21 years old. I am from Tashkent, Uzbekistan and currently live in Parkent, Tashkent region. So, I have been learning programming since 2019 and completed my full education as a model student at Astrum IT Academy from 2020 to early 2023!</p>
                        <h1 className="text-[1.6rem] font-bold max-lg:text-center max-sm:text-[1.2rem] max-sm:my-3">Why I chose Front-End ?</h1>
                        <p className="text-[1.4rem] text-gray-500 max-lg:text-center max-sm:text-[1rem]">I really enjoy writing code, it seems to calm my nerves. The reason I chose Front-End is that it seems to have a life</p>
                    </section>
                </div>
            </main>
        </>
    )
}

export default About;

import Image from "next/image";
import my from "../public/images/my.jpg";

const About = () => {
    return (
        <>
            <main className="wi-full h-[90vh] flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <section>
                        <Image className="w-[25em] rounded-full mr-10" src={my} alt="" />
                    </section>
                    <section className="text-white w-[50%]">
                        <h1 className=" text-[4rem] font-bold">About Me!</h1>
                        <p className="text-[1.4rem] text-gray-500">Hello my dears! I am Ibrokhim Ergashov, 21 years old. I am from Tashkent, Uzbekistan and currently live in Parkent, Tashkent region. So, I have been learning programming since 2019 and completed my full education as a model student at Astrum IT Academy from 2020 to early 2023!</p>
                        <h1 className="text-[1.6rem] my-5 font-bold">Why I chose Front-End ?</h1>
                        <p className="text-[1.4rem] text-gray-500">I really enjoy writing code, it seems to calm my nerves. The reason I chose Front-End is that it seems to have a life</p>
                    </section>
                </div>
            </main>
        </>
    )
}

export default About;

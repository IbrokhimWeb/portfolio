import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import s from "../styles/home.module.scss";
import my from "../public/images/my.jpg"
import { BsYoutube, BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const Home: NextPage = () => {

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
            <main className={`${s.main} w-full min-h-[90vh] py-[10vh] flex items-center justify-center`}>
                <div className={`${s.box} w-[80%] flex items-center justify-between`}>
                    <section className="mb-[10vh]">
                        <h1 className="text-[3.5rem] font-bold text-white" >Hi, I'm Ibrokhim!</h1>
                        <p className="text-[1.3rem] text-gray-500">
                            {calculateAge(birthDate) + " "}
                            y.o Frontend Developer, Youtuber from Uzbekistan, Tashkent.
                            <br />
                            Welcome to my personal Website
                        </p>
                        <div className="flex items-center gap-5 mt-8">
                            <Link href="/about" className={`${s.button} w-[8em] h-[7vh] flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-[1.2rem] text-white`}>About Me</Link>
                            <a className={`${s.button} cursor-pointer w-[8em] h-[7vh] flex items-center font-semibold justify-center bg-green-500 hover:bg-green-600 hover:text-white text-[1.2rem]`}>Download SV</a>
                        </div>
                        <div className="flex items-center gap-6 mt-8">
                            <a target="" href="https://www.youtube.com/cyber_step1">
                                <BsYoutube className="text-white text-[2rem] hover:text-green-500" />
                            </a>
                            <a target="" href="https://github.com/IbrokhimWeb">
                                <BsGithub className="text-white text-[2rem] hover:text-green-500" />
                            </a>
                            <a target="" href="https://www.instagram.com/ibrokhimweb/">
                                <FiInstagram className="text-white text-[2rem] hover:text-green-500" />
                            </a>
                            <a target="" href="https://t.me/s/cyber_step">
                                <FaTelegramPlane className="text-white text-[2rem] hover:text-green-500" />
                            </a>
                        </div>
                    </section>
                    <section>
                        <Image className={`${s.my} w-[30em] rounded-full`} src={my} alt="" />
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home;

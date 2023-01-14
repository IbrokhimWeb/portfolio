import Link from "next/link";
import { useState } from "react";
import s from "./Navbar.module.scss";

const Navbar = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <nav className={`${s.main} w-full h-[10vh] px-[5em] flex items-center justify-between`}>
                <section className={`${s.brand}`}>
                    <Link href="/" className="text-[1.7rem] text-white hover:text-green-500 font-semibold">
                        Ibrokhim<span className="font-light">Web</span>
                    </Link>
                </section>
                <section
                    onClick={() => setOpen(!open)}
                    style={{ display: "none" }}
                    className={`${s.hamburger} ${open ? "relative" : ""} transition duration-150 ease-in w-[30px] h-[30px] flex flex-col items-center justify-center gap-1 bg-green-500`}
                >
                    <div className={`${open ? "absolute rotate-[45deg]" : "rotate-0"}  bg-white w-[20px] h-[2px] rounded-lg`}></div>
                    <div style={open ? { display: "none" } : { display: "block" }} className="bg-white w-[20px] h-[2px] rounded-lg"></div>
                    <div className={`${open ? "absolute rotate-[-45deg]" : "rotate-0"} bg-white w-[20px] h-[2px] rounded-lg`}></div>
                </section>
                <section
                    style={open ? { left: 0 } : { left: "-7000px" }}
                    className={`${s.navigation} flex items-center gap-7`}
                >
                    <Link className="text-gray-500 text-600 text-[1.2rem] hover:text-green-500" href="/portfolio">Portfolio</Link>
                    <Link className="text-gray-500 text-600 text-[1.2rem] hover:text-green-500" href="/about">About Me</Link>
                    <Link className="text-gray-500 text-600 text-[1.2rem] hover:text-green-500" href="/contact">Contact</Link>
                    <Link className="text-red-600  text-600 text-[1.2rem] hover:text-green-500" href="/faqs">FAQs</Link>
                </section>
            </nav>
        </>
    )
}

export default Navbar;

import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/Navbar';
import { Background } from '../components/background/Background';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className="w-full container mx-auto">
                <section className="w-[100%] h-[100vh] fixed z-[-1]">
                    <Background />
                </section>
                <Navbar />
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp

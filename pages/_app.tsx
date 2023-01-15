import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className="w-full container mx-auto">
                <Navbar />
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp

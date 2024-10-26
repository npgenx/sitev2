
import Link from 'next/link'

export default function NotFound() {
    return <section
        id="404"
        className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
        style={{ transform: "scale(0.9" }}
    >
        <div className="flex flex-col  place-content-center justify-around flex-wrap items-center   max-w-[900px] mt-24">
            <h1 className="text-white font-semibold text-6xl">These are not the Droids you are looking for......</h1>

            <Link href="/" className="text-center text-white place-content-center mt-24 ">Go back to Homepage</Link>

        </div>
    </section>
}
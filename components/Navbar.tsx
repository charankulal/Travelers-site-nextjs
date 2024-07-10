import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/hilink-logo.svg" height={29} width={74} alt="logo"/>
                <ul className="hidden h-full gap-12 lg:flex">
                    
                </ul>
            </Link>


        </nav>
    )
}

export default Navbar
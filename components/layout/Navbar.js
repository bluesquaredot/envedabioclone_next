import Image from 'next/image';
import {AiOutlineMenu} from "react-icons/ai";

export default function Navbar() {
    const NavbarItem = ({ text }) => <li className="list-none"><h1 className="text-white hover:text-green-700 text-lg font-medium tracking-wider ">{text}</h1></li>
    const Button=()=><div className="justify-end mr-20"><h3 className="bg-green-500 hover:bg-blue-50 rounded-full px-10 py-5 font-semibold text-lg ">GET IN TOUCH</h3></div>
    return (
        <nav className="header flex place-content-between place-self-center items-center">
            <div className="p-5 ml-20"><Image src="/images/logo.svg" alt="logo" height={150} width={150} /></div>
            <div className="flex space-x-20">
                <NavbarItem className="text-green" text="Wo We Are" />
                <NavbarItem text="What We Offer" />
                <NavbarItem text="How We Do It" />
                <NavbarItem text="People & Values" />
                <NavbarItem text="News & Views" />
            </div>
            <AiOutlineMenu style={{color: "white"}} />
            <Button/>
            
        </nav>
    )
}
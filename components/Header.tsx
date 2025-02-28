"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
    children: React.ReactNode;
    className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {

    const router = useRouter()

    const handleLogout = () => {
        // Handle logout later
    }

    return (
        <div className={twMerge(`
            h-fit bg-gradient-to-b from-emerald-800 p-6
        `, className)}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button type="button"
                        onClick={() => router.back()}
                        className="rounded-full bg-black flex items-center hover:opacity-75 transition">
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button type="button"
                        onClick={() => router.forward()}
                        className="rounded-full bg-black flex items-center hover:opacity-75 transition">
                        <RxCaretRight className="text-white" size={35} />
                    </button>
                </div>

                {/* For smaller Device */}
                <div className="flex md:hidden gap-x-2 items-center justify-center hover:opacity-75 transition">
                    <button type="button" className="rounded-full bg-white p-2">
                        <HiHome className="text-black" size={26} />
                    </button>
                    <button type="button" className="rounded-full bg-white p-2">
                        <BiSearch className="text-black" size={26} />
                    </button>
                </div>

                <div className="flex justify-between items-center gap-x-4">
                    <>
                        {/* Custom button (resue) */}
                        <div>
                            <Button className="bg-transparent text-neutral-300 font-medium"
                                onClick={() => { }} >
                                Sign Up
                            </Button>
                        </div>
                        {/* Custom button (resue) */}
                        <div>
                            <Button className="bg-white px-6 py-2"
                                onClick={() => { }} >
                                Log in
                            </Button>
                        </div>

                    </>
                </div>
            </div>

            {children}
        </div>
    );
}

export default Header;
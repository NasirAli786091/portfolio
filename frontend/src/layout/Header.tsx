import { FaAlignLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Navbar from "../components/Navbar";
import { useState } from "react";

export const Header = () => {
    const [icon, setIcon] = useState(true);
    const changeIcon = () => setIcon((prev) => !prev);
    const styleBtn = `cursor-pointer text-2xl sm:hidden`;

    return (
        <div className="flex gap-2 items-start">
            <div>
                <button onClick={changeIcon} className={styleBtn}>
                    {icon ? <FaAlignLeft /> : <ImCross />}
                </button>
            </div>
            <Navbar isOpen={!icon} />
            <a className="ml-auto mr-10 p-2 border rounded-full cursor-pointer hover:bg-gray-300 hover:text-black transition all duration-900 ease-in-out"
                href="/myCv/myCV.pdf"
                // download
                target="_blank"
                rel="noopener noreferrer"
            >
                CV
            </a>
        </div>
    )
}
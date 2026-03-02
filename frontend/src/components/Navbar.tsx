type NavProps = { isOpen: boolean };
import { NavLink } from "react-router";

function Navbar({ isOpen }: NavProps) {
    const navLinks = [
        {   
            id:1,
            link: "/",
            name: "./",
        },
        {   
            id: 2,
            link: "/projects",
            name:"Project"
        },
        {
            id: 3,
            link: "/about",
            name: "About"
        },
    ]
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-4 py-2 transition-colors duration-200 ${isActive ? "text-white font-bold" : "text-gray-600 hover:text-white"
        }`;
        
    return (
        <div className={`${isOpen ? "flex gap-2" : "hidden"} sm:flex sm:flex-row sm:gap-10`}>
            {
                navLinks.map((moveTo) => {
                    return(
                        <div key={moveTo.id}>
                            <NavLink to={moveTo.link!} className={navLinkClass}>{moveTo.name}</NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Navbar;
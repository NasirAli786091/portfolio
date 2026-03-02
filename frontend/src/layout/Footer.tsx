import { useNavigate, useLocation } from "react-router";
import { FaArrowCircleRight } from "react-icons/fa";

export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const routes = ["/", "/projects", "/about"];
    const curPage = routes.indexOf(location.pathname);
    const nextPage = routes[(curPage + 1) % routes.length];
    
    return (
        <div className="mt-5 flex items-center justify-end sm:mr-10 sm:mb-5">
            <button onClick={() => navigate(nextPage)} className="text-3xl cursor-pointer hover:text-gray-300 transition-all duration-900 ease-in-out">
                <FaArrowCircleRight />
            </button>
        </div>
    )
}
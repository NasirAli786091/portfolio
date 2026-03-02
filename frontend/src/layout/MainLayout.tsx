import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer"

export const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen p-3">
            <Header />
            <div className="flex-1 flex mt-5">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
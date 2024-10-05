import { Footer, Sidebar, TopMenu } from "@/components";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen ">

            <TopMenu />
            <Sidebar />
            <div className="px-0 sm:px-10">
                { children }

            </div>

            <Footer />
            <ToastContainer />
        </main>
    );
}
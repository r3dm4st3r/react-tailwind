import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const PublicLayout = () => {
    return(
        <div className="public">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default PublicLayout;
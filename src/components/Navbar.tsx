import { NavLink } from "react-router-dom";
import phuThoTourist from '../assets/svg/PhuThoTourist.svg';

function Navbar() {
    return (
        <div className="bg-[#002F5C] flex justify-center items-center fontPhilosopher-regular text-white uppercase gap-20 border-b-2">
            <NavLink to="/homepage" className={({ isActive}) => isActive 
                    ? "text-[#99FFFF] underline underline-offset-8" 
                    : "hover:text-[#99FFFF] underline-offset-8"}>
                Trang Chủ
            </NavLink>
            <NavLink
                to="/article" className={({ isActive }) => isActive 
                    ? "text-[#99FFFF] underline underline-offset-8" 
                    : "hover:text-[#99FFFF] underline-offset-8"}>
                Bài Viết
            </NavLink>
            <div className="py-5">
                <img src={phuThoTourist} alt="PhuThoTourist"/>
            </div>
            <NavLink
                to="/document" className={({ isActive }) => isActive 
                    ? "text-[#99FFFF] underline underline-offset-8" 
                    : "hover:text-[#99FFFF] underline-offset-8"}>
                Tài Liệu
            </NavLink>
            <NavLink
                to="/recruitment" className={({ isActive }) => isActive 
                    ? "text-[#99FFFF] underline underline-offset-8" 
                    : "hover:text-[#99FFFF] underline-offset-8"}>
                Tuyển Dụng
            </NavLink>
        </div>
    );
}

export default Navbar;

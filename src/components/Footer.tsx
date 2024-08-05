import PhuThoTourist from "../assets/svg/PhuThoTourist.svg";
import Locatiom from "../assets/svg/Location.svg";
import Phone from "../assets/svg/Phone.svg";
import Mail from "../assets/svg/Mail.svg";
import Facebook from "../assets/svg/Facebook.svg";

function Footer() {
    return (
        <footer>
            <div className="mt-20 w-full bg-[#002549CC] h-fit flex justify-between">
                <div className="flex flex-col justify-between pt-7 pb-9 pl-4">
                    <div className="flex">
                        <div>
                            <img src={PhuThoTourist} alt="PhuThoTourist Logo"/>
                        </div>
                        <div>
                        <span className="text-white fontHelvetica text-sm font-bold">
                                CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                        </span>
                            <br/>
                            <span className="text-[#99FFFF] fontHelvetica text-3xl font-bold">
                                PHUTHOTOURIST
                        </span>
                        </div>
                    </div>
                    <div className="text-sm fontRoboto text-white">
                        Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
                    </div>
                </div>
                
                <div className="text-white pt-7 pb-9 w-[250px]">
                    <h1 className="fontPhilosopher-regular text-2xl uppercase">Liên hệ</h1>
                    <div className="flex gap-4 pt-5">
                        <img src={Locatiom} alt="Location"/>
                        <p>15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM</p>
                    </div>
                    <div className="flex gap-4 pt-5">
                        <img src={Phone} alt="Phone"/>
                        <p>02838650921</p>
                    </div>
                    <div className="flex gap-4 pt-5">
                        <img src={Mail} alt="Mail"/>
                        <p>vanphong@damsenpark.vn</p>
                    </div>
                    <div className="flex gap-4 pt-5">
                        <img src={Facebook} alt="Facebook"/>
                        <p>Phuthotourist</p>
                    </div>
                </div>
                
                <div className="text-white pt-7 pb-9 pr-4">
                    <h1 className="fontPhilosopher-regular text-2xl uppercase">
                        Các đơn vị cùng hệ thống Phuthotourist
                    </h1>
                    <ul className="pl-5 list-disc pt-5 space-y-4">
                        <li>Công viên Văn hóa Đầm Sen</li>
                        <li>Khu du lịch sinh thái Vàm Sát</li>
                        <li>Khách sạn Ngọc Lan (Quận 1)</li>
                        <li>Khách sạn Phú Thọ (Quận 11)</li>
                        <li>Trung tâm Du lịch Đầm Sen</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

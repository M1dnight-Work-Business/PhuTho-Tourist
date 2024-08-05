import HoaSen from "../assets/png/HoaSen.png";
import BangDang from "../assets/png/BangDang.png";
import KhinhKhiCau from "../assets/png/KhinhKhiCau.png";
import HaiSan from "../assets/png/HaiSan.png";
import ThapDoi from "../assets/png/ThapDoi.png";
import StatusOnline from "../assets/svg/StatusOnline.svg";

function Homepage() {
    return (
        <section>
            <div className="px-[200px]">
                <div className="w-[560px]">
                    <h3 className="uppercase mt-20 text-xl fontRoboto font-semibold text-gray-600">Về chúng tôi</h3>
                    <h1 className="fontPhilosopher-regular text-4xl text-[#003F7D] pt-4">
                        Chúng tôi cung cấp dịch vụ du lịch
                        đáp ứng mọi nhu cầu của bạn!
                    </h1>
                    <hr className="w-[156px] border-4 border-[#003F7D] mt-2 rounded-md"/>
                    <div className="border-l-2 border-[#6698CA] mt-8 fontRoboto text-base text-gray-700">
                        <p className="pl-5"> Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị
                            thành viên của
                            Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM
                            (Quận
                            11) như:
                            <ul className="pl-5 list-disc">
                                <li>Công viên Văn hóa Đầm Sen</li>
                                <li>Khu du lịch sinh thái Vàm Sát</li>
                                <li>Khách sạn Ngọc Lan</li>
                                <li>Khách sạn Phú Thọ</li>
                                <li>Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)</li>
                                <li>Nhà hàng Thủy Tạ Đầm Sen</li>
                                <li>Cà phê Vườn Đá</li>
                                <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
                                <li>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).</li>
                            </ul>
                        </p>
                    </div>
                    <div className="pt-8">
                        <button className="rounded-lg bg-[#0054A6] w-[150px] p-2 text-white fontRoboto">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <div className="mt-14 w-full bg-[#4E95DBB2]">
                    <div className="text-center">
                        <h3 className="uppercase fontRoboto pt-10 text-white text-lg">Chia sẻ thông tin</h3>
                        <h1 className="fontPhilosopher-regular pt-4 text-[#003F7D] text-4xl">Bài viết mới</h1>
                        <hr className="mx-auto w-[130px] border-4 border-[#003F7D] mt-2 rounded-md"/>
                        <p className="pt-4 fontRoboto text-white text-lg">
                            Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch
                        </p>
                    </div>
                    <div className="pt-9 flex justify-center gap-6">
                        <div className="bg-white w-[300px] h-fit rounded-xl">
                            <div>
                                <img className="rounded-xl h-52" src={HoaSen} alt=""/>
                            </div>
                            <div className="pl-4">
                                <div className="pt-6 flex gap-2">
                                    <h2 className="fontRoboto text-gray-400">Admin</h2>
                                    <img src={StatusOnline}/>
                                </div>
                                <div className="fontRoboto">
                                    <h1 className="pt-3 font-bold text-lg text-[#0054A6]">
                                        Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor
                                    </h1>
                                    <p className="text-sm pt-3 text-gray-500">
                                        Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào
                                        hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Sự kiện
                                    </div>
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Thông báo
                                    </div>
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Tin tức
                                    </div>
                                </div>
                                <div className="flex fontRoboto text-gray-400 text-[14px] gap-2 pt-2 pb-7">
                                    <p>10N luợt xem</p>
                                    <p>•</p>
                                    <p>20/02/2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-[300px] h-fit rounded-xl">
                            <div>
                                <img className="rounded-xl h-52" src={BangDang} alt=""/>
                            </div>
                            <div className="pl-4">
                                <div className="pt-6 flex gap-2">
                                    <h2 className="fontRoboto text-gray-400">Admin</h2>
                                    <img src={StatusOnline}/>
                                </div>
                                <div className="fontRoboto">
                                    <h1 className="pt-3 font-bold text-lg text-[#0054A6]">
                                        Thông báo kết quả lựa chọn nhà cung cấp nước đá chế tác
                                        Băng Đăng
                                    </h1>
                                    <p className="text-sm pt-3 text-gray-500">
                                        Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các đơn vị tham gia chào
                                        giá cạnh tranh Hạng mục Cung cấp nước đá để chế tạo...
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Sự kiện
                                    </div>
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Thông báo
                                    </div>
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Tin tức
                                    </div>
                                </div>
                                <div className="flex fontRoboto text-gray-400 text-[14px] gap-2 pt-2 pb-7">
                                    <p>10N luợt xem</p>
                                    <p>•</p>
                                    <p>20/02/2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-[300px] h-fit rounded-xl">
                            <div>
                                <img className="rounded-xl h-52" src={HoaSen} alt=""/>
                            </div>
                            <div className="pl-4">
                                <div className="pt-6 flex gap-2">
                                    <h2 className="fontRoboto text-gray-400">Admin</h2>
                                    <img src={StatusOnline}/>
                                </div>
                                <div className="fontRoboto">
                                    <h1 className="pt-3 font-bold text-lg text-[#0054A6]">
                                        Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor
                                    </h1>
                                    <p className="text-sm pt-3 text-gray-500">
                                        Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào
                                        hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Sự kiện
                                    </div>
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Thông báo
                                    </div>
                                    <div
                                        className="bg-[#E6EEF7] rounded-full mt-7 fontRoboto text-[14px] text-[#0054A6] px-3 py-2 text-center">
                                        Tin tức
                                    </div>
                                </div>
                                <div className="flex fontRoboto text-gray-400 text-[14px] gap-2 pt-2 pb-7">
                                    <p>10N luợt xem</p>
                                    <p>•</p>
                                    <p>20/02/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-8 pb-16 fontRoboto">
                        <button className="rounded-lg bg-[#0054A6] text-white py-3 px-7">
                            Xem thêm bài viết
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="uppercase fontRoboto pt-10 text-gray-600 text-lg">Lĩnh vực hoạt động</h3>
                    <h1 className="fontPhilosopher-regular pt-4 text-[#003F7D] text-4xl">Các dịch vụ trọng tâm</h1>
                    <hr className="mx-auto w-[220px] border-4 border-[#003F7D] mt-2 rounded-md"/>
                    <p className="pt-4 fontRoboto text-gray-600 text-lg">
                        3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng – khách sạn, và dịch vụ lữ
                        hành
                    </p>
                </div>
                <div className="flex justify-center gap-6">
                    <div className="bg-white w-[320px] h-fit rounded-xl shadow-xl mt-8">
                        <div>
                            <img className="rounded-xl h-56" src={KhinhKhiCau} alt=""/>
                        </div>
                        <div className="pb-10 text-center px-4 py-4">
                            <div className="fontRoboto">
                                <h1 className="pt-3 font-bold text-lg text-[#0054A6]">
                                    Vui chơi giải trí
                                </h1>
                                <p className="text-sm pt-3 text-gray-500">
                                    Với 2 khu giải trí nổi tiếng TP.HCM là Công viên văn hóa Đầm Sen, và khu du lịch
                                    sinh
                                    thái Vàm Sát (H.Cần Giờ)...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[320px] h-fit rounded-xl shadow-xl mt-8">
                        <div>
                            <img className="rounded-xl h-56" src={HaiSan} alt=""/>
                        </div>
                        <div className="pb-10 text-center px-4 py-4">
                            <div className="fontRoboto">
                                <h1 className="pt-3 font-bold text-lg text-[#0054A6]">
                                    Nhà hàng - Khách sạn
                                </h1>
                                <p className="text-sm pt-3 text-gray-500">
                                    Với hệ thống khách sạn Phú Thọ và Ngọc Lan đạt chuẩn 3 sao, chuyên tiếp đón các đoàn
                                    thể thao....
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-[320px] h-fit rounded-xl shadow-xl mt-8">
                        <div>
                            <img className="rounded-xl w-full h-56" src={ThapDoi} alt=""/>
                        </div>
                        <div className="pb-10 text-center px-4 py-4">
                            <div className="fontRoboto">
                                <h1 className="pt-3 font-bold text-lg text-[#0054A6]">
                                    Dịch vụ Lữ Hành
                                </h1>
                                <p className="text-sm pt-3 text-gray-500">
                                    Tổ chức các tour trong và ngoài nước với Trung tâm Dịch vụ du lịch Đầm Sen. Ngoài ra
                                    Trung tâm còn thế mạnh là tổ chức...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homepage;

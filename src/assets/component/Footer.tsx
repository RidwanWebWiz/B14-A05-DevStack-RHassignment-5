function Footer() {
    return (
        <footer className="font-sans">
            <div className="mb-30 ml-32  flex gap-30 list-none p-0  ">
                <div className="flex flex-col gap-3">
                    <img
                        className="w-31.25 h-auto"
                        src="/asset_pic/logo-text.png"
                        alt="DevStack"
                    />

                    <p className="text-[12px] text-[#64748B]">
                        Curated tools, technologies, and resources for developers building
                        <br />
                        modern software.
                    </p>

                    <ul className="text-[12px] text-slate-600 font-medium flex gap-5 list-none p-0">
                        <li>
                            <a href="">GitHub</a>
                        </li>
                        <li>
                            <a href="">Twitter</a>
                        </li>
                        <li>
                            <a href="">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-36 tracking-[0.5px] ">
                    <div className="flex flex-col gap-4">
                        <h6 className="text-slate-900 font-bold text-xs">PRODUCT</h6>
                        <ul className=" flex-col text-[12px] text-[#64748B]  flex gap-2 list-none p-0">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href=""> Technologies </a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h6 className="text-slate-900 font-bold text-xs">COMPANY</h6>
                        <ul className=" flex-col text-[12px] text-[#64748B]  flex gap-2 list-none p-0">
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h6 className="text-slate-900 font-bold text-xs">LEGAL</h6>
                        <ul className=" flex-col text-[12px] text-[#64748B]  flex gap-2 list-none p-0 ">
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex ml-32 mb-12 gap-220 text-[11px]">
                <p className=" text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
                <ul className=" text-gray-400 flex gap-8">
                    <li>
                        <a href="">Privacy</a>
                    </li>
                    <li>
                        <a href="">Terms</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

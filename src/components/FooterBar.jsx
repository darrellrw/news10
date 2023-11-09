export const FooterBar = () => {
    return (
        <footer className="bg-[#181823] py-4 bottom-0">
            <div className="mx-[25%]">
                <div className="grid grid-cols-10 gap-8">
                    <div className="col-span-2">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Social Media</h2>
                        <ul className="text-gray-400 font-medium space-y-[2vh]">
                            <li>
                                <a href="#" className="hover:underline">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">YouTube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-5">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Newsletters</h2>
                        <input className="w-[85%]"></input>
                    </div>
                    <div className="col-span-3">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Categories</h2>
                        <div className="flex items-center justify-between">
                            <ul className="text-gray-400 font-medium space-y-[2vh]">
                                <li>
                                    <a href="#" className="hover:underline">Culture</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Fashion</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Featured</a>
                                </li>
                            </ul>
                            <ul className="text-gray-400 font-medium space-y-[2vh]">
                                <li>
                                    <a href="#" className="hover:underline">Healthy Living</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Technology</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Food</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-5 border-gray-200 dark:border-gray-700" />
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">© 2023 Kelompok 10. All Rights Reserved.</span>
                    <ul className="flex items-center text-sm font-medium text-gray-500 gap-[2vw]">
                        <li>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms & Condition</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
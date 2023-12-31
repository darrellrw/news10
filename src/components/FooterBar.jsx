import { Link, useSearchParams, useNavigate } from "react-router-dom";

export const FooterBar = () => {
    const storedLogin = localStorage.getItem("islogin");
    const [params, setParams] = useSearchParams();

    return (
        <footer className="bg-[#181823] py-4 bottom-0">
            <div className="xl:mx-[15%] md:mx-[10%] mx-[5%]">
                <div className="flex flex-col gap-8 2xl:flex-row">
                    <div className="flex-auto 2xl:w-8">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Social Media</h2>
                        <ul className="text-gray-400 font-medium space-y-[2vh]">
                            <li>
                                <a href="#" className="hover:underline">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@darrellrajendrawibowo9864?si=q6wRHBexTKE7xfnJ" className="hover:underline">YouTube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-auto 2xl:w-64">

                        {
                            storedLogin == "true" ? (
                                <>
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Saved Post</h2>
                                    <div className="relative w-[50%] text-center">
                                        <Link to="/saved">
                                            <div className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Saved Post</div>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Newsletters</h2>
                                    <div className="relative w-[50%] text-center">
                                        <Link to="/register">
                                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Email" required></input>
                                        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/></svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                        </Link>
                                    </div>
                                </>
                            )
                        }
                    </div>

                    <div className="flex-auto 2xl:w-32">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Categories</h2>
                        <div className="flex items-center justify-between">
                            <ul className="text-gray-400 font-medium space-y-[2vh]">
                                <li>
                                    <div className='hover:underline'>
                                        <Link to={params.get("nation") == null ? "/?nation=us&category=business" : `/?nation=${params.get("nation")}&category=business`}>Business</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className='hover:underline'>
                                        <Link to={params.get("nation") == null ? "/?nation=us&category=entertainment" : `/?nation=${params.get("nation")}&category=entertainment`}>Entertainment</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className='hover:underline'>
                                        <Link to={params.get("nation") == null ? "/?nation=us&category=health" : `/?nation=${params.get("nation")}&category=health`}>Health</Link>
                                    </div>
                                </li>
                            </ul>
                            <ul className="text-gray-400 font-medium space-y-[2vh]">
                                <li>
                                    <div className='hover:underline'>
                                        <Link to={params.get("nation") == null ? "/?nation=us&category=science" : `/?nation=${params.get("nation")}&category=science`}>Science</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className='hover:underline'>
                                        <Link to={params.get("nation") == null ? "/?nation=us&category=sports" : `/?nation=${params.get("nation")}&category=sports`}>Sports</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className='hover:underline'>
                                        <Link to={params.get("nation") == null ? "/?nation=us&category=technology" : `/?nation=${params.get("nation")}&category=technology`}>Technology</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-5 border-gray-200 dark:border-gray-700" />
                <div className="flex flex-col items-center justify-between 2xl:flex-row">
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
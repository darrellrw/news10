import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react"

export const NavigationBar = () => {
    const inputRef = useRef();
    const navigate = useNavigate();

    const [params, setParams] = useSearchParams();
    const storedLogin = localStorage.getItem("islogin");
    const storedEmail = localStorage.getItem("email");

    function onSubmit(e) {
        e.preventDefault();
        const value = inputRef.current.value;
        navigate(`/?search=${value}`)
    }

    function logOut() {
        localStorage.setItem("islogin", false)
        navigate("/")
        window.location.reload()
    }

    return (
        <header className="bg-[#537FE7] py-5">
            <nav className="flex flex-wrap items-center justify-between xl:mx-[15%] md:mx-[10%] mx-[5%]">
                <a href='/' className="self-center text-3xl font-semibold whitespace-nowrap text-white">News10</a>
                <div className='flex items-center justify-between xl:order-2'>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-3 justify-center bg-white text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <Link to={storedLogin == "true" ? "/saved" : "/login"}>
                        <div className="rounded-lg bg-white p-3 hover:bg-gray-100 ms-3">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20"><path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/></svg>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center hidden w-full p-5 xl:block xl:w-auto xl:bg-blue xl:order-1" id="navbar-default">
                    <ul className="items-center font-medium flex flex-col w-full gap-[2vh] text-white xl:p-0 xl:flex-row xl:space-x-5 xl:mt-0 xl:border-0 rtl:space-x-reverse">
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarCategories" className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                Categories
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
                            </button>
                            <div id="dropdownNavbarCategories" className="absolute z-[1000] hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow">
                                <div className='flex items-center pt-2'>
                                    <a className="text-xl text-black m-auto">Categories</a>
                                </div>
                                <div className='flex items-center justify-between mx-5'>
                                    <ul className="py-2 text-sm text-gray-700 space-y-[2vh]" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("nation") == null ? "/?nation=us&category=business" : `/?nation=${params.get("nation")}&category=business`}>Business</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("nation") == null ? "/?nation=us&category=entertainment" : `/?nation=${params.get("nation")}&category=entertainment`}>Entertainment</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("nation") == null ? "/?nation=us&category=health" : `/?nation=${params.get("nation")}&category=health`}>Health</Link>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="py-2 px-5 text-sm text-gray-700 space-y-[2vh]" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("nation") == null ? "/?nation=us&category=science" : `/?nation=${params.get("nation")}&category=science`}>Science</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("nation") == null ? "/?nation=us&category=sports" : `/?nation=${params.get("nation")}&category=sports`}>Sports</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("nation") == null ? "/?nation=us&category=technology" : `/?nation=${params.get("nation")}&category=technology`}>Technology</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex items-center pt-2'>
                                    <a className="text-xl text-black m-auto">Nation</a>
                                </div>
                                <div className='flex items-center justify-between mx-5'>
                                    <ul className="py-2 text-sm text-gray-700 space-y-[2vh]" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("category") == null ? "/?nation=us&category=top" : `/?nation=us&category=${params.get("category")}`}>America</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("category") == null ? "/?nation=jp&category=top" : `/?nation=jp&category=${params.get("category")}`}>Japan</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                            <Link to={params.get("category") == null ? "/?nation=id&category=top" : `/?nation=id&category=${params.get("category")}`}>Indonesia</Link>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="py-2 px-5 text-sm text-gray-700 space-y-[2vh]" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("category") == null ? "/?nation=gb&category=top" : `/?nation=gb&category=${params.get("category")}`}>Great Britain</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("category") == null ? "/?nation=in&category=top" : `/?nation=in&category=${params.get("category")}`}>India</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='block px-4 py-2 hover:bg-gray-100 hover:rounded-lg'>
                                                <Link to={params.get("category") == null ? "/?nation=de&category=top" : `/?nation=de&category=${params.get("category")}`}>Germany</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">About</Link>
                        </li>
                        <li className='flex w-full'>

                            <div className="relative w-full">
                                <form onSubmit={onSubmit} className="">
                                    <input ref={inputRef} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Something..." required></input>
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </form>

                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <div className="rounded-lg bg-white p-3 hover:bg-gray-100">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18"><path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/></svg>
                                </div>

                                {
                                    storedLogin == "true" ? (
                                        <div id="dropdownNavbarLinkA" data-dropdown-toggle="dropdownNavbarLogout" className="flex items-center justify-between w-full py-2 px-3 mx-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                            {storedEmail}
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
                                        </div>
                                    ) : (
                                        <div id="dropdownNavbarLinkB" data-dropdown-toggle="dropdownNavbarLogin" className="flex items-center justify-between w-full py-2 px-3 mx-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                            Anonymous
                                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
                                        </div>
                                    )
                                }

                                
                                <div id="dropdownNavbarLogin" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow">
                                    <ul className="py-2 m-3 text-sm text-gray-700 space-y-[2vh]" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-lg">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-lg">Register</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div id="dropdownNavbarLogout" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow">
                                    <ul className="py-2 m-3 text-sm text-gray-700 space-y-[2vh]" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link to="/" onClick={logOut} className="block px-4 py-2 hover:bg-gray-100 hover:rounded-lg">Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
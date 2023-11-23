import { useEffect } from 'react';
import { initFlowbite } from 'flowbite'

export const NavigationBar = () => {
    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <header className="bg-[#537FE7] py-5">
            <nav className="flex flex-wrap items-center justify-between md:mx-[25%] mx-[5%]">
                <a className="self-center text-3xl font-semibold whitespace-nowrap text-white">News10</a>
                <div className='flex items-center justify-between 2xl:order-2'>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-3 justify-center bg-white text-sm text-gray-500 rounded-lg 2xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <button className="rounded-lg bg-white p-3 hover:bg-gray-100 ms-3">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20"><path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/></svg>
                    </button>
                </div>
                <div className="flex items-center hidden w-full p-5 2xl:block 2xl:w-auto 2xl:bg-blue 2xl:order-1" id="navbar-default">
                    <ul className="items-center font-medium flex flex-col w-full gap-[2vh] text-white 2xl:p-0 2xl:flex-row 2xl:space-x-5 2xl:mt-0 2xl:border-0 rtl:space-x-reverse">
                        <li>
                            <a href="#" className="">Categories</a>
                        </li>
                        <li>
                            <a href="#" className="">About</a>
                        </li>
                        <li className='flex w-full'>
                            <form className='w-full'>
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required></input>
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </form>
                        </li>
                        <li>
                            <button className="flex items-center">
                                <div className="rounded-lg bg-white p-3 hover:bg-gray-100">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18"><path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/></svg>
                                </div>
                                <a className="px-5">User</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
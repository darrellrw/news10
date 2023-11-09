export const NavigationBar = () => {
    return (
        <header className="bg-[#AED2FF] py-5">
            <nav className="flex items-center justify-between mx-[25%]">
                <a className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">News10</a>
                <div className="">
                    <ul className="items-center font-medium flex gap-[2vw]">
                        <li>
                            <a href="#" className="">Categories</a>
                        </li>
                        <li>
                            <a href="#" className="">About</a>
                        </li>
                        <li>
                        <form>
                            <div className="relative">
                                <input type="search" id="default-search" className="w-full rounded-lg" placeholder="Search Everything..." required></input>
                                <button type="submit" className="absolute top-0 right-0 h-full">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>
                                </button>
                            </div>
                        </form>
                        </li>
                        <li>
                            <button className="flex items-center">
                                <div className="rounded-lg bg-[#F5F5F5] p-3">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18"><path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/></svg>
                                </div>
                                <a>User</a>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <button className="rounded-lg bg-[#F5F5F5] p-3">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20"><path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/></svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}
import { useState } from "react";
import { ArticleCard } from "../components/ArticleCard";

function SavedPost() {
    const storedSaved = JSON.parse(localStorage.getItem("savedPage"));

    const [currentPage, setCurrentPage] = useState(1);
    const maxRecordsPage = 10;
    const lastIndex = currentPage * maxRecordsPage;
    const firstIndex = lastIndex - maxRecordsPage;
    const records = storedSaved.slice(firstIndex, lastIndex);
    const npage = Math.ceil(storedSaved.length / maxRecordsPage);
    const numero = [...Array(npage + 1).keys()].slice(1);

    const deletePost = index => e => {
        // e.preventDefault();

        if(Array.isArray(storedSaved)) {
            storedSaved.splice(index, 1);
            localStorage.setItem("savedPage", JSON.stringify(storedSaved));
            console.log("Deleted")
        } else {
            console.log(`${index} not found in the array.`);
        }
    }

    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function changePage(id) {
        setCurrentPage(id);
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>  
            <div className="flex flex-col justify-between xl:mx-[15%] md:mx-[10%] mx-[5%]">
                <div className="p-5 text-center">
                    <h1 className="text-5xl p-5">Saved Article</h1>
                </div>
                <div className="items-center m-auto">
                    {
                        storedSaved.length == 0 ? (
                            <p>Empty</p>
                        ) : (
                            records.map((news, index) => {
                                return (
                                    <>
                                        <form key={index} onSubmit={deletePost(index)} className="md:flex justify-content">
                                            <ArticleCard data={news}/>
                                            <input type="submit" value="Delete" className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"/>
                                        </form>
                                    </>
                                )
                            })
                        )
                    }
                </div>
                <nav className="items-center m-auto py-5" aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                        <li>
                            <a onClick={prevPage} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>

                        {
                            numero.length == 0 ? (
                                <p>Empty</p>
                            ) : (
                                numero.map((n, i) => {
                                    return (
                                        <li key={i}>
                                            <a onClick={() => changePage(n)} aria-current={currentPage === n ? "page" : ""} className="flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">{n}</a>
                                        </li>
                                    )
                                })
                            )
                        }

                        <li>
                            <a onClick={nextPage} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SavedPost
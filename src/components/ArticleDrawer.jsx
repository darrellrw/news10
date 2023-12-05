import { initFlowbite } from 'flowbite'
import { useNavigate } from "react-router-dom";
import srcEmpty from "../assets/category/empty.jpg";


export const ArticleDrawer = ({news}) => {
    initFlowbite();
    const navigate = useNavigate();
    
    return (
        <div id="default-carousel" className="relative w-full py-5" data-carousel="static">

            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                {
                    news.map((data, index) => {
                        return (
                            <div key = {index} className="hidden duration-700 ease-in-out" data-carousel-item>
                                <figure className="">
                                    <a  onClick={() => navigate(`/article?title=${data.title.replace(/ /g, '-').replace(/ [^\w-]+/g, '')}`, {state: data})}>
                                        <img src={data.image_url == null ? srcEmpty : data.image_url} className="absolute z-100 block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
                                    </a>
                                    <figcaption className="absolute px-4 text-3xl text-white bottom-6 bg-gray-500 rounded-xl bg-opacity-50">
                                        <p>{data.title}</p>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })
                }

            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </span>
            </button>

        </div>
    )
}
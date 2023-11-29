import { useEffect } from "react"
import { initFlowbite } from 'flowbite'
import { useNavigate } from "react-router-dom";

export const ArticleCard = ({data}) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        initFlowbite();
        // console.log(news.content)
    }, []);

    return (
        <a onClick={() => navigate("/article", {state: data})} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 w-full">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={data.urlToImage} alt=""></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title.slice(0, 50)}</h5>
                <p className="mb-3 font-normal text-gray-700">{data.description ? data.description.slice(0, 90) : "Empty Description"}</p>
            </div>
        </a>
    )
}
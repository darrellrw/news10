import { useEffect} from "react"
import { initFlowbite } from 'flowbite'
import { useNavigate } from "react-router-dom";

export const TitleArticle = ({title}) => {

    const navigate = useNavigate();

    useEffect(() => {
        initFlowbite();
        
    }, []);

    return (
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-full h-[164px] relative overflow-hidden gap-6">
            <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p onClick={() => navigate(-1)} className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-base leading-[1.5] text-center text-black">
                    Blog
                </p>
                <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/></svg>
                <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-base leading-[1.5] font-semibold text-center text-black">
                    {title}
                </p>
            </div>
            <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch font-['Roboto'] text-5xl leading-[1.2] font-bold text-left text-black">
                {title}
            </p>
        </div>
    )
}
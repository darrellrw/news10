import { useEffect} from "react"
import { initFlowbite } from 'flowbite'
import { TitleArticle } from "../components/TitleArticle";
import { ContentArticle } from "../components/ContentArticle";
import { CommentArticle } from "../components/CommentArticle";
import { WriterArticle } from "../components/WriterArticle";
import { useLocation } from "react-router-dom";

import { NavigationBar } from '../components/NavigationBar'
import { FooterBar } from '../components/FooterBar'

function ArticlePost() {
    const location = useLocation();

    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <>

            <div className="flex flex-col justify-between xl:mx-[15%] md:mx-[10%] mx-[5%]">
                <TitleArticle title={location.state.title}/>
                <WriterArticle author={location.state.author} publish={location.state.publishedAt} url={location.state.url}/>
                <ContentArticle content={location.state.content} image={location.state.urlToImage} description={location.state.description}/>
                <CommentArticle/>
            </div>

        </>
    )
}

export default ArticlePost
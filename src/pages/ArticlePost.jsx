import { useEffect, useState } from "react"
import { useSearchParams, useLocation } from "react-router-dom";

import { TitleArticle } from "../components/TitleArticle";
import { ContentArticle } from "../components/ContentArticle";
import { CommentArticle } from "../components/CommentArticle";
import { WriterArticle } from "../components/WriterArticle";

export default function ArticlePost() {
    const location = useLocation();

    const [articles, setArticles] = useState([]);
    const [params, setParams] = useSearchParams();

    
    useEffect(() => {
        let urlNews = `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_THE_KEYS}&qInTitle="${params.get("title").replace(/-/g, "%20")}"`
        console.log(urlNews)
    
        console.log(location.state)
    
        if(location.state == null) {
            console.log("Hallo")
        }
    
        console.log("Hallo")
        
        fetch(urlNews).then(response => response.json()).then(data => setArticles(data.results))
        console.log(articles)
    }, [articles, location.state, params]);



    return (
        <>
            <div className="flex flex-col justify-between xl:mx-[15%] md:mx-[10%] mx-[5%]">
                <TitleArticle title={location.state.title == null ? articles[0].title : location.state.title}/>
                <WriterArticle author={location.state.creator == null ? "A" : location.state.creator} publish={location.state.pubDate == null ? "A" : location.state.pubDate} url={location.state.link == null ? "A" : location.state.link}/>
                <ContentArticle content={location.state.content == null ? "A" : location.state.content} image={location.state.image_url == null ? "A" : location.state.image_url} description={location.state.description == null ? "A": location.state.description}/>
                <CommentArticle/>
            </div>
        </>
    )
}
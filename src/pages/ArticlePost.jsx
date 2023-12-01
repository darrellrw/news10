import { useEffect, useState } from "react"
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

import { TitleArticle } from "../components/TitleArticle";
import { ContentArticle } from "../components/ContentArticle";
import { CommentArticle } from "../components/CommentArticle";
import { WriterArticle } from "../components/WriterArticle";

export default function ArticlePost() {
    const location = useLocation();
    const storedLogin = localStorage.getItem("islogin");
    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);
    const [params, setParams] = useSearchParams();

    const savePost = (e) => {
        e.preventDefault();

        if (storedLogin == "true") {
            const storedSaved = JSON.parse(localStorage.getItem("savedPage"));
    
            if(location.state == null) {
                if (!localStorage.getItem("savedPage").includes(JSON.stringify(articles[0])) && Array.isArray(storedSaved)) {
                    storedSaved.push(articles[0])
                    localStorage.setItem("savedPage", JSON.stringify(storedSaved))
                    window.alert("Simpan Sukses");
                } else {
                    window.alert("Sudah disimpan");
                    console.log("Ada")
                }
            }
            else {
                if (!localStorage.getItem("savedPage").includes(JSON.stringify(location.state)) && Array.isArray(storedSaved)) {
                    storedSaved.push(location.state)
                    localStorage.setItem("savedPage", JSON.stringify(storedSaved))
                    window.alert("Simpan Sukses");
                } else {
                    window.alert("Sudah disimpan");
                    console.log("Ada")
                }
            }
        } else {
            navigate("/login")
        }

    };
    
    useEffect(() => {        
        if (location.state == null) {
            let urlNews = `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_THE_KEYS}&qInTitle="${params.get("title").replace(/-/g, "%20")}"`;
            fetch(urlNews).then(response => response.json()).then((data) => {
                setArticles(data.results);
            }).catch((error) => {
                console.error('Error:', error);
            });
        }
    }, [params]);

    return (
        <>
            {(location.state == null ? articles.length > 0 : true) && (
                <div className="flex flex-col justify-between xl:mx-[15%] md:mx-[10%] mx-[5%]">
                    <form onSubmit={savePost} className="p-5 2xl:text-right text-center">
                        <input type="submit" value="Save" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"/>
                    </form>
                    <TitleArticle title={location.state === null ? articles[0].title : location.state.title}/>
                    <WriterArticle author={location.state == null ? articles[0].creator : location.state.creator} publish={location.state == null ? articles[0].pubDate : location.state.pubDate} url={location.state == null ? articles[0].link : location.state.link}/>
                    <ContentArticle content={location.state == null ? articles[0].content : location.state.content} image={location.state == null ? articles[0].image_url : location.state.image_url} description={location.state == null ? articles[0].description : location.state.description}/>
                    <CommentArticle/>
                </div>
            )}
        </>
    )
}
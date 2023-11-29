import { useEffect, useState } from "react"
import { initFlowbite } from 'flowbite'
import { ArticleCard } from "./ArticleCard";

export const ArticleBoard = ({category, nation, search}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        initFlowbite();

        let urlNews = "";

        if(search == "") {
            urlNews = `https://newsapi.org/v2/top-headlines?country=${nation}&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
        } else {
            urlNews = `https://newsapi.org/v2/everything?q=${search}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
        }
        
        fetch(urlNews).then(response => response.json()).then(data => setArticles(data.articles));

    }, [category, nation, search]);

    return (
        <>
            <div className="items-center m-auto">
                <h2 className="text-center">Kumpulan Berita</h2>
                {articles.map((news, index) => {
                    return <ArticleCard key={index} data={news}/>
                })}
            </div>

        </>
    )
}
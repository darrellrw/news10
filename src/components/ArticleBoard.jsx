import { useEffect, useState } from "react"
import { initFlowbite } from 'flowbite'
import { ArticleCard } from "./ArticleCard";

export const ArticleBoard = ({category, nation}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        initFlowbite();

        let urlNews = `https://newsapi.org/v2/top-headlines?country=${nation}&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

        fetch(urlNews).then(response => response.json()).then(data => setArticles(data.articles));

    }, [category, nation]);

    return (
        <div className="items-center m-auto">
            <h2 className="text-center">Kumpulan Berita</h2>
            {articles.map((news, index) => {
                return <ArticleCard key={index} data={news}/>
            })}
        </div>
    )
}
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

import { ArticleCard } from "./ArticleCard";

export default function ArticleBoard() {
    const [articles, setArticles] = useState([]);

    const [params, setParams] = useSearchParams();
    const category = params.get("category") == null ? "top": params.get("category");
    const nation = params.get("nation") == null ? "us": params.get("nation");

    useEffect(() => {
        let urlNews = "";

        if (params.get("search") == null) {
            urlNews = `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_THE_KEYS}&country=${nation}&category=${category}`
        } else {
            urlNews = `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_THE_KEYS}&qInTitle=${params.get("search")}`
        }
        
        fetch(urlNews).then(response => response.json()).then(data => setArticles(data.results));

    }, [category, nation]);

    return (
        <>
            <div className="items-center m-auto">
                <h2 className="text-center">Kumpulan Berita</h2>
                {
                    articles.length == 0 ? (
                        <p>Empty</p>
                    ) : (
                        articles.map((news, index) => {
                            return <ArticleCard key={index} data={news}/>
                        })
                    )
                }
            </div>

        </>
    )
}
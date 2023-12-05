import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

import { ArticleCard } from "../components/ArticleCard";
import { ArticleCategory } from "../components/ArticleCategory";

import srcEntertainment from "../assets/category/entertainment.jpg";
import srcSports from "../assets/category/sports.jpg";
import srcBusiness from "../assets/category/business.jpeg";
import srcFood from "../assets/category/food.png";
import { ArticleDrawer } from "../components/ArticleDrawer";

export default function ArticleBoard() {
    const [articles, setArticles] = useState([]);
    const [articlesDrawer, setArticlesDrawer] = useState([]);
    const [params, setParams] = useSearchParams();
    const category = params.get("category") == null ? "top": params.get("category");
    const nation = params.get("nation") == null ? "us": params.get("nation");
    const search = params.get("search") == null ? null : params.get("search");

    const categoryList = [
        { name: '#Entertainment', picture: srcEntertainment, link: params.get("nation") == null ? "/?nation=us&category=entertainment" : `/?nation=${params.get("nation")}&category=entertainment` },
        { name: '#Sports', picture: srcSports, link: params.get("nation") == null ? "/?nation=us&category=sports" : `/?nation=${params.get("nation")}&category=sports` },
        { name: '#Business', picture: srcBusiness, link: params.get("nation") == null ? "/?nation=us&category=business" : `/?nation=${params.get("nation")}&category=business` },
        { name: '#Food', picture: srcFood, link: params.get("nation") == null ? "/?nation=us&category=food" : `/?nation=${params.get("nation")}&category=food` }
    ]

    useEffect(() => {

        let urlNews = "";

        console.log("No");

        if (search == null) {
            urlNews = `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_THE_KEYS_1}&country=${nation}&category=${category}`
        } else {
            urlNews = `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_THE_KEYS}&qInTitle=${search}`
        }

        
        fetch(urlNews).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            else {
                console.error(response.status);
            }
        }).then(data => setArticles(data.results));

        let urlTwo = `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_THE_KEYS_2}&country=gb&category=top`
        fetch(urlTwo).then((responseTwo) => {
            if (responseTwo.status === 200) {
                return responseTwo.json();
            }
            else {
                console.error(responseTwo.status);
            }
        }).then(dataTwo => setArticlesDrawer(dataTwo.results));
        
    }, [category, nation, search]);

    return (
        <>
            <div className="flex flex-col justify-between xl:mx-[15%] md:mx-[10%] mx-[5%]">
                {
                    articles.length === 0 ? (
                        <h1 className="self-center m-auto text-xl">EMPTY HMM...</h1>
                    ) : (
                        <>
                            <div className="flex flex-wrap justify-center">
                                {categoryList.map((item, key) => (
                                    <ArticleCategory key={key} title={item.name} picture={item.picture} link={item.link}></ArticleCategory>
                                ))}
                            </div>
                            <div className="items-center m-auto">

                                {search == null ? <ArticleDrawer news={articlesDrawer}/> : null}

                                <h1 className="text-3xl py-5">
                                    {
                                        search == null ? "Trending Post" : "Search: " + search
                                    }
                                </h1>
                                {
                                    articles.map((news, index) => {
                                        return <ArticleCard key={index} data={news}/>
                                    })
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}
import { Link } from "react-router-dom"

export const ArticleCategory = ({title, picture, link}) => {
    return(
        <Link to={link}>
            
            <div className=" flex h-10 w-32 m-2 text-white bg-black items-center justify-center rounded-xl" style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className="">{title}</p>
            </div>

        </Link>
    )
}
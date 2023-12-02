export const ContentArticle = ({content, image, description}) => {

    return (
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-full">
            <div className="box-border flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 py-12">
                <img
                className="self-stretch flex-grow-0 flex-shrink-0 h-[400px] rounded-[5px] object-cover"
                src={image}
                />
                <div className="box-border flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-0.5 bg-black" />
                <p className="whitespace-pre-wrap flex-grow font-['Roboto'] text-sm leading-[1.5] text-left text-black">
                    <a href={image}>Image Link</a>
                </p>
                </div>
            </div>
            <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pt-5 pb-4">
                <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch font-['Roboto'] text-xl leading-[1.4] text-left text-black">
                {description}
                </p>
            </div>
            <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-[5%]">
                <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 self-stretch font-['Roboto'] text-base leading-[1.5] text-left text-black">
                {content}
                </p>
            </div>
        </div>
    );
}
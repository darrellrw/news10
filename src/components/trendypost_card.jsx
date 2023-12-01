import { Card } from 'flowbite-react';

function TrendyPost() {
  return (
    <Card className="max-w-sm" imgSrc=".\images\Trendypost_card.png" horizontal>
      <div className= "card-content">  
      <h5 className="card-title text-2xl font-bold tracking-tight text-black">
            Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </Card>
  );
}

export default TrendyPost
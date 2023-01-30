import React from 'react';
import Overview from './overview/Overview';
import RatingsReviews from './ratingsReviews/RatingsReviews';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QandA from './qAndA/QandA';

export const App: React.FC = () => {
const [currentProductID, setCurrentProductID] = React.useState<number>(37311);

return (
  <div className="app">
    <nav>
    </nav>
    <Overview />
    <RelatedProducts />
    <RatingsReviews />
    <QandA />
  </div>
  );
}
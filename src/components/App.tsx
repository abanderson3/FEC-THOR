import React from 'react';
import { useState, useEffect } from 'react';
import Overview from './overview/Overview';
import RatingsReviews from './ratingsReviews/RatingsReviews';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QandA from './qAndA/QandA';
import { getProductDataFromDB, getRatingsDataFromDB } from '../helperFunctions';

export const App: React.FC = () => {
  const [currentProductID, setCurrentProductID] = useState<string>('37311');
  const [currentProductData, setCurrentProductData] = useState<object>({})
  const [ productMetaData, setProductMetaData ] = useState({})

  useEffect(() => {
    // get current product data
    getProductDataFromDB(currentProductID, setCurrentProductData)
    getRatingsDataFromDB(currentProductID, setProductMetaData)
    window.scrollTo(0, 105)
  }, [currentProductID])

  const handleCardClick = (cardID) => {
    setCurrentProductID(cardID)
  }


  return (
    <div className='app'>
      <nav></nav>
      <Overview currentProductID={currentProductID}
                currentProductData={currentProductData}
                productMetaData={productMetaData} />
      <RelatedProducts currentProductID={currentProductID} currentProductData={currentProductData} handleCardClick={handleCardClick} productMetaData={productMetaData}/>
      <QandA currentProductID={currentProductID} />
      <RatingsReviews currentProductID={currentProductID} productMetaData={ productMetaData }/>
    </div>
  );
};

import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { getRelatedProductsFromDB } from '../../helperFunctions'
import AddToOutfitCard from './AddToOutfitCard';

interface RelatedProductsProps {
  currentProductID: string;
  currentProductData: object;
  handleCardClick: (active: string) => void;
}


const RelatedProducts: FC<RelatedProductsProps> = ({currentProductData,  currentProductID, handleCardClick}) => {

  const [relatedProductIDs, setRelatedProductIDs] = useState<Array<string>>([]);
  const [outfitProductIDs, setOutfitProductIDs] = useState<Array<string>>([])

  // get related products data
  useEffect(() => {
    getRelatedProductsFromDB(currentProductID, setRelatedProductIDs);
  }, [currentProductID]);

  const handleAddOutfit = (currentProductID) => {
    if (outfitProductIDs.includes(currentProductID)){
      alert('This item is already in your outfit collection.')
    } else {
      setOutfitProductIDs([...outfitProductIDs, currentProductID])
    }
  }

  const handleRemoveOutfit = (clickedCardID) => {
    setOutfitProductIDs((prev) => {
      return prev.filter(product => product !== clickedCardID)
    })
  }

  console.log(outfitProductIDs)

  return (
    <section className='related-products widget'>
      <h2 className='title'>Related Products</h2>
      <div className='carousel carousel_related'>
        {relatedProductIDs.map((cardID, index) => {
          while (index < 4) {
            return (
              <Card
                cardType='product'
                currentProductID={currentProductID}
                currentProductData={currentProductData}
                cardID={cardID}
                key={cardID}
                handleCardClick={handleCardClick}
              />
            );
            }
        })}
      </div>
      <h2 className='title'>Your Outfit</h2>
      <div className='carousel carousel_outfit'>
        <AddToOutfitCard currentProductData={currentProductData} handleAddOutfit={handleAddOutfit} currentProductID={currentProductID} />
        {outfitProductIDs.length > 0 && outfitProductIDs.map((cardID, index) => {
          while (index < 3) {
            return (
              <Card
                cardType='outfit'
                currentProductID={currentProductID}
                currentProductData={currentProductData}
                cardID={cardID}
                key={cardID}
                handleRemoveOutfit={handleRemoveOutfit}
              />
            );
            }
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;

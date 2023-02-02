import React, { FC } from 'react';
import SortBy from './SortBy';
import Review from './Review/Review';

interface ReviewListProps {
  currentReviews: {
    results?: [];
  }
  setSort: Function
}


const ReviewList: FC<ReviewListProps> = ({ currentReviews, setSort }) => {


  console.log('From ReviewList:', currentReviews.results)

  // console.log(currentReviews.results.review_id)

  return (
    <div className="review-list">
      < SortBy setSort={ setSort }/>
      { currentReviews.results && currentReviews.results.map((review, id) => {
        return < Review key={id} review={review}/>
      }) }
    </div>
  )
}

export default ReviewList;
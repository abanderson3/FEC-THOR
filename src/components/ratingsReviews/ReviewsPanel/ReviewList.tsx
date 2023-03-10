import React, { FC } from 'react';
import SortBy from './SortBy';
import Review from './Review/Review';
import AddAReview from './Review/AddAReview';
import Modal from '../../shared/Modal';
import { useState } from 'react'

interface ReviewListProps {
  currentReviews: {
    results?: [];
  };
  productMetaData: {
    characteristics?: object;
    product_id?: number;
    ratings?: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    recommended?: object;
  };
  setSort: Function;
  sort: string;
  reviewCount: number;
  setReviewCount: Function;
  makeNewReview: Function;
  newReview: {
    product_id: number;
    rating: number;
    summary: string;
    body: string;
    recommend: boolean;
    name: string;
    email: string;
    photos: Array<object>;
    characteristics: {};
  };
  getReviewData: Function;
  displayedReviews: Array<object>;
  productName: string;
}


const ReviewList: FC<ReviewListProps> = ({ sort, currentReviews, setSort, reviewCount, setReviewCount, productMetaData, newReview, makeNewReview, getReviewData, displayedReviews, productName }) => {
  // console.log('From ReviewList:', currentReviews.results)
  // console.log(currentReviews.results.review_id)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClickMoreReviews = () => {
    setReviewCount(reviewCount += 2)
  }

  const onAddClick = (event) => {
    setModalIsOpen(true);
  }

  // console.log(filteredOrNot())


  // console.log('displayed:', displayedReviews)

  return (
    <div className="review-list">
      <div className="sort">
        < SortBy sort={ sort } setSort={ setSort } ratings={ productMetaData.ratings }/>
      </div>
      { displayedReviews && displayedReviews.map((review, id) => {
        return < Review key={id} review={review} getReviewData={ getReviewData }/>
      }) }
      <div className="button-panel">
        <button className="big-button" onClick={ onClickMoreReviews }>MORE REVIEWS</button>
        <button className="big-button" onClick={ onAddClick }>ADD A REVIEW +</button>
        <Modal
          modalClassName='add-review-modal'
          overlayClassName='modalOverlay'
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}>
            < AddAReview productMetaData={ productMetaData } newReview={ newReview } makeNewReview={makeNewReview} setModalIsOpen={ setModalIsOpen } productName={ productName }/>
        </Modal>
      </div>
    </div>
  )
}

export default ReviewList;
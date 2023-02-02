import React from 'react';
import ImageThumbnail from './ImageThumbnail';
const up = require('../../../icons/arrow-up-solid.svg');
const down = require('../../../icons/arrow-down-solid.svg');

interface ImageCarouselProps {
  style: {
    photos: Array<string>,

  },
  changeImage: (id: string) => void,
  currentImage: number
}

const ImageCarousel: React.FC<ImageCarouselProps> = (props: ImageCarouselProps) => {
  const [firstImage, setFirstImage] = React.useState(null);
  const [lastImage, setLastImage] = React.useState(null);
  const [images, setImages] = React.useState([]);
  // const [currentThumbnail, setCurrentThumbnail] = React.useState(0);

  React.useEffect( () => {
    if (props.style.photos) {
      setFirstImage(0);
      setLastImage(
        props.style.photos.length >= 7 ? 6 : props.style.photos.length - 1
      );
      setImages(props.style.photos);
      props.changeImage(0);
    }
  }, [props.style])

  const handleThumbnailClick = event => {
    props.changeImage(Number(event.target.id));
  }
  return (
    <div className="image-carousel">
      {firstImage > 0 ? <img src={up} className="small-arrow up" /> : null}
      {images.map( (image, index) => {
        if (index >= firstImage && index <= lastImage) {
          return (
            <ImageThumbnail image={image.thumbnail_url}
                            key={index}
                            onClick={handleThumbnailClick}
                            id={index}
                            selected={props.currentImage === index ? true : false} />
          )
        }
      })}
      <img src={down} className="small-arrow down" />
    </div>
  )
}

export default ImageCarousel;
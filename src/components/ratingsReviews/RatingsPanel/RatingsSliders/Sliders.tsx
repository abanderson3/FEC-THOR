import React, { FC } from 'react';
import Comfort from './Comfort';
import Fit from './Fit';
import Length from './Length';
import Quality from './Quality';
import Width from './Width';
import Size from './Size';



// https://slider-react-component.vercel.app/demo/slider


interface SlidersProps {
  characteristics?: {
    Comfort?: {
      id: number;
      value: string;
    }
    Fit?: {
      id: number;
      value: string;
    }
    Length?: {
      id: number;
      value: string;
    }
    Quality?: {
      id: number;
      value: string;
    }
    Width?: {
      id: number;
      value: string;
    }
    Size?: {
      id: number;
      value: string;
    }
  };
}

const Sliders: FC<SlidersProps> = ({ characteristics }) => {
  // max position for pointer(far right) is 94% width (depends on max width of screen)
  // set position based on half the width of the pointer element to center it properly
  // console.log(characteristics);


  let newCharacteristics;
  if (characteristics) {
    newCharacteristics = JSON.parse(JSON.stringify(characteristics));
  }

  const convertToPercent = (newCharacteristics) => {
    // console.log('from convert func', characteristics)

    if (!newCharacteristics) {
      return '';
    }

    for (let key in newCharacteristics) {
      var num = newCharacteristics[key].value
      newCharacteristics[key].value = (num * 20).toPrecision(4)
    }
    return newCharacteristics;
  }

  const positionObject = convertToPercent(newCharacteristics);
  // console.log('positionObject:', positionObject);

  const ifComfort = () => {
    if (positionObject.Comfort) {
      return < Comfort position={ positionObject.Comfort }/>
    } else {
      return null
    }
  }

  const ifFit = () => {
    if (positionObject.Fit) {
      return < Fit position={ positionObject.Fit }/>
    } else {
      return null;
    }
  }

  const ifLength = () => {
    if (positionObject.Length) {
      return < Length position={ positionObject.Length }/>
    } else {
      return null;
    }
  }

  const ifQuality = () => {
    if (positionObject.Quality) {
      return < Quality position={ positionObject.Quality }/>
    } else {
      return null;
    }
  }

  const ifWidth = () => {
    if (positionObject.Width) {
      return < Width position={ positionObject.Width }/>
    } else {
      return null;
    }
  }

  const ifSize = () => {
    if (positionObject.Size) {
      return < Size position={ positionObject.Size }/>
    } else {
      return null;
    }
  }

  return (
    <div>
      { ifComfort() }
      { ifFit() }
      { ifSize() }
      { ifQuality() }
      { ifLength() }
      { ifWidth() }
    </div>
  )
}


export default Sliders;
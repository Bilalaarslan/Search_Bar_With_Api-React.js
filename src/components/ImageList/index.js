import React from 'react'
import ImageItem from '../ImageItem';
import "./index.css";

const ImageList = ({imagePlaceHolder}) => {
  return (
    <div className='imageList'>
      {imagePlaceHolder.map((image,index)=>{
        return <ImageItem key={index} imageItem={image}/>;
      })}
    </div>
  )
}

export default ImageList;


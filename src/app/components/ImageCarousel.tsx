'use client'
import { FC } from 'react'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';


interface Props {
  photos: string[]
  imageClasses: string
}

const ImageCarousel:FC<Props> = (props) => {


  return (
    <Carousel infiniteLoop={true}  autoPlay  showThumbs={false}>
    {props.photos.map((photo, index) => (
      <div key={index}>
        <Image className={props.imageClasses} src={photo} alt={`photo`} width={10000} height={10000} />
      </div>
    ))}
  </Carousel>
  )

}

export default ImageCarousel

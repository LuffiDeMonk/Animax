'use client'

import React from 'react'
import Slider from 'react-slick'
import CastCarouselCard from './CastCarouselCard'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
    data: MovieCast[]
}


export default function Carousel({ data }: Props) {
    const settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }
    return (

        <Slider {...settings} className='max-w-screen-2xl lg:max-w-[calc(896px-18rem-16px)] mr-auto'>
            {
                data.map((item, idx) => (
                    <div className='pr-2' key={idx}>
                        <CastCarouselCard
                            character={item.character}
                            name={item.name}
                            image={item.profile_path}
                        />
                    </div>
                ))
            }
        </Slider>

    )
}

'use client'

import React from 'react'
import Slider from 'react-slick'
import BannerSlide from './BannerSlide'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrailerContainer from './TrailerContainer';

type Props = {
    data: MovieData[]
}

export default function Banner({ data }: Props) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <div className='max-w-screen mx-auto h-[90vh] overflow-hidden'>
            <Slider {...settings} className=''>
                {data.map((item, idx) => (
                    <BannerSlide
                        key={idx}
                        title={item.title}
                        description={item.overview}
                        backdrop_path={item.backdrop_path}
                        poster={item.poster_path}
                    >
                        <TrailerContainer id={item.id} />
                    </BannerSlide>
                ))}
            </Slider>
        </div>
    )
}

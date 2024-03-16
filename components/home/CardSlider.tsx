'use client'
import React from 'react'
import Slider from 'react-slick'
import MediaCard from './MediaCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from './Container';

export default function CardSlider({ data, type }: { data: MovieData[] | TVData[], type: 'TV' | 'movie' }) {
    const settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <Container className='mt-10'>
            <Slider {...settings} className=''>
                {
                    data.map((item) => {
                        if ('title' in item) {
                            return (
                                <MediaCard
                                    type={type}
                                    key={item.id}
                                    index={item.id}
                                    title={item.title}
                                    posterImage={item.poster_path}
                                />

                            )
                        } else {
                            return (
                                (
                                    <MediaCard
                                        index={item.id}
                                        type={type}
                                        key={item.id}
                                        title={item.name}
                                        posterImage={item.poster_path}
                                    />
                                )
                            )
                        }
                    }
                    )
                }

            </Slider>
        </Container>
    )
}

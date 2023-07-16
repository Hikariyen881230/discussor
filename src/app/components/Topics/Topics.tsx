'use client'

import React from 'react'
import Slider from 'react-slick'
import Card from '../Card/Card'
import { topicDataType } from '@/app/types/dataTypes'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/layout.css'

const topicData: topicDataType[] = [
  {
    topic: 'Python',
    url: '/python',
  },
  {
    topic: 'Java',
    url: '/java',
  },
  {
    topic: 'Javascipt',
    url: '/typescript',
  },
  {
    topic: 'Typescript',
    url: '/c#',
  },
  {
    topic: 'C#',
    url: '/c&c++',
  },
  {
    topic: 'React',
    url: '/react',
  },
  {
    topic: 'Swift',
    url: '/swift',
  },
  {
    topic: 'Kotlin',
    url: '/kotlin',
  },
  {
    topic: 'PHP',
    url: '/php',
  },
]

function NextArrow(props: any) {
  const { className, onClick } = props
  return (
    <div
      className={`${className} `}
      style={{
        color: '#333',
        fontSize: '24px',
      }}
      onClick={onClick}
    >
      <i className="bx bxs-right-arrow"></i>
    </div>
  )
}
function PrevArrow(props: any) {
  const { className, onClick } = props
  return (
    <div
      className={`${className} `}
      style={{
        color: '#333',
        fontSize: '24px',
      }}
      onClick={onClick}
    >
      <i className="bx bxs-left-arrow"></i>
    </div>
  )
}

const Topics: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <Slider {...settings}>
        {topicData.map((data, index) => {
          return (
            <div key={index} className="w-full d-flex justify-center">
              <Card {...data} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Topics

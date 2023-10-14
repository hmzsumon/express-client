'use client';
import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
		};
		const sliderItems = [
			'./images/carousel/banar1.png',
			'./images/carousel/banar2.png',
			'./images/carousel/banar3.png',
			'./images/carousel/banar4.png',
		];
		return (
			<div className='w-full px-2 pb-4 mx-auto '>
				<Slider {...settings}>
					{sliderItems.map((item, index) => (
						<div className={`px-1`} key={index}>
							<img
								src={item}
								alt=''
								className='w-full rounded-xl min-h-[60px]'
							/>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}

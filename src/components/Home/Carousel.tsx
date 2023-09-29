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
		};
		return (
			<div className='w-full px-2 pb-4 mx-auto '>
				<Slider {...settings}>
					<div className=''>
						<img
							src='./images/carousel/img1.png'
							alt=''
							className='w-full min-h-[120px]'
						/>
					</div>
					<div>
						<img
							src='./images/carousel/img2.png'
							alt=''
							className='w-full min-h-[120px]'
						/>
					</div>
				</Slider>
			</div>
		);
	}
}

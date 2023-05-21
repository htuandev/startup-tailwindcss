import React from 'react';
import Heading from '../components/Heading';
import {list_blogs} from '../configs/configs';
import BlogCard from '../components/BlogCard';

export default function Blog() {
	return (
		<section id='blog' className='bg-screen pt-[120px] pb-20'>
			<div className='container'>
				<div className='mx-wrap'>
					<Heading title={'Our Latest Blogs'} />
				</div>
				<div className='mx-wrap justify-center'>
					{list_blogs.map((b, i) => (
						<BlogCard info={b} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}

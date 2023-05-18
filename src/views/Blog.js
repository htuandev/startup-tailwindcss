import React from 'react';
import Heading from '../components/Heading';
import {list_blogs} from '../configs/configs';
import BlogCard from '../components/BlogCard';

export default function Blog() {
	return (
		<div id='blog' className='bg-primary bg-opacity-5 pt-[120px] pb-20'>
			<div className='container'>
				<div className='flex flex-wrap mx-[-16px]'>
					<Heading title={'Our Latest Blogs'} />
				</div>
				<div className='flex flex-wrap mx-[-16px] justify-center'>
					{list_blogs.map((b, i) => (
						<BlogCard info={b} key={i} />
					))}
				</div>
			</div>
		</div>
	);
}

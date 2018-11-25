import React from 'react';
import Sign from './Sign';
import './Signs.css';

const Signs = ({ signs, onClick }) => {
	return (
		<div className='flex-container'>
			{
				signs.map((sign, i) => {
					return (
						<Sign
							key={i}
							image={sign.image}
							title={sign.title}
							description={sign.description}
							onClick={onClick}
						/>
					);
				})
			}
		</div>
	);
};

export default Signs;
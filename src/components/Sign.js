import React from 'react';
import { Card } from 'antd';
import './Sign.css';

const { Meta } = Card;

const Sign = ({image, title, description, onClick}) => {
	return (
		<Card
			hoverable
			cover={<img
						alt="example"
						src={image}
					/>}
			onClick={onClick}
		>
			<Meta
				title={title}
				description={description}
			/>
		</Card>
	);
};

export default Sign;
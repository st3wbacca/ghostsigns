import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Sign = ({ image, title, description}) => {
	return (
		<Card
		hoverable
		style={{ width: 300}}
		cover={<img
					alt="example"
					src={image}
				/>}
		>
			<Meta
				title={title}
				description={description}
			/>
		</Card>
	);
}

export default Sign;
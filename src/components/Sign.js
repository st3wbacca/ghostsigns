import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Sign = ({image, title, description, onClick}) => {
	return (
		<Card
			hoverable
			style={{ width: 300}}
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
}

export default Sign;
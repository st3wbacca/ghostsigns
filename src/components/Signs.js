import React from 'react';
import Sign from './Sign';
import { Row, Col } from 'antd';

const Signs = ({ signs, onClick }) => {
	return (
		<div>
			<Row>
				{
					signs.map((sign, i) => {
						return (
							<Col xs={24} sm={12} md={8} lr={6} xl={4} key={i}>
								<Sign
									key={i}
									image={sign.image}
									title={sign.title}
									description={sign.description}
									onClick={onClick}
								/>
							</Col>
						);
					})
				}
			</Row>
		</div>
	);
}

export default Signs;
import React from 'react';
import './CardStyle.css';
import backpic from '../../images/card-back.jpeg';
import frontpic from '../../images/amethyst.jpg';

const Card = () => {
    return (
			<div className="card">
				<div className="card-face card-face-font">
					<img src={backpic} alt="backpic" className="img" />
				</div>
				<div className="card-face card-back-face">
					<img src={frontpic} alt="frontpic" className="img" />
				</div>
			</div>
		);
}

export default Card;

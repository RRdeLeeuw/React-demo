import React from 'react';
import Accordion from '../components/Accordion';
import Waves from '../components/Waves';
import './AccordionScreen.css';

const AccordionScreen = () => {
	return (
		<div className='screen__accordion'>
			<div className='rotate'>
				<Waves />
			</div>
			<Accordion />
		</div>
	);
};

export default AccordionScreen;

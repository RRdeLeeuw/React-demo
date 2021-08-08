import React from 'react';
import Form from '../components/Form';
import Waves from '../components/Waves';
import './FormScreen.css';

const FromScreen = () => {
	return (
		<div className='screen__form flex-column justify-center align-center'>
			<div className='grow flex-column justify-center'>
				<Form />
			</div>
			<Waves />
		</div>
	);
};

export default FromScreen;

import React, { useState } from 'react';
import Modal from '../components/Modal';
import './ModalScreen.css';

const ModalScreen = () => {
	// const [visible, setVisibility] = useState(false);
	const [entered, setEntered] = useState(false);

	const showModal = () => {
		setEntered(true);
	};

	return (
		<div className='screen__modal'>
			<div className='flex justify-center align-center h-100'>
				<button className='button' onClick={showModal}>
					Show modal
				</button>
				<Modal in={entered} setEntered={setEntered} />
			</div>
		</div>
	);
};

export default ModalScreen;

import React, { useState } from 'react';
import Modal from '../components/Modal';
import './ModalScreen.css';

const ModalScreen = () => {
	const [visible, setVisibility] = useState(false);

	const renderModal = (visible) => {
		return visible ? <Modal setVisibility={setVisibility} /> : null;
	};

	const showModal = () => {
		setVisibility(true);
	};

	return (
		<div className='screen__modal'>
			<div className='flex justify-center align-center h-100'>
				<button className='button' onClick={showModal}>
					Show modal
				</button>
				{renderModal(visible)}
			</div>
		</div>
	);
};

export default ModalScreen;

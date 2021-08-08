import './style.css';

const Modal = (props) => {
	const closeModal = () => {
		props.setVisibility(false);
	};

	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	return (
		<div className='modal-container' onClick={closeModal}>
			<div className='modal-inner' onClick={stopPropagation}>
				<i className='modal-closebutton' onClick={closeModal}>
					X
				</i>
				<h3 className='modal-title'>modal titel</h3>
				<p className='modal-content'>Modal text</p>
			</div>
		</div>
	);
};

export default Modal;

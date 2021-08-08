import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';

import './style.css';

const Modal = (props) => {
	const closeModal = () => {
		props.setEntered(false);
	};

	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	return ReactDOM.createPortal(
		<CSSTransition in={props.in} timeout={250} classNames='fade' appear unmountOnExit>
			<div className='modal-container' onClick={closeModal}>
				<div className='modal-inner' onClick={stopPropagation}>
					<i className='modal-closebutton' onClick={closeModal}>
						X
					</i>
					<h3 className='modal-title'>modal titel</h3>
					<p className='modal-content'>Modal text</p>
				</div>
			</div>
		</CSSTransition>,

		document.querySelector('#modal')
	);
};

// <div className='modal-container' onClick={closeModal}>
// 	<div className='modal-inner' onClick={stopPropagation}>
// 		<i className='modal-closebutton' onClick={closeModal}>
// 			X
// 		</i>
// 		<h3 className='modal-title'>modal titel</h3>
// 		<p className='modal-content'>Modal text</p>
// 	</div>
// </div>

export default Modal;

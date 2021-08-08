import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
	const contentLorum =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.';

	return (
		<div className='accordion__container'>
			<div className='accordion'>
				<Accordion.Row content={contentLorum}>Accordion header number 1</Accordion.Row>
				<Accordion.Row content={contentLorum}>Accordion header number 2</Accordion.Row>
				<Accordion.Row content={contentLorum}>Accordion header number 3</Accordion.Row>
				<Accordion.Row content={contentLorum}>Accordion header number 4</Accordion.Row>
			</div>
		</div>
	);
};

const Row = (props) => {
	const [expanded, setExpanded] = useState(false);

	const toggleContent = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<div className='accordion__row' onClick={toggleContent}>
				<div className='accordion__row--header'>
					<h3 className='accordion__row--text'>{props.children}</h3>
					<i className='accordion__row--chevron'>
						<FontAwesomeIcon icon={faChevronDown} />
					</i>
				</div>
				<p className={`accordion__row--content ${expanded ? 'visible' : 'hidden'}`}>{props.content}</p>
			</div>
		</>
	);
};

Accordion.Row = Row;

export default Accordion;

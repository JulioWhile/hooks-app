import React, { useRef } from 'react';
import './focus.css';

export const FocusScreen = () => {
	const inputRef = useRef();
	console.log(inputRef);

	const handleClick = () => {
		inputRef.current.select();
		console.log(inputRef);
	};

	return (
		<div>
			<h1>Focus Screen</h1>
			<hr />

			<input
				type='text'
				ref={inputRef}
				className='form-control'
				placeholder='Su nombre'
			/>

			<button
				onClick={handleClick}
				className='btn btn-outline-primary mt-5'
			>
				Focus
			</button>
		</div>
	);
};

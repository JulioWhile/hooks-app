import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export const Layout = () => {
	const { counter, increment } = useCounter(1);

	const { data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	const { quote } = !!data && data[0];

	const pTag = useRef();

	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />

			<blockquote className='blockquote text-rigt'>
				<p className='mb-0' ref={pTag}>
					{quote}
				</p>
			</blockquote>

			<pre>{JSON.stringify(boxSize, null, 3)}</pre>

			<button className='btn btn-primary' onClick={increment}>
				Siguiente Quote
			</button>
		</div>
	);
};

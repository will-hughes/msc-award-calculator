import React from 'react';
import propTypes from 'prop-types';

const Module = ({ credits, children }) => (
	<div className="module">
		<span>
			{children} ({credits})
		</span>
		<input type="number" placeholder="0" />
	</div>
);

Module.propTypes = {
	credits: propTypes.number,
	children: propTypes.string,
};

export default Module;

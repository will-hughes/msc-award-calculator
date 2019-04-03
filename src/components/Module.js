import React from 'react';
import propTypes from 'prop-types';

const Module = ({ credits, children, value, onChange }) => (
	<div className="Module">
		<input type="number" placeholder="0" value={value} onChange={onChange} />
		<span>
			{children} ({credits})
		</span>
	</div>
);

Module.propTypes = {
	credits: propTypes.number.isRequired,
	children: propTypes.string.isRequired,
	value: propTypes.number.isRequired,
	onChange: propTypes.func.isRequired,
};

export default Module;

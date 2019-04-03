import React from 'react';

export default ({ active, ...rest }) => (
	<span className={`Template ${active ? 'active' : ''}`} {...rest} />
);

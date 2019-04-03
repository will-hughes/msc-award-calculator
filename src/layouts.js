const layouts = new Map();

layouts.set('Post-2018 full time', [
	{ label: 'Dissertation', credits: 40, isDissertation: true },
	{ label: 'Research skills', credits: 20 },
	{ label: 'Integrating module', credits: 40 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
]);

layouts.set('Post-2018 flexi', [
	{ label: 'Dissertation', credits: 40, isDissertation: true },
	{ label: 'Research skills', credits: 20 },
	{ label: 'Integrating module A', credits: 20 },
	{ label: 'Integrating module B', credits: 20 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
]);

layouts.set('Pre-2018', [
	{ label: 'Dissertation', credits: 60, isDissertation: true },
	{ label: 'Integrating module', credits: 40 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
	{ label: 'Core/optional module', credits: 10 },
]);

export default layouts;

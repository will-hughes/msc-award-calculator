export function MScPass({ dissertation, lt40, lt50, weightedAverage, gte50 }) {
	// Always failure cases
	if (dissertation < 50) {
		return false;
	}
	if (lt40 > 30) {
		return false;
	}
	if (lt50 > 55) {
		return false;
	}
	if (weightedAverage < 48) {
		return false;
	}

	// If they're above the weighted average threshold, they're through
	if (weightedAverage >= 50) {
		return true;
	}

	// Otherwise check the dominant quality
	return gte50 >= 90;
}

export function MScMerit({ dissertation, lt40, lt50, weightedAverage, gte60 }) {
	// Always failure cases
	if (dissertation < 50) {
		return false;
	}
	if (lt40 > 0) {
		return false;
	}
	if (lt50 > 55) {
		return false;
	}
	if (weightedAverage < 58) {
		return false;
	}

	// If they're above the weighted average threshold, they're through
	if (weightedAverage >= 60) {
		return true;
	}

	// Otherwise check the dominant quality
	return gte60 >= 90;
}

export function MScDistinction({
	dissertation,
	lt40,
	lt50,
	weightedAverage,
	gte70,
}) {
	// Always failure cases
	if (dissertation < 60) {
		return false;
	}
	if (lt40 > 0) {
		return false;
	}
	if (lt50 > 55) {
		return false;
	}
	if (weightedAverage < 68) {
		return false;
	}

	// If they're above the weighted average threshold, they're through
	if (weightedAverage >= 70) {
		return true;
	}

	// Otherwise check the dominant quality
	return gte70 >= 90;
}

export function generateTotals(marks) {
	const modules = marks
		.map(m => ({ ...m, creditxMarks: m.credits * m.mark || 0 }))
		.map(m => ({
			...m,
			lt40: m.mark < 40 ? m.credits : 0,
			lt50: m.mark < 50 ? m.credits : 0,
			gte50: m.mark >= 50 ? m.credits : 0,
			gte60: m.mark >= 60 ? m.credits : 0,
			gte70: m.mark >= 70 ? m.credits : 0,
		}));

	const totals = modules.reduce(
		(acc, module) => {
			acc.credits += module.credits;
			acc.creditxMarks += module.creditxMarks;

			acc.lt40 += module.lt40;
			acc.lt50 += module.lt50;
			acc.gte50 += module.gte50;
			acc.gte60 += module.gte60;
			acc.gte70 += module.gte70;

			if (module.isDissertation) {
				acc.dissertation = module.mark;
			}

			acc.weightedAverage = acc.creditxMarks / acc.credits;
			return acc;
		},
		{
			credits: 0,
			creditxMarks: 0,
			lt40: 0,
			lt50: 0,
			gte50: 0,
			gte60: 0,
			gte70: 0,
		}
	);

	return totals;
}

export default marks => {
	const totals = generateTotals(marks);
	if (MScDistinction(totals)) {
		return 'MSc Distinction';
	}
	if (MScMerit(totals)) {
		return 'MSc Merit';
	}
	if (MScPass(totals)) {
		return 'MSc Pass';
	}
	return 'Fail';
};

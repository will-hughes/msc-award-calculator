import getClassification from './rules';

let marks = [];

test('Failure', () => {
	marks = [
		{ credits: 60, mark: 50, isDissertation: true },
		{ credits: 40, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 55 },
		{ credits: 10, mark: 35 },
		{ credits: 10, mark: 36 },
		{ credits: 10, mark: 36 },
	];

	expect(getClassification(marks)).toBe('Fail');
});

test('Pass', () => {
	marks = [
		{ credits: 60, mark: 50, isDissertation: true },
		{ credits: 40, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 55 },
		{ credits: 10, mark: 35 },
		{ credits: 10, mark: 37 },
		{ credits: 10, mark: 39 },
	];

	expect(getClassification(marks)).toBe('MSc Pass');

	marks = [
		{ credits: 60, mark: 50, isDissertation: true },
		{ credits: 40, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 50 },
	];

	expect(getClassification(marks)).toBe('MSc Pass');

	marks = [
		{ credits: 60, mark: 60, isDissertation: true },
		{ credits: 40, mark: 60 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 50 },
		{ credits: 10, mark: 48 },
		{ credits: 10, mark: 48 },
		{ credits: 10, mark: 48 },
		{ credits: 10, mark: 50 },
	];

	expect(getClassification(marks)).toBe('MSc Pass');
});

test('Merit', () => {
	marks = [
		{ credits: 60, mark: 60, isDissertation: true },
		{ credits: 40, mark: 47 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
		{ credits: 10, mark: 65 },
	];

	expect(getClassification(marks)).toBe('MSc Merit');

	marks = [
		{ credits: 60, mark: 50, isDissertation: true },
		{ credits: 40, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 68 },
		{ credits: 10, mark: 45 },
	];

	expect(getClassification(marks)).toBe('MSc Merit');
});

test('Distinction', () => {
	marks = [
		{ credits: 60, mark: 70 },
		{ credits: 40, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
	];

	expect(getClassification(marks)).toBe('MSc Distinction');

	marks = [
		{ credits: 60, mark: 70 },
		{ credits: 40, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 68 },
		{ credits: 10, mark: 40 },
	];

	expect(getClassification(marks)).toBe('MSc Distinction');

	marks = [
		{ credits: 60, mark: 60 },
		{ credits: 40, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 75 },
		{ credits: 10, mark: 70 },
		{ credits: 10, mark: 75 },
		{ credits: 10, mark: 75 },
		{ credits: 10, mark: 75 },
		{ credits: 10, mark: 75 },
	];

	expect(getClassification(marks)).toBe('MSc Distinction');
});

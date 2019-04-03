import getClassification from './rules';

let marks = [];

describe('Pre-2018', () => {
	describe('Distinction', () => {
		test('High', () => {
			marks = [
				{ credits: 60, mark: 70, isDissertation: true },
				{ credits: 40, mark: 79 },
				{ credits: 10, mark: 72 },
				{ credits: 10, mark: 78 },
				{ credits: 10, mark: 90 },
				{ credits: 10, mark: 65 },
				{ credits: 10, mark: 72 },
				{ credits: 10, mark: 87 },
				{ credits: 10, mark: 83 },
				{ credits: 10, mark: 66 },
			];

			expect(getClassification(marks)).toBe('MSc Distinction');
		});

		test('Bare', () => {
			marks = [
				{ credits: 60, mark: 69, isDissertation: true },
				{ credits: 40, mark: 70 },
				{ credits: 10, mark: 71 },
				{ credits: 10, mark: 61 },
				{ credits: 10, mark: 68 },
				{ credits: 10, mark: 65 },
				{ credits: 10, mark: 72 },
				{ credits: 10, mark: 82 },
				{ credits: 10, mark: 73 },
				{ credits: 10, mark: 74 },
			];

			expect(getClassification(marks)).toBe('MSc Distinction');
		});
	});

	describe('Merit', () => {
		test('High', () => {
			marks = [
				{ credits: 60, mark: 67, isDissertation: true },
				{ credits: 40, mark: 69 },
				{ credits: 10, mark: 63 },
				{ credits: 10, mark: 71 },
				{ credits: 10, mark: 50 },
				{ credits: 10, mark: 66 },
				{ credits: 10, mark: 72 },
				{ credits: 10, mark: 65 },
				{ credits: 10, mark: 60 },
				{ credits: 10, mark: 80 },
			];

			expect(getClassification(marks)).toBe('MSc Merit');
		});

		test('Bare', () => {
			marks = [
				{ credits: 60, mark: 61, isDissertation: true },
				{ credits: 40, mark: 55 },
				{ credits: 10, mark: 57 },
				{ credits: 10, mark: 60 },
				{ credits: 10, mark: 60 },
				{ credits: 10, mark: 61 },
				{ credits: 10, mark: 67 },
				{ credits: 10, mark: 56 },
				{ credits: 10, mark: 78 },
				{ credits: 10, mark: 62 },
			];

			expect(getClassification(marks)).toBe('MSc Merit');
		});
	});

	describe('Pass', () => {
		test('High', () => {
			marks = [
				{ credits: 60, mark: 58, isDissertation: true },
				{ credits: 40, mark: 57 },
				{ credits: 10, mark: 65 },
				{ credits: 10, mark: 62 },
				{ credits: 10, mark: 56 },
				{ credits: 10, mark: 69 },
				{ credits: 10, mark: 61 },
				{ credits: 10, mark: 63 },
				{ credits: 10, mark: 66 },
				{ credits: 10, mark: 50 },
			];

			expect(getClassification(marks)).toBe('MSc Pass');
		});

		test('Bare', () => {
			marks = [
				{ credits: 60, mark: 55, isDissertation: true },
				{ credits: 40, mark: 50 },
				{ credits: 10, mark: 45 },
				{ credits: 10, mark: 38 },
				{ credits: 10, mark: 55 },
				{ credits: 10, mark: 50 },
				{ credits: 10, mark: 56 },
				{ credits: 10, mark: 57 },
				{ credits: 10, mark: 12 },
				{ credits: 10, mark: 58 },
			];

			expect(getClassification(marks)).toBe('MSc Pass');
		});
	});

	describe('Fail', () => {
		test('High', () => {
			marks = [
				{ credits: 60, mark: 55, isDissertation: true },
				{ credits: 40, mark: 43 },
				{ credits: 10, mark: 35 },
				{ credits: 10, mark: 38 },
				{ credits: 10, mark: 55 },
				{ credits: 10, mark: 50 },
				{ credits: 10, mark: 56 },
				{ credits: 10, mark: 57 },
				{ credits: 10, mark: 12 },
				{ credits: 10, mark: 58 },
			];

			expect(getClassification(marks)).toBe('Fail');
		});
	});
});

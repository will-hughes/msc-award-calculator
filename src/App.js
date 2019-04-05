import React, { useState, useEffect } from 'react';
import './App.css';

import { default as getClassification, getTotals } from './rules';
import layouts from './layouts';

import Header from './components/Header';
import Module from './components/Module';
import Template from './components/Template';

const { localStorage } = window;

const toEmptyLayout = template =>
	layouts.get(template).map(({ credits, isDissertation }) => ({
		credits,
		isDissertation,
		mark: 0,
	}));

export default function App() {
	// Marks state
	const defaultMarks = toEmptyLayout('Post-2018 full time');
	const localMarks = JSON.parse(localStorage.getItem('marks'));
	const [marks, setMarks] = useState(localMarks || defaultMarks);

	// Template state
	const defaultTemplate = 'Post-2018 full time';
	const localTemplate = JSON.parse(localStorage.getItem('template'));
	const [template, setTemplate] = useState(localTemplate || defaultTemplate);

	// Change handlers
	const handleMarkChange = (i, event) => {
		const value = parseInt(event.target.value || '0', 10);
		setMarks(marks =>
			marks.map((m, j) => (i === j ? { ...m, mark: value } : m))
		);
	};

	const handleTemplateChange = key => {
		setMarks(toEmptyLayout(key));
		setTemplate(key);
	};

	// Cache state changes to localStorage
	useEffect(
		() => {
			localStorage.setItem('marks', JSON.stringify(marks));
			localStorage.setItem('template', JSON.stringify(template));
		},
		[marks, template]
	);

	const classification = getClassification(marks);
	const totals = getTotals(marks);

	return (
		<div>
			<Header>SCME MSc award calculator</Header>
			<div className="layouts">
				{[...layouts.keys()].map((key, i) => (
					<Template
						active={template === key}
						key={key}
						onClick={() => handleTemplateChange(key)}
					>
						{key}
					</Template>
				))}
			</div>
			<hr />
			<div className="row">
				<div className="form column">
					{layouts.get(template).map((module, i) => (
						<Module
							key={i}
							credits={module.credits}
							value={marks[i].mark}
							onChange={event => handleMarkChange(i, event)}
						>
							{module.label}
						</Module>
					))}
				</div>

				<div className="column">
					<div className="results">
						<h2>{classification}</h2>

						<p>Weighted average: {totals.weightedAverage.toFixed(2)}%</p>
						<p>Credits less than 40: {totals.lt40}</p>
						<p>Credits less than 50: {totals.lt50}</p>
						<p>Credits greater than 50: {totals.gte50}</p>
						<p>Credits greater than 60: {totals.gte60}</p>
						<p>Credits greater than 70: {totals.gte70}</p>
					</div>
				</div>
			</div>
			<hr />
			<footer className="row">
				<div className="column">
					<p>
						Please use this site to calculate your likely degree result, based
						on the marks you have accumulated to date and your estimates of
						marks still to be received. The rules for calculating the MSc result
						are fully implemented on this page, but please remember that all
						marks are provisional until ratified by the Examination Board.
					</p>
					<p>
						Please address questions to{' '}
						<a href="mailto:w.p.hughes@reading.ac.uk">Will Hughes</a>.
					</p>
					<p>
						This is not an official resource, and is for informational purposes
						only.
					</p>
					<p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/will-hughes/awards"
						>
							<img
								style={{ opacity: 0.4 }}
								src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
								width="30"
								alt=""
							/>
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
}

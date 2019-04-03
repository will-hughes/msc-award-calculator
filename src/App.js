import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Module from './components/Module';

class App extends Component {
	render() {
		return (
			<div>
				<Header>SCME MSc award calculator</Header>
				<div className="row">
					<div className="form column">
						<p>
							Use the 60-credit box for the dissertation mark, the 40-credit box
							for the integrating module, and the 10-credit boxes for the
							remaining modules.
						</p>

						<Module credits={60}>Dissertation</Module>
						<Module credits={40}>Integrating module</Module>
						<Module credits={10}>Core/optional module</Module>
						<Module credits={10}>Core/optional module</Module>
						<Module credits={10}>Core/optional module</Module>
						<Module credits={10}>Core/optional module</Module>
						<Module credits={10}>Core/optional module</Module>
						<Module credits={10}>Core/optional module</Module>
						<Module credits={10}>Core/optional module</Module>
					</div>

					<div className="column">
						<p>
							Weighted average: <span className="weightedAverage" />
						</p>
						<p>
							Credits less than 40: <span className="lt40" />
						</p>
						<p>
							Credits less than 50: <span className="lt50" />
						</p>
						<p>
							Credits greater than 50: <span className="gte50" />
						</p>
						<p>
							Credits greater than 60: <span className="gte60" />
						</p>
						<p>
							Credits greater than 70: <span className="gte70" />
						</p>

						<button type="button" name="update">
							Update
						</button>

						<hr />

						<p>
							Please use this site to calculate your likely degree result, based
							on the marks you have accumulated to date and your estimates of
							marks still to be received. The rules for calculating the MSc
							result are fully implemented on this page, but please remember
							that all marks are provisional until ratified by the Examination
							Board.
						</p>
					</div>
				</div>
				<footer className="row">
					<div className="column">
						<p>
							Please address questions to{' '}
							<a href="mailto:w.p.hughes@reading.ac.uk">Will Hughes</a>.
						</p>
						<p>
							This is not an official resource, and is for informational
							purposes only. Unfortunately, it seems that this script will not
							run on iPhones with Safari. Apologies for this.
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
}

export default App;

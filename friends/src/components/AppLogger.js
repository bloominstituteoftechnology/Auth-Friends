import React, { Component } from 'react';

import '../styles/AppLogger.css';

class AppLogger extends Component {
	state = {
		logs: [],
		appState: {},
		keys: [],
	};

	componentDidMount() {
		// console.log(this.props.appState);
		this.setState({
			logs: ['Logger started successfully'],
			appState: { ...this.props.appState },
			keys: [
				'fetchingFriends',
				'friendsFetched',
				'updatingFriends',
				'friendsSaved',
				'error',
			],
		});
	}

	componentWillReceiveProps(nextProps) {
		// console.log('compreceivedprops applogger');
		if (this.checkStates(nextProps.appState)) this.addLog(nextProps.appState);
	}

	checkStates = next => {
		// console.log('checkstates');
		let stateIsChanged = false;

		const current = { ...this.state.appState };
		const keys = [...this.state.keys];

		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];

			if (current[key] !== next[key]) {
				stateIsChanged = true;
				break;
			}
		}

		return stateIsChanged;
	};

	addLog = next => {
		// console.log(next);
		this.setState({ logs: ['hi', ...this.state.logs] });
	};

	render() {
		// console.log(this.state);
		return (
			<div className="AppLogger">
				{this.state.logs.map((log, i) => {
					return (
						<div key={`${i}-${log}`} className="AppLogger__item">
							{`${this.state.logs.length - i}: ${log}	`}
						</div>
					);
				})}
			</div>
		);
	}
}

export default AppLogger;

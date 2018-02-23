// import React, { Component } from 'react';
import React from 'react';

import '../styles/AppLogger.css';

export default function AppLogger(props) {
	return (
		<div className="AppLogger">
			{props.showLogger
				? props.logs.map((log, i) => {
						return (
							<div key={`${i}-${log}`} className="AppLogger__item">
								{`${props.logs.length - i}: ${log}	`}
							</div>
						);
					})
				: null}
		</div>
	);
}

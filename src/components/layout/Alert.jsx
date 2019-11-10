import React from "react";

const Alert = props => {
	const { alerts } = props;

	return (
		<React.Fragment>
			{alerts.length > 0 &&
				alerts.map((alert, i) => (
					<div className="alert" key={i}>
						<div>
							<i className="fa fa-exclamation-circle" /> {alert}
						</div>
					</div>
				))}
		</React.Fragment>
	);
};

export default Alert;

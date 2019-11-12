import React from "react";

const Alert = props => {
	const { alerts } = props;

	return (
		<React.Fragment>
			{alerts.length > 0 && (
				<div className="alert">
					<div>
						<i className="fa fa-exclamation-circle" /> {alerts}
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Alert;

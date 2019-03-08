import React from "react";
import "../../styles/index.css";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light header">
				<a className="navbar-brand text-white" href="/">
					<img
						src="/docs/4.3/assets/brand/bootstrap-solid.svg"
						width="30"
						height="30"
						alt=""
					/>
					STAR WARS MANIA
				</a>
			</nav>
		);
	}
}

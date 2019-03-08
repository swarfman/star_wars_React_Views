import React, { Component } from "react";
import "../../styles/index.css";

export class Footer extends Component {
	render() {
		return (
			<nav className="navbar navbar-light justify-content-center footer">
				<a className="navbar-brand text-white" href="#">
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

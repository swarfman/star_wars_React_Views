import React from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedDropDown: false
		};
	}

	render() {
		let show = "";
		if (this.state.clickedDropDown) show = "show";

		let value = "";
		if (this.state.clickedDropDown === "show") value = "true";
		else if (this.state.clickedDropDown === "") value = false;

		return (
			<nav className="navbar navbar-light header d-flex justify-content-between">
				<a className="navbar-brand text-white" href="/">
					<img
						src="/docs/4.3/assets/brand/bootstrap-solid.svg"
						width="30"
						height="30"
						alt=""
					/>
					STAR WARS MANIA
				</a>
				<a className={"nav-item dropdown " + show}>
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded={this.state.clickedDropDown}
						onClick={() =>
							this.setState({
								clickedDropDown: !this.state.clickedDropDown
							})
						}>
						Favorites
					</a>
					<div
						className={"dropdown-menu " + show}
						aria-labelledby="navbarDropdown">
						<Context.Consumer>
							{({ store }) => {
								return store.favorites.map((elm, index) => (
									<Link
										to={`/details/${index + 1}`}
										key={index}>
										<li className="pl-1 border-bottom">
											{elm.name}
										</li>
									</Link>
								));
							}}
						</Context.Consumer>
					</div>
				</a>
			</nav>
		);
	}
}
Navbar.propTypes = {
	index: PropTypes.number
};

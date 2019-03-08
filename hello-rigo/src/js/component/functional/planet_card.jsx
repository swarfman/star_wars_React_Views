import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../../styles/home.css";

export const PlanetCard = props => {
	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img
				src="http://via.placeholder.com/600x600"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Population: {props.population}
					<br />
					Terrain: {props.terrain}
				</p>
				<Link to={`/planet_details/${props.index + 1}`}>
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
				</Link>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	index: PropTypes.number
};

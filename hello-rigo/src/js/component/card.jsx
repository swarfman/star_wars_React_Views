import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";

export const Card = props => {
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
					Gender: {props.gender}
					<br />
					Hair Color: {props.hair_color}
					<br />
					Eye-Color: {props.eye_color}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={`/details/${props.index + 1}`}>
						<a href="#" className="btn btn-primary">
							Learn more!
						</a>
					</Link>
					<Context.Consumer>
						{({ actions }) => {
							return (
								<a
									href="#"
									className="btn btn-success"
									onClick={() =>
										actions.addToFavorites(props.name)
									}>
									Add to Favorites!
								</a>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	species: PropTypes.array,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	index: PropTypes.number
};

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card.jsx";
import { PlanetCard } from "../component/functional/planet_card.jsx";
import PropTypes from "prop-types";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			results: [
				{
					name: "Luke Skywalker",
					height: "172",
					mass: "77",
					hair_color: "blond",
					skin_color: "fair",
					eye_color: "blue",
					birth_year: "19BBY",
					gender: "male",
					homeworld: "https://swapi.co/api/planets/1/",
					films: [
						"https://swapi.co/api/films/2/",
						"https://swapi.co/api/films/6/",
						"https://swapi.co/api/films/3/",
						"https://swapi.co/api/films/1/",
						"https://swapi.co/api/films/7/"
					],
					species: ["https://swapi.co/api/species/1/"],
					vehicles: [
						"https://swapi.co/api/vehicles/14/",
						"https://swapi.co/api/vehicles/30/"
					],
					starships: [
						"https://swapi.co/api/starships/12/",
						"https://swapi.co/api/starships/22/"
					],
					created: "2014-12-09T13:50:51.644000Z",
					edited: "2014-12-20T21:17:56.891000Z",
					url: "https://swapi.co/api/people/1/"
				}
			],
			planets: []
		};
	}

	componentDidMount = () => {
		fetch("https://swapi.co/api/people/?format=json")
			.then(res => res.json())
			.then(response => {
				console.log("Success:", typeof response);
				//console.log(response);
				if (typeof response === typeof {}) {
					this.setState({ results: response.results });
				} else {
					this.setState({ results: [] });
				}
			})

			.catch(error => console.error("Error:", error));

		fetch("https://swapi.co/api/planets/?format=json")
			.then(res => res.json())
			.then(response => {
				console.log("Success:", typeof response);
				//console.log(response);
				if (typeof response === typeof {}) {
					this.setState({ planets: response.results });
				} else {
					this.setState({ planets: [] });
				}
			})

			.catch(error => console.error("Error:", error));
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row character">
					<h3 className="m-3 text-danger">Characters</h3>
					<div className="card-columns d-flex justify-content-between">
						{this.state.results.map((elem, index) => {
							return (
								<Card
									key={index}
									name={elem.name}
									gender={elem.gender}
									eye_color={elem.eye_color}
									hair_color={elem.hair_color}
									index={index}
								/>
							);
						})}
					</div>
				</div>
				<div className="row planet">
					<h3 className="m-3 text-danger">Planets</h3>
					<div className="card-columns d-flex justify-content-between">
						{this.state.planets.map((elem, index) => {
							return (
								<PlanetCard
									className="textCustom"
									key={index}
									name={elem.name}
									population={elem.population}
									terrain={elem.terrain}
									index={index}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

// Card.propTypes = {
// 	name: PropTypes.string,
// 	species: PropTypes.array,
// 	gender: PropTypes.string,
// 	eye_color: PropTypes.string,
// 	hair_color: PropTypes.string
// };

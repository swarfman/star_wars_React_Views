import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";

export class Details extends React.Component {
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
			]
		};
	}

	componentDidMount = () => {
		fetch(
			"https://swapi.co/api/people/" +
				this.props.match.params.theid +
				"?format=json"
		)
			.then(res => res.json())
			.then(response => {
				//console.log("Success:", typeof response);
				//	console.log(response);
				if (typeof response === typeof {}) {
					this.setState({ results: response });
					//console.log(this.state);
				} else {
					this.setState({ results: [] });
				}
			})

			.catch(error => console.error("Error:", error));

		// fetch("https://swapi.co/api/planets/?format=json")
		// 	.then(res => res.json())
		// 	.then(response => {
		// 		console.log("Success:", typeof response);
		// 		console.log(response);
		// 		if (typeof response === typeof {}) {
		// 			this.setState({ planets: response.results });
		// 		} else {
		// 			this.setState({ planets: [] });
		// 		}
		// 	})

		// 	.catch(error => console.error("Error:", error));
	};

	render() {
		//console.log(this.props);
		return (
			<div>
				<div className="row">
					<div className="col-6">
						<img src="http://via.placeholder.com/800x600" />
					</div>
					<div className="col-6 background">
						<div className="text-center text-white m-3">
							<h2>{this.state.results.name}</h2>
							<p>
								Sed ut perspiciatis unde omnis iste natus error
								sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae
								ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo. Nemo enim
								ipsam voluptatem quia voluptas sit aspernatur
								aut odit aut fugit, sed quia consequuntur magni
								dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem
								ipsum quia dolor sit amet, consectetur, adipisci
								velit, sed quia non numquam eius modi tempora
								incidunt ut labore et dolore magnam aliquam
								quaerat voluptatem. Ut enim ad minima veniam,
								quis nostrum exercitationem ullam corporis
								suscipit laboriosam, nisi ut aliquid ex ea
								commodi consequatur? Quis autem vel eum iure
								reprehenderit qui in ea voluptate velit esse
								quam nihil molestiae consequatur, vel illum qui
								dolorem eum fugiat quo voluptas nulla pariatur?
							</p>
						</div>
					</div>
				</div>
				<div className="row ml-1 mr-1 background border-top border-danger">
					<div className="col-12 d-flex justify-content-between text-danger text-center">
						<div className="appearances p-5 m-3">
							<h6>Name</h6>
							<p className="text-white">
								{this.state.results.name}
							</p>
						</div>
						<div className="affiliations m-3 p-5">
							<h6>Birth Year</h6>
							<p className="text-white text-center">
								{this.state.results.birth_year}
							</p>
						</div>
						<div className="locations p-5 m-3">
							<h6>Gender</h6>
							<p className="text-white">
								{this.state.results.gender}
							</p>
						</div>
						<div className="gender p-5 m-3">
							<h6>Height</h6>
							<p className="text-white">
								{this.state.results.height}
							</p>
						</div>
						<div className="dimensions p-5 m-3">
							<h6>Skin Color</h6>
							<p className="text-white text-center">
								{this.state.results.skin_color}
							</p>
						</div>
						<div className="species p-5 m-3">
							<h6>Eye Color</h6>
							<p className="text-white">
								{this.state.results.eye_color}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Details.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object
};

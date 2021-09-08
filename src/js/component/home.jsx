import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="">
			<div>
				<Navbar />
				<li style={{ color: "white" }}></li>
				<div className="container mt-5">
					<Jumbotron />
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
				</div>
			</div>
			<p>
				<li style={{ color: "white" }}></li>
				<li style={{ color: "white" }}></li>
				<li style={{ color: "white" }}></li>
				<li style={{ color: "white" }}></li>
			</p>

			<Footer />
		</div>
	);
};

export default Home;

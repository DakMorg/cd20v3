import React from 'react';
import profilePic from "../assets/profilePic.PNG"; //link to profile image in assets folder

function About() {
	return (
		<section className="aboutSection">
			<div className="profilePic">
				<img src={profilePic} alt="profile" />
			</div>

			<div className="aboutBio">

				<div className="bioTitle">
					<h1 >
						About Me
					</h1>
				</div>
				<div className="bioContent">
					<p>
						My name is Dakota Morgan and I am a full stack web-developer, my favorite part
						about being a web-dev is the reward of finding creative solutions to solve
						difficult problems, and the sense of accomplishment you feel when your code
						finally works.
					</p>
				</div>
			</div>

		</section>
	);
}

export default About;
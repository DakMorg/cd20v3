import React from "react";
//upload images for projects to assets and import them here

function Portfolio() {
    return (
        <div>
            <section className="portfolioSection">

                <div className="portfolioItem">
                    <h4>JATE Text Editor</h4>
                    <p>JATE stands for Just Another Text Editor,
                        and is just that. This app allows you to
                        type and edit a text field and is accessible
                        Both offline, and online.
                    </p>
                    <a href="https://github.com/DakMorg/c19">Project Link</a>
                </div>

                <div className="portfolioItem">
                    <h4>E-commerce back end</h4>
                    <p>This is the backend code for an e-commerce website
                        with a mysql database.
                    </p>
                    <a href="https://github.com/DakMorg/c13">Project Link</a>
                </div>

                <div className="portfolioItem">
                    <h4>Note Taker</h4>
                    <p>This is a note taking website that lets you create
                        notes with titles and stores them accordingly for
                        you to access later if needed.
                    </p>
                    <a href="https://github.com/DakMorg/c11">Project Link</a>
                </div>

                <div className="portfolioItem">
                    <h4>Team Generator</h4>
                    <p>This is a command line app that allows you to create
                        a html page with your teams information displayed on
                        name cards.
                    </p>
                    <a href="https://github.com/DakMorg/c10">Project Link</a>
                </div>

                <div className="portfolioItem">
                    <h4>ReadMe Generator</h4>
                    <p>This is a command line app that allows you to easily generate
                        a high quality readme.</p>
                    <a href="https://github.com/DakMorg/c9">Project Link</a>
                </div>

            </section>
        </div>
    );
}

export default Portfolio;
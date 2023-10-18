import React from "react";
import Porfoli_data from "./Porfoli_data";
import Card from "./Card";
import "./Porfolio.css";

const Porfolio = () => {
    return (
        <>
            <section className="porfolio top" id="portfolio">
                <div className="container">
                    <div className="heading text-center">
                        <h4>VIST MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                        <h1>My Porfolio</h1>
                    </div>
                    <div className="content grid">
                        {Porfoli_data.map((val, index) => {
                            return (
                                <Card
                                    key={index}
                                    image={val.image}
                                    category={val.category}
                                    totalLike={val.totalLike}
                                    title={val.title}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Porfolio;

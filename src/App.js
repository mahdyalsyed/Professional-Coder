import React from "react";
import Header from "./components/Head/Header";
import "./App.css";
import Home from "./components/Hero/Home";
import Features from "./components/Features/Features";
import Porfolio from "./components/Porfolio/Porfolio";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Home />
            <Features />
            <Porfolio />
            <Resume />
            <Testimonial />
            <Blog />
            <Contact />
            <Footer />
        </>
    );
}

export default App;

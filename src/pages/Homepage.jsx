import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hero } from "../components/home/hero/Hero";
import { Featured } from "../components/home/featured/Feautured";
import { WhyUs } from "../components/home/why-us/whyUs";
import { CounterSection } from "../components/home/counter-section/Counter";

function Home() {
    return (
        <>
            <Hero
                title={{ part1: "Welcome to", part2: "Korea Immigration Express" }}
                subtitle="Your Gateway to a New Horizon in Korea"
                buttonText="Get Your VISA"
                buttonLink="/visa-application-form.pdf" />
            <Featured />
            <CounterSection />
            <WhyUs />
        </>
    )
}

export default Home;
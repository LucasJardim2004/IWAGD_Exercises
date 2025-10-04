import React from 'react';
import Gallery from "./Gallery";
import Schedule from "./Schedule";
import Links from "./Links";
import Contacts from "./Contacts";
import About from "./About";

function Main() {
  return (
    <article>
        <About />
        <Gallery />
        <Schedule />
        <Links />
        <Contacts />
    </article>
  );
}

export default Main;

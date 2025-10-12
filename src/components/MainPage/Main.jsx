import React from 'react';
import Gallery from "./Gallery";
import Schedule from "./Schedule";
import Links from "./Links";
import Contacts from "./Contacts";
import About from "./About";
import ListMusicians from './listMusicians';

function Main() {
  return (
    <article>
      <About />
      <ListMusicians />
      <Gallery />
      <Schedule />
      <Links />
      <Contacts />
    </article>
  );
}

export default Main;
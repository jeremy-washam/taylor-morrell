/* eslint-disable max-len */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="full">
      <div className="about">
        <div className="mainText">
          <p className="topText">I’m currently a growth strategy and innovation consultant at <a href="https://www.innosight.com/team_bio/morrell-taylor/" target="_blank" rel="noreferrer">Innosight.</a></p>
          <p>I’m an aspiring high-altitude mountaineer; my next adventure is the West Buttress of Denali in May 2021 with the <a href="http://www.alpineinstitute.com/" target="_blank" rel="noreferrer">American Alpine Institute.</a>
          </p>
          <p>I write about <Link className="link" to="/adventure">responsible adventure.</Link></p>
          <p className="bottomText">I studied government and neuroscience at <a href="https://home.dartmouth.edu/" target="_blank" rel="noreferrer">Dartmouth College</a>, where I also deepened my passion for skiing, surfing, and traveling.
          </p>
        </div>
      </div>
      <div className="bottom">
        <a href="http://www.linkedin.com/in/taylor-sam-morrell" target="_blank" rel="noreferrer">
          <img src="https://i.ibb.co/5h404cJ/linkedin2.png" alt="" />
        </a>
        <p>Built and designed in collaboration with <a href="https://github.com/jeremy-washam" target="_blank" rel="noreferrer">Jeremy Washam</a></p>
      </div>
    </div>
  );
};

export default Home;

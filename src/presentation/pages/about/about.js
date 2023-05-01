import React from 'react';
import './about.scss';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const About = () => {
  return (
    <div className="about">
      <h1>About This Website</h1>
      <div className="accordions">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>What is this website?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This is a fully functioning e-commerce website created as a final
              project of MCI / IIM Lab Open Recruitment 2023
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h2>What tech stack is this website built on?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This website is built using ReactJs on the front-end side. Some
              components are taken from Material UI. The gallery and card
              carousel component uses SwiperJs. The routing between pages is
              managed using react-router.
              <br />
              <br />
              The backend side uses ExpressJs. The database is Postgresql hosted
              by Google Cloud Platform (GCP). The server also manages the
              chatting system using Socket.io.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h2>Is this project open source?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>This project is open source and you can find it here.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h2>Who built this website?</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              This website is built by a thriving informatics student named
              Hanun Shaka. You can find her on LinkedIn, Github, or Instagram.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default About;

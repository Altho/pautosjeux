import type { NextPage } from 'next'
import { createStyles } from '@mantine/core';
import React from 'react';
import Menu from "../Components/Menu/Menu";
import Logo from "../Components/Placeholders/Logo";
//import Map from "../Components/Placeholders/Map";

const useStyles = createStyles((theme, _params) => ({
    wrapper: {
      // subscribe to color scheme changes right in your styles
  
      maxWidth: 400,
      width: '100%',
      height: 180,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: theme.radius.sm,
  
      // Dynamic media queries, define breakpoints in theme, use anywhere
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
  
      },
    },
  }));


const Infos: NextPage  = () => {
    const { classes } = useStyles();
    //const latitude  = 43.30491591424093 ;
    //const longitude = -0.3775070880213048 ;

  return (
    
     <body>
    <div > 
        <Menu />
    </div>

    <div style={{ margin: '20px' }}>
      <h1>Horaires</h1>
      <p> Samedi : 10h - 1h </p>
      <p> Dimanche : 10h - 18h </p>
    
      <h1>Notre Emplacement</h1>
      <p> Parc des Expositions de Pau </p>
      <p> Hall Béarn</p>
      
      {/* <Map latitude={latitude} longitude={longitude} /> */}
    
    </div>
    </body>
    
  );
};

export default Infos;
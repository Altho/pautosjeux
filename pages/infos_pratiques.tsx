import type { NextPage } from 'next'
import { createStyles } from '@mantine/core';
import React from 'react';
import Menu from "../Components/Menu/Menu";
import Logo from "../Components/Placeholders/Logo";

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


const InfosPratiques: NextPage  = () => {
    const { classes } = useStyles();

  return (

     <body>
    <div > 
        <Menu />
    </div>

    <div style={{ margin: '20px' }}>
      <h1>Horaires</h1>
      <p> Samedi : 10h - 1h </p>
      <p> Dimanche : 10h - 18h </p>

      <h1>Buvette et petite restauration sur place</h1>

      <h1>Notre Emplacement</h1>
      <p> Parc des Expositions de Pau </p>
      <p> Hall Béarn</p>

        <p> 7 Bd Champetier de Ribes, 64000 Pau</p>

    </div>
    </body>

  );
};

export default InfosPratiques;
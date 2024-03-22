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


const Auteurs: NextPage  = () => {
    const { classes } = useStyles();

  return (

     <body>
    <div > 
        <Menu />
    </div>

    <div style={{ margin: '20px' }}>
      <h1>Les auteurs</h1>
      <p>Nous aurons le plaisir de recevoir des auteurs de jeux cette année !
        Ils seront disponibles pour échanger avec vous jouer et dédicacer leurs jeux.
        Visiter cette page ou à suivre nos réseaux sociaux pour être les premiers informés des noms.

      </p>

    </div>
    </body>

  );
};

export default Auteurs;
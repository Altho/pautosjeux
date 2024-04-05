import type { NextPage } from 'next'
import { createStyles } from '@mantine/core';
import React from 'react';
import Menu from "../Components/Menu/Menu";
import Logo from "../Components/Placeholders/Logo";
import Link from 'next/link';

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


const Partenaires: NextPage  = () => {
    const { classes } = useStyles();

  return (

     <body>
    <div > 
        <Menu />
    </div>

    <div style={{ margin: '20px' }}>
      
      <h2> Un grand merci à nos partenaires </h2>
      
      <p><Link href="https://www.quiz-room.com/villes/pau">
      <a target="_blank" rel="noopener noreferrer"> Quizz Room Pau </a>
      </Link></p>
      <p><Link href="https://www.kid-happy.fr/">
      <a target="_blank" rel="noopener noreferrer"> Kid Happy </a>
      </Link></p>
      <p><Link href="https://www.babette-beer-house.fr/">
      <a target="_blank" rel="noopener noreferrer"> Babette Beer House </a>
      </Link></p>
 
      <p><Link href="https://laludikavern.com/">
      <a target="_blank" rel="noopener noreferrer"> La LudiKavern </a>
      </Link></p>

      <p><Link href="https://pau.laserquest.fr/">
      <a target="_blank" rel="noopener noreferrer"> Laser Quest Pau Lescar </a>
      </Link></p>

      <p><Link href="https://www.petitforestier.com/">
      <a target="_blank" rel="noopener noreferrer"> Le Petit Forestier Lescar </a>
      </Link></p>

      <p><Link href="https://www.joueclub.fr/magasin/joueclub-lons.html">
      <a target="_blank" rel="noopener noreferrer"> Joué Club Lons </a>
      </Link></p>

      <p><Link href="https://www.idelis.fr/">
      <a target="_blank" rel="noopener noreferrer"> Idelis </a>
      </Link></p>

      <p><Link href="https://www.pau.fr/">
      <a target="_blank" rel="noopener noreferrer"> Ville de Pau </a>
      </Link></p>


      <h2> Et bien sûr, un grand merci aux 150 bénévoles qui nous aident tout au long du week-end !</h2>

      <Link href="https://forms.gle/F288SSrCiud96M6S7">
        <a target="_blank" rel="noopener noreferrer">Devenir bénévole</a>
      </Link>

    </div>
    </body>

  );
};

export default Partenaires;
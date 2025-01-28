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


const PautosJeux: NextPage  = () => {
    const { classes } = useStyles();

  return (

     <body>
    <div > 
        <Menu />
    </div>

    <div style={{ margin: '20px' }}>

        <h1>Le Festival Pau&apos;Tos Jeux, qu&apos;est-ce que c&apos;est ?</h1>

        <p>
            Un festival qui a lieu tout le week-end pour découvrir le jeu sous toutes ses formes ! 
        </p>

        <p>
            À travers les différents pôles présentés, venez découvrir ou redécouvrir les jeux !
        </p>

        <h2>
            L&apos;espace jeux éditeurs
        </h2>
        <p>
            Avant-premières, nouveautés, jeux récompensés, les éditeurs nous envoient leurs jeux du moment pour vous les faire découvrir.
        </p>

        <h2>
            L&apos;espace jeux libres
        </h2>
        <p>Les associations ludiques nous (vous) prêtent leurs jeux le temps d&apos;un week-end ! 
            Choisissez parmis les centaines de jeux présents, des bénévoles sont là pour vous conseillez et expliquer les règles.
        </p>

        <h2>
            L&apos;espace auteurs
        </h2>
        <p> Auteurs confirmés avec de nombreux jeux édités ou jeunes auteurs venant faire découvrir leur prototypes,
            n&apos;hésitez pas à aller à leur rencontre pour jouer, discuter ou faire dédicacer vos jeux.
        </p>

        <h2> Les espaces découvertes</h2>
        <p> Envie de vous glisser dans la peau d&apos;un aventurier ? 
            De réaliser votre propre figurine de jeu ? De devenir un maître du Go ?
            Les espaces découvertes (Jeu de Rôles, peinture sur figurine, Jeux traditionnels, ...) sont faits pour vous !
        </p>

        <h2> L&apos;espace Petite Enfance</h2>
        <p> Il n&apos;y a pas d&apos;âge pour jouer, et on peut même commencer très tôt !
            Venez jouer avec vos enfants pour dévolopper leur motricité, leur sens de l&apos;observation,...
        </p>
        
        <h2> Les Animations </h2>
        <p> Tout au long du week-end, de nombreuses animations (certaines payantes) sont proposées !
            Tournois, escape game, murder party, RING,... il y en aura pour tous les goûts !</p>

    </div>
    </body>

  );
};

export default PautosJeux;

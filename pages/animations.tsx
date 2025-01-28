import type { NextPage } from 'next'
import { createStyles } from '@mantine/core';
import React from 'react';
import Menu from "../Components/Menu/Menu";
import Logo from "../Components/Placeholders/Logo";
import Image from 'next/image';
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


const Animations: NextPage  = () => {
    const { classes } = useStyles();

  return (

     <>
    <div > 
        <Menu />
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'72px' }}>

        <p>
        <Link href="https://www.instagram.com/festivaljeupau/?hl=fr">
        <a target="_blank" rel="noopener noreferrer"> <b> Inscriptions ICI</b> </a>
        </Link>
        </p>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {/* Utilisation de la balise <Image> de Next.js */}
      <Image
        src="/images/animations1.jpg"
        alt="Animations1"
        width={540}
        height={675}
      />
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {/* Utilisation de la balise <Image> de Next.js */}
      <Image
        src="/images/animations2.jpg"
        alt="Animations2"
        width={540}
        height={675}
      />
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {/* Utilisation de la balise <Image> de Next.js */}
      <Image
        src="/images/animations3.jpg"
        alt="Animations3"
        width={540}
        height={675}
      />
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {/* Utilisation de la balise <Image> de Next.js */}
      <Image
        src="/images/animations4.jpg"
        alt="Animations4"
        width={540}
        height={675}
      />
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {/* Utilisation de la balise <Image> de Next.js */}
      <Image
        src="/images/animations5.jpg"
        alt="Animations5"
        width={540}
        height={675}
      />
    </div>

    </>

  );
};

export default Animations;

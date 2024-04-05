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

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'72' }}>

        <p>
        <Link href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSd1rNVCCdNAmrT8wjJIArXEDvjOFLIImASEicnZ4Bn2tAVyQg%2Fviewform&e=AT0krE54GGRqyNqfa9BKupdD0qBvFTkssJKu3B3lS1802VhWBvkSQIvJ0OSBta-ISEjgSNgfmfpsFinZ5WYz2rGLjXMKSi5Bu7h4xw8iFLgaOE8cZpztog">
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
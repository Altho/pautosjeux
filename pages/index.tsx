import type { NextPage } from 'next'
import { createStyles } from '@mantine/core';
import Menu from "../Components/Menu/Menu";
import Logo from "../Components/Placeholders/Logo"
import Link from 'next/link';
import Image from 'next/image';


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

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
    <div>
      <Menu />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {/* Utilisation de la balise <Image> de Next.js */}
      <Image
        src="/images/Affiche_2024_finale.png"
        alt="Affiche 2024"
        width={724}
        height={1024}
/*         // Indiquez différentes versions de l'image pour différents tailles d'écrans
        srcSet="/chemin/vers/votre/image-400.jpg 400w,
                /chemin/vers/votre/image-800.jpg 800w,
                /chemin/vers/votre/image-1200.jpg 1200w"
        // Indiquez la taille de l'image pour différentes tailles d'écrans
        sizes="(max-width: 600px) 400px,
               (max-width: 1200px) 800px,
               1200px" */
      />
    </div>

    <div>
      <p>Suivez-nous sur Instagram :</p>
      <Link href="https://www.instagram.com/festivaljeupau/?hl=fr">
        <a target="_blank" rel="noopener noreferrer">Notre Page Instagram</a>
      </Link>
    </div>

      </>
  )
}

export default Home

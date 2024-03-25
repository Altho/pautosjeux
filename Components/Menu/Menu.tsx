import DarkModeToggle from "./ToggleDarkMode";
import type { NextPage } from 'next'
import { createStyles } from '@mantine/core';

import Link from 'next/link';


export default function Menu(){
    const useStyles = createStyles((theme, _params) => ({
        menu: {
            // subscribe to color scheme changes right in your styles

            padding:'10px',
            display:'flex',
            justifyContent:'flex-center',

            // Espace entre les éléments du menu
            '& > li:not(:last-child)': {
                marginRight: theme.spacing.xl, // C'est l'espace entre les éléments du menu, vous pouvez ajuster cette valeur selon vos préférences
            },

            // Style pour le sous-menu
            '& .subMenu': {
                display: 'none',
                position: 'absolute',
                backgroundColor: 'transparent',
                //border: '0px transparent #ccc',
                marginTop: '10px',
                padding: '10px',
            },

            // Afficher le sous-menu au survol de l'élément principal du menu
            '& .menuItem:hover .subMenu': {
                display: 'block',
            },

            // Dynamic media queries, define breakpoints in theme, use anywhere
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {

            },
        },
    }));

    const { classes } = useStyles();

    return(
        <nav>
            <ul className={classes.menu}>
                <li>
                    <h3>
                    <Link href="/">
                        <a>Accueil</a>
                    </Link>
                    </h3>
                </li>
                <li className="menuItem">
                    <h3>
                    <Link href="/pautos_jeux">
                        <a>Le Festival Pau&apos;Tos Jeux 2024</a>
                    </Link>
                    </h3>
                    {/* <div className="subMenu">
                        <ul>
                            <li>
                                <Link href="/auteurs">
                                <a>Auteurs</a>
                                </Link>
                            </li>
                            <li>
                                <a>Editeurs</a>
                            </li>
                            <li>
                                <a>Bénévoles</a>
                            </li>
                            <li>
                                <a>Visiteurs</a>
                            </li>
                            <li>
                                <a>Tournois</a>
                            </li>
                        </ul>
                    </div> */}
                </li>
                <li>
                    <h3>
                    <Link href="/infos_pratiques">
                        <a>Infos pratiques</a>
                    </Link>
                    </h3>
                </li>
                <li>
                    <h3>
                    <Link href="/partenaires">
                        <a>Nos partenaires</a>
                    </Link>
                    </h3>
                </li>
                <li>
                    <h3>
                        <DarkModeToggle />
                    </h3>
                </li>
                
            </ul>
        </nav>
                
    )
}
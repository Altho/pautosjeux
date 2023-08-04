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
            justifyContent:'flex-end',

            // Espace entre les éléments du menu
            '& > li:not(:last-child)': {
                marginRight: theme.spacing.xl, // C'est l'espace entre les éléments du menu, vous pouvez ajuster cette valeur selon vos préférences
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
                    <Link href="/">
                        <a>Accueil</a>
                    </Link>
                </li>
                <li>
                    <Link href="/infos_pratiques">
                        <a>Infos</a>
                    </Link>
                </li>

                    <DarkModeToggle />

            </ul>
        </nav>
                
    )
}
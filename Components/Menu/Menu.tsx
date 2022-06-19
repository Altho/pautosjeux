import DarkModeToggle from "./ToggleDarkMode";
import type { NextPage } from 'next'
import { createStyles } from '@mantine/core';

export default function Menu(){
    const useStyles = createStyles((theme, _params) => ({
        menu: {
            // subscribe to color scheme changes right in your styles

            padding:'10px',
            display:'flex',
            justifyContent:'flex-end',

            // Dynamic media queries, define breakpoints in theme, use anywhere
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {

            },
        },
    }));

    const { classes } = useStyles();

    return(
        <div className={classes.menu}>
            <DarkModeToggle />
        </div>
    )
}
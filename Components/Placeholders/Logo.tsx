import type { NextPage } from 'next'
import { createStyles, Text } from '@mantine/core';

export default function Logo(){
    const useStyles = createStyles((theme, _params) => ({
        wrapper: {
            // subscribe to color scheme changes right in your styles

            width: '100%',
            height: 180,
            position:'absolute',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-50%)',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: theme.radius.sm,

            // Dynamic media queries, define breakpoints in theme, use anywhere
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {

            },
        },
        meeple: {
            // subscribe to color scheme changes right in your styles

            backgroundImage:'url(/images/meeple.svg)',
            backgroundRepeat:'no-repeat',
            height:'400px',
            width:'400px',
            position:'absolute',
            zIndex:-1,
            opacity:0.4,
            filter:'blur(10px)'


        },


        logo: {
            // subscribe to color scheme changes right in your styles

            fontSize:'5em',
            webkitTextStroke:'1px #7C7BDD',
            width:'100%',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                fontSize:'3.5em',
            },


        },
        date: {
            // subscribe to color scheme changes right in your styles

            fontSize:'2em',
            fontFamily:'Dosis, sans-serif',
            letterSpacing:'0.3em',
            textAlign:'center',

        },
        slogan: {
            // subscribe to color scheme changes right in your styles

            fontSize:'2em',
            fontWeight:700,
            fontFamily:'Roboto, sans-serif',
            letterSpacing:'0.2em',
            textAlign:'center',

        },
    }));
    const { classes } = useStyles();

    return(
        <div className={classes.wrapper}>
            <div>
            <Text
                className={classes.logo}
                component="div"
                align="center"
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                weight={700}
                style={{ fontFamily: 'Marck Script, cursive' }}
            >
                Pau&#39;tos Jeux
            </Text>
            <div className={classes.date}>15 - 16 Avril 2023</div>
            <div className={classes.slogan}>Le festival ludique de Pau</div>
            </div>
            <div className={classes.meeple}></div>

        </div>
    )
}
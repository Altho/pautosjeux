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
            // WebkitTextStroke:'1px white',
            textShadow:'rgb(255, 255, 255) 2px 0px 0px, rgb(255, 255, 255) 1.75517px 0.958851px 0px, rgb(255, 255, 255) 1.0806px 1.68294px 0px, rgb(255, 255, 255) 0.141474px 1.99499px 0px, rgb(255, 255, 255) -0.832294px 1.81859px 0px, rgb(255, 255, 255) -1.60229px 1.19694px 0px, rgb(255, 255, 255) -1.97998px 0.28224px 0px, rgb(255, 255, 255) -1.87291px -0.701566px 0px, rgb(255, 255, 255) -1.30729px -1.5136px 0px, rgb(255, 255, 255) -0.421592px -1.95506px 0px, rgb(255, 255, 255) 0.567324px -1.91785px 0px, rgb(255, 255, 255) 1.41734px -1.41108px 0px, rgb(255, 255, 255) 1.92034px -0.558831px 0px;',
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
                color="blue"
                // variant="gradient"
                // gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                weight={700}
                style={{ fontFamily: 'Marck Script, cursive' }}
            >
                Pau&#39;tos Jeux
            </Text>
            <div className={classes.date}>13 - 14 Avril 2024</div>
            <div className={classes.slogan}>Le Festival Ludique de Pau</div>
            </div>
            <div className={classes.meeple}></div>

        </div>
    )
}
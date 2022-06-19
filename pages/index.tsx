import type { NextPage } from 'next'
import { createStyles } from '@mantine/core';
import Menu from "../Components/Menu/Menu";
import Logo from "../Components/Placeholders/Logo"


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
      <Menu />
    <div className={classes.wrapper}>
      <Logo />


    </div>
      </>
  )
}

export default Home

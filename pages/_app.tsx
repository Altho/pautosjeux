import {AppProps} from 'next/app';
import {useState} from 'react';
import '../styles/globals.css'
import Head from 'next/head';
import {MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';


export default function App(props: AppProps) {

    const {Component, pageProps} = props;
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'color-scheme',
        defaultValue: 'dark',
        getInitialValueInEffect: true,
    });
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


    return (
        <>
            <Head>
                <title>Pau'tos Jeux - Le festival ludique de Pau !</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{ colorScheme }}
                >
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>

        </>
    );
}
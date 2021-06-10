import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { reset } from 'styled-reset'
const GlobalStyles = createGlobalStyle`
    ${reset}
    body,html,#root{
        background: #f2f2f2;
        color: #222;
        padding: 0;
        max-height: 100vh;
        height: 100%;
        margin: 0;
        position: relative;
        font-size:18px;
        font-family:monospace;
    }

`;

const theme = {

}

export default function ThemeWrapper({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}

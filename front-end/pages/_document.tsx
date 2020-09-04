import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
type Props = {}

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html>
                <Head />
                <meta name="viewport" content="width = device - width, initial - scale=1, shrink - to - fit=no" />
                <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;300&display=swap" rel="stylesheet" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}

export default Document
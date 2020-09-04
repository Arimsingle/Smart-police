import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
type Props = {}

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html>
                <Head />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}

export default Document
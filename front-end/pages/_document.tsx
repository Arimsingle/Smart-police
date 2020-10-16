import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
type Props = {}

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html>
                <Head />
                <title>Smart Police</title>
                <link rel="icon" href=
                    "https://www.img.in.th/images/81ef723539fc4e6c56b1ee63a3e03778.png"
                    type="image/x-icon" />
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
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <title>ig.news</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,900&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <title>ig.news</title>
                    
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
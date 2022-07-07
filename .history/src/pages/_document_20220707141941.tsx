import Document, { Html, Head } from 'next/document'

export default class MyDocument {
    render() {
        return (
            <Html>
                <Head>
                    <title>Document</title>
                </Head>
                <body>
                    <div id="root"></div>
                </body>
            </Html>
        );
    }
}
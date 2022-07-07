import Document, { Html, Head } from 'next/document'

export default class MyDocument {
    render() {
        return (
            <Html>
                <head>
                    <title>Document</title>
                </head>
                <body>
                    <div id="root"></div>
                </body>
            <Html>
        );
    }
}
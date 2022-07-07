import Document, { Html } from 'next/document'

export default class MyDocument {
    render() {
        return (
            <Html lang="en">
                <head>
                    <title>Document</title>
                </head>
                <body>
                    <div id="root"></div>
                </body>
            </html>
        );
    }
}
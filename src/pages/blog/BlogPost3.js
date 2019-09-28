import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import OuterLayout from "../../components/OuterLayout"
import SEO from "../../components/SEO"
import BlogPost from "../../components/BlogPost";

const fileStructure = () => {
    const codeString = `
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.jade
        ├── index.jade
    └── layout.jade

    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};


const BlogPost3 = () => (
    <OuterLayout>
        <BlogPost Title="Unit Testing with The Builder" Description="A quick look at The Builder Pattern and my implementation of it">
            <SEO title="Builder Pattern" />

            <p>
                List of parts.
            </p>
            <p>
                Update and Upgrade Raspbian
            </p>
            <p>
                Install latest version on node and explain how to get correct version for your CPU
            </p>
            <p>
                Now the express set up
            </p>
            <pre>
                <code>
                    npm install -g express-generator
                </code>
            </pre>
            <pre>
                <code>
                    express react-backend
                </code>
            </pre>
            <pre>
                <code>
                    cd react-backend
                </code>
            </pre>
            <pre>
                <code>
                    npm install
                </code>
            </pre>

            {fileStructure()}

        </BlogPost>
    </OuterLayout>
)

export default BlogPost3
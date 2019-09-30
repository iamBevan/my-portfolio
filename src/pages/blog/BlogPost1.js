import React from "react"
import { Link } from "gatsby"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import OuterLayout from "../../components/OuterLayout"
import BlogPost from '../../components/BlogPost'
import SEO from "../../components/SEO"

const unitTestCode = () => {
    const codeString = `
    import { Expect, Test, TestFixture } from 'alsatian';

    @TestFixture('Example Test Fixture')
    export class ExampleTestFixture {

        @Test('1 + 1 result')
        public doesPass() {
            Expect(1 + 1).toBe(2);
        }

        @Test('2 + 2 result')
        public doesFail() {
            Expect(2 + 2).toBe(5);
        }
    };
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const unitTestResult = () => {
    const codeString = `
    alsatian "./src/*.test.*"

    FAIL: App component tests > 2 + 2 result
    Expected 4 to be 5.

    expected: 5
    actual: 4

    Pass: 1 / 2
    Fail: 1 / 2
    Ignore: 0 / 4
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
}

const BlogPost1 = () => (
    <OuterLayout>
        <BlogPost Title="React Dota API Project" Description="React, Typescript, React Semantic UI, Alsatian, Axios">
            <SEO title="React Dota API Project" />

            <h2><a href="https://stupefied-knuth-2bd1f1.netlify.com/">VIEW DESKTOP DEMO</a></h2>

            <p>
                Dota 2 is a MOBA video game with one of the largest player-bases in the world.
                The game has over 100 characters - each with a hand-full of abilties, a list of evolving stats and an infinite
                list of possible interactions. This provides a huge set of data to create an API project with React.
    
                I used the RESTful API and documentation written by OpenDota.
            </p>

            <p>
                The easiest way to get up and running is to use Facebook's Create React App.
                Typescript is currently a very popular addition due to it's strengths in static checking
                and code refactoring. As it is simply a typed superset of JavaScript it compliles to just plain Javascript,
                and can be added quickly and painlessly.
            </p>

            <br />

            <pre>
                <code>
                    npm install -g create-react-app
                </code>
            </pre>
            <pre>
                <code>
                    npx create-react-app react-typescript-project --typescript
                </code>
            </pre>
            <pre>
                <code>
                    npm start
                </code>
            </pre>

            <p>
                Setting up React Router for use with Typescript only requires a few additional steps but provides
                you with the huge benefit of type safety with your Routes and parameters.
            </p>

            <br />

            <pre>
                <code>
                    npm install --save react-router-dom
                </code>
            </pre>
            <pre>
                <code>
                    npm install --save-dev @types/react-router-dom
                </code>
            </pre>

            <p>
                <a href="https://codesandbox.io/s/react-router-example-z3ori"><b>Here</b></a> is a basic example of React Router; as you can see, without any props being passed down we have just plain JavaScript.
                <br />
                <br />
                <a href="https://codesandbox.io/s/typed-react-router-example-em2o6"><b>Here</b></a> is an example using typed params.
                <br />
                <br />
            </p>

            <p>
                Unit testing is essential in any project. It ensures all your code is working, will immediately alert you to any breaking changes,
                and will serve as living documentation.
    
                For this project I used <a href="https://github.com/alsatian-test/alsatian"><b>Alsatian</b></a>; a unit testing framework written in and fully supporting Typescript.
    
                To start testing, I used the following setup:
    
            </p>

            <br />

            {unitTestCode()}

            <p>With that saved, the test can be ran as follows:</p>

            <br />

            <pre>
                <code>
                    alsatian ./src/*.test.*
                </code>
            </pre>

            <p>Which gives the test results:</p>

            <br />

            {unitTestResult()}

            <p>
                Also worth mentioning is my CSS Framework of choice, <a href="https://react.semantic-ui.com/"><b>React Semantic UI </b></a>
                - and <a href="https://github.com/axios/axios/"><b>Axios</b></a>, which I used to handle my API requests.
            </p>
            
            <p>
                In this post I aim to just give a brief look at some of the choices I made when setting up my project, and to give some basic examples.
                I will take a look at Unit Testing with builders and using React Router with Typescript in my next posts.
    
            </p>

            <br />
            
        </BlogPost>
    </OuterLayout>
)

export default BlogPost1

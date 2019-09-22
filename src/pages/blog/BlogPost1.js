import React from "react"
import { Link } from "gatsby"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import OuterLayout from "../../components/OuterLayout"
import SEO from "../../components/SEO"
import InnerLayout from "../../components/InnerLayout";
import Title from "../../components/Title";

import { blogTitleStyle } from './index'

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
        <Title titleStyle={blogTitleStyle}>
                <h1>Dota API Project</h1>
                <div style={{ padding: "0px 0 40px 0", fontStyle: "italic", fontSize: "18px" }}>
                    React, Typescript, React Semantic UI, Alsatian, Axios
                </div>
            </Title>
        <InnerLayout>
            <SEO title="React Dota API Project" />

            <div>
                <div style={{
                        padding: "20px 0 40px 0",
                        fontSize: "25px",
                        textAlign: "center"
                }}>
                    <a href="https://stupefied-knuth-2bd1f1.netlify.com/"><b>VIEW DEMO</b></a>
                </div>
                {/* <img
                    alt=""
                    style={{ margin: 0, fontStyle: "italic", fontSize: "18px" }}
                    src="https://via.placeholder.com/960x500"
                /> */}
                <div style={{
                    fontStyle: "italic",
                    fontSize: "18px",
                    textAlign: "center"
                }}>
                    App description
            </div>
            </div>

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
            <pre style={{ background: '#404040', color: '#fff' }}>
                <code>
                    npm install -g create-react-app
            </code>
            </pre>
            <pre style={{ background: '#404040', color: '#fff' }}>
                <code>
                    npx create-react-app react-typescript-project --typescript
            </code>
            </pre>
            <pre style={{ background: '#404040', color: '#fff' }}>
                <code>
                    npm start
            </code>
            </pre>
            <p>
                Setting up React Router for use with Typescript only requires a few additional steps but provides
                you with the huge benefit of type safety with your Routes and parameters.
    
    
        </p>
            <pre style={{ background: '#404040', color: '#fff' }}>
                <code>
                    npm install --save react-router-dom
                </code>
            </pre>
            <pre style={{ background: '#404040', color: '#fff' }}>
                <code>
                    npm install --save-dev @types/react-router-dom
            </code>
            </pre>

            <a href="https://codesandbox.io/s/react-router-example-z3ori"><b>Here</b></a> is a basic example of React Router; as you can see, without any props being passed down we have just plain JavaScript.
        <br /><br />
            <a href="https://codesandbox.io/s/typed-react-router-example-em2o6"><b>Here</b></a> is an example using typed params.
        <br /><br />
            <p>
                Unit testing is essential in any project. It ensures all your code is working, will immediately alert you to any breaking changes,
                and will serve as living documentation.
    
            For this project I used <Link to="#"><b>Alsatian</b></Link>; a unit testing framework written in and fully supporting Typescript.
    
                To start testing, I used the following setup:
    
        </p>
            {unitTestCode()}
            <p>With that saved, the test can be ran as follows:</p>
            <pre style={{ background: '#404040', color: '#fff' }}>
                <code>
                    alsatian ./src/*.test.*
            </code>
            </pre>
            <p>Which gives the test results:</p>
            {unitTestResult()}
            <p>
                Also worth mentioning is my CSS Framework of choice, <a href="https://react.semantic-ui.com/"><b>React Semantic UI </b></a>
                - and <a href="https://github.com/axios/axios/"><b>Axios</b></a>, which I used to handle my API requests.
        </p>
            <p>
                In this post I aim to just give a brief look at some of the choices I made when setting up my project, and to give some basic examples.
                I will take a look at Unit Testing with builders and using React Router with Typescript in my next posts.
    
            </p>
            <br /><br />

            <Link to="/">Go back to the homepage</Link>
        </InnerLayout>
    </OuterLayout>
)

export default BlogPost1

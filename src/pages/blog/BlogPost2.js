import React from "react"
import { Link } from "gatsby"
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

// const UnitTestCode = () => {
//     const codeString = `
//     import { Expect, Test, TestFixture } from 'alsatian';

//     @TestFixture('Example Test Fixture')
//     export class ExampleTestFixture {

//         @Test('1 + 1 result')
//         public doesPass() {
//             Expect(1 + 1).toBe(2);
//         }

//         @Test('2 + 2 result')
//         public doesFail() {
//             Expect(2 + 2).toBe(5);
//         }
//     };
//     `;
//     return (
//         <SyntaxHighlighter language="javascript" style={monokai}>
//             {codeString}
//         </SyntaxHighlighter>
//     );
// };

// const unitTestResult = () => {
//     const codeString = `
//     alsatian "./src/*.test.*"

//     FAIL: App component tests > 2 + 2 result
//     Expected 4 to be 5.

//     expected: 5
//     actual: 4

//     Pass: 1 / 2
//     Fail: 1 / 2
//     Ignore: 0 / 4
//     `;
//     return (
//         <SyntaxHighlighter language="javascript" style={monokai}>
//             {codeString}
//         </SyntaxHighlighter>
//     );
// }

const BlogPost1 = () => (
    <Layout>
        <SEO title="React Dota API Project" />

        <div className="blog-description">
            
        </div>

        <p>
            
        </p>

        <br /><br />

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default BlogPost1

import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import OuterLayout from "../../components/OuterLayout"
import SEO from "../../components/SEO"
import BlogPost from "../../components/BlogPost";

const addToAddJs = () => {
    const codeString = `
    var GPIO_PinsRouter = require('./routes/pins');
    .
    .
    .
    app.use('/GPIO_Pins', GPIO_PinsRouter);
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const GPIO_Pins = () => {
    const codeString = `
    var express = require('express');
    var router = express.Router();
    
    router.get('/on/:pin', function (req, res) {
        gpioPin = req.params.pin;
        gpio.close(gpioPin);
        gpio.open(gpioPin, "output", function (err) {
            gpio.write(gpioPin, 1, function () {
                console.log('Pin ' + gpioPin + ' is now HIGH.');
                res.sendStatus(200);
            });
        });
    });
    
    router.get('/off/:pin', function (req, res) {
        gpioPin = req.params.pin;
        gpio.close(gpioPin);
        gpio.open(gpioPin, "output", function (err) {
            gpio.write(gpioPin, 0, function () {
                console.log('Pin ' + gpioPin + ' is now LOW.');
                res.sendStatus(200);
            });
        });
    });
    
    module.exports = router;
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const React_App = () => {
    const codeString = `

    import React from 'react';
    import './App.css';
    
    class App extends React.Component {
    
        handleClickOn() {
            fetch('/pins/on/7/')
        }
    
        handleClickOff() {
            fetch('/pins/off/7/')
        }
    
        render() {
            return ( 
                <div className = "App">
                    <h1> Toggle On/Off </h1>
                    <button onClick={this.handleClickOn}>
                        ON
                    </button>
                    <button onClick={this.handleClickOff}>
                    OFF
                    </button>
                </div>
            );
        }
    }
    
    export default App;
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};


const BlogPost3 = () => (
    <OuterLayout>
        <BlogPost Title="Using Raspberry Pi with React" Description="A simple guide on how to the Raspberry PI GPIO Pins with React via a Node/Express backend.">
            <SEO title="Raspberry Pi and React full-stack" />

            <p>
                For this project I used a Raspberry Pi 3 Model B and a clean install of Raspbian (4.19).
            </p>
            <p>
                You'll need your Pi hooked up to a monitor with a keyboard/mouse and an active internet connection.
            </p>
            <p>
                So firstly, install latest version of node on to your Pi. The Pi is equipped with an ARM CPU; all three of which are officially supported by Node and can be found on their <a href="https://nodejs.org/en/download/">download page. </a>
                Just type
            </p>
            <pre>
                <code>
                    uname -m
                </code>
            </pre>
            <p>
                to determine which type you have - instead of downloading directly, right-click the link and <i>Copy link address</i>. Use the link down <i>wget</i> the .tar.xz. If
                you have for example an ARMv7, type
            </p>
            <pre>
                <code>
                    wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-armv7l.tar.xz
                </code>
            </pre>
            <p>
                Extract
            </p>
            <pre>
                <code>
                    sudo apt-get install xz-utils
                    <br /><br />
                    tar -xf node-v10.16.3-linux-armv7l.tar.xz
                </code>
            </pre>
            <p>
                Copy Node to /usr/local
            </p>
            <pre>
                <code>
                    cd node-v10.16.3-linux-armv7l.tar.xz
                    <br /><br />
                    sudo cp -R * /usr/local/
                </code>
            </pre>
            <p>
                Then just check the versions.
            </p>
            <pre>
                <code>
                    node -v
                    <br /><br />
                    npm -v
                    <br /><br />
                    cd ..
                </code>
            </pre>
            <p>
                To keep the project as simple as possible for now, we'll be using <i>express-generator</i> and <i>create-react-app</i>.
            </p>
            <pre>
                <code>
                    sudo npm install -g express-generator
                    <br /><br />
                    express react-pi-express-stack
                    <br /><br />
                    cd react-pi-express-stack
                    <br /><br />
                    npm install
                    <br /><br />
                    npx create-react-app client
                    <br />
                </code>
            </pre>
            <p>
                Before running them both, go to the <i>routes</i> folder in the project directory and rename <i>users.js</i> to <i>GPIO_Pins.js</i> and paste in the following
            </p>
            <p>
                {GPIO_Pins()}
            </p>
            <p>
                Then just add these two lines to your <i>app.js</i>
            </p>
            <p>
                {addToAddJs()}
            </p>
            <p>
                In the <i>client</i> folder open up App.js and change that too.
            </p>
            <p>
                {React_App()}
            </p>
            <p>
                Finally we just need to change the permissions in Raspbian and install a package so that we can access the GPIO pins. From anywhere outside of your project directory 
                
            </p>
            <pre>
                <code>
                    git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
                    <br /><br />
                    cd quick2wire-gpio-admin
                    <br /><br />
                    make
                    <br /><br />
                    sudo make install
                    <br /><br />
                    sudo adduser $USER gpio
                </code>
            </pre>
            <p>
                Go back to your project direction and add
            </p>
            <pre>
                <code>
                    npm install pi-gpio
                </code>
            </pre>
            <p>
                And that it! You can now access your Raspberry Pi's GPIO pins with an API request through React.
                Simply run <samp>npm start</samp> 
                from your <i>client</i> directory and <samp>PORT=3005 npm start</samp> from your project root.
            </p>

        </BlogPost>
    </OuterLayout>
)

export default BlogPost3
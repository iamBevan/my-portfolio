import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import OuterLayout from "../../components/OuterLayout"
import SEO from "../../components/SEO"
import BlogPost from "../../components/BlogPost";

const userAddressClasses = () => {
    const codeString = `
    class Address {
        constructor(postCode, houseNumber) {
            this.houseNumber = houseNumber
            this.postCode = postCode

        }
    }
    
    class Person {
        constructor(name, age, phone, address) {
            this.name = name
            this.age = age
            this.phone = phone
            this.address = address
        }
    }
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const creatingPersons = () => {
    const codeString = `
    const person1 = new Person('Bill')
    const person2 = new Person('Barry', new Address('1', 'Main Street'))
    const person3 = new Person('Kevin', undefined, undefined, new Address('2', 'Main Street'))

    console.log(person1, person2, person3);
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const personBuilder = () => {
    const codeString = `
    class PersonBuilder {
        constructor(name) {
              this.person = new Person(name)
        }
        
        setAge(age) {
            this.person.age = age
            return this
        }
        
        setPhone(phone) {
            this.person.phone = phone
            return this
        }
        
        setAddress(address) {
            this.person.address = address
            return this
        }
        
        build() {
                return this.person
        }
      }
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const createPerson4 = () => {
    const codeString = `
    let person4 = new PersonBuilder('Steve')
        .setAge(20)
        .setPhone('+44 1234567890')
        .setAddress(new Address('3', 'Main Street'))
        .build()

    console.log(person4)
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};
const playerBuilder = () => {
    const codeString = `
    export class PlayerBuilder {
        private personaname: string;
        private kills: number;
        private deaths: number;
        private assists: number;
        private gold_per_min: number;
        private xp_per_min: number;
        private total_gold: number;
        private gold_spent: number;
        private hero_damage: number;
        private tower_damage: number;
    
        constructor() {
            this.personaname = '';
            this.kills = 0;
            this.deaths = 0;
            .
            .
            .

        }
    
        public withPersonaName(name: string) {
            this.personaname = name;
            return this;
        }
    
        public withKills(newKills: number) {
            this.kills = newKills;
            return this;
        }
    
        public withDeaths(newDeaths: number) {
            this.deaths = newDeaths;
            return this;
        }
        .
        .
        .
    
        public build(): Players {
            return {
                personaname: this.personaname,
                kills: this.kills,
                deaths: this.deaths,
                .
                .
                .
            }
        }
    }
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const builderTests = () => {
    const codeString = `
    const player1 = new PlayerBuilder()
        .withKills(5)
        .withDeaths(1)
        .withAssists(1)
        .build();
    const player2 = new PlayerBuilder()
        .withKills(14)
        .withDeaths(3)
        .withAssists(7)
        .build();
 
    @TestFixture('KDA Tests')
    export class KDATESTS {
    
        @TestCase(player1, '6.00')
        @TestCase(player2, '7.00')
        public testKda(player: Players, expectedValue: string) {
            const kda = kdaCalc(player);
        
            Expect(kda).toBe(expectedValue);
        }
    }
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const BlogPost2 = () => (
    <OuterLayout>
        <BlogPost Title="Unit Testing with The Builder" Description="A quick look at The Builder Pattern and my implementation of it">
            <SEO title="Builder Pattern" />

            <p>
                The builder is a flexible design pattern that allows you to build complex objects in a step-by-step way. By separating the construction of an object from it's representation,
                the pattern allows you to build different types and representations of an object whilst using the same construction code.
            </p>

            <p>
                For example, take the following two classes, <samp>Person</samp> and <samp>Address</samp>.
            </p>

            <br />

            {userAddressClasses()}

            <p>
                It would typically be very difficult to create multiple objects with varying levels of data - especially considering that <samp>Person</samp> will need to use <samp>Address</samp>, and both could be way more complex than they currently are.
            </p>

            <p>
                As can be seen below, the construction code has to be known in order to correctly populate the <samp>Person</samp> object. Otherwise it will quickly become a headache with undefined values everywhere.
            </p>

            <br />

            {creatingPersons()}

            <pre>
                <code>
                    {`>> Person {name: "Bill", age: undefined, phone: undefined, address: undefined}`}
                <br />
                    {`>> Person {name: "Barry", age: Address, phone: undefined, address: undefined}`}
                <br />
                    {`>> Person {name: "Kevin", age: undefined, phone: undefined, address: Address}`}
                </code>
            </pre>

            <p>
                Instead we can write a <samp>PersonBuilder</samp> class to handle all of this for us.
            </p>

            <br />

            {personBuilder()}
            
            <p>
                With a builder, we can call upon any or all of it's methods to start creating our new object; each one will return the builder and allow us to chain methods together.
                Finally the <samp>build()</samp> will return the Person object.
            </p>

            <p>
                As can be seen below, we can now create multiple objects very easily and efficiently; and we can also omit any of the values without giving undefined values - the builder will take care of that for us.
            </p>

            <br />

            {createPerson4()}

            <pre>
                <code>
                    {`>> Person {name: "Steve", age: 20, phone: "+44 1234567890", address: Address}`}
                </code>
            </pre>

            <br />
            <hr />
            <br />

            <p>
                The builder has been incredibly useful for me when running unit tests. In my ongoing DotA2 API project I have a lot of requests that are returning large objects. 
                Additionally, as I am using a RESTful approach I am getting all of the object returned instead of specific parts, like you can do with a GraphQL approach (which I am also exploring, for example my 
                portfolio is made in Gatsby).
            </p>

            <p>
                Below is an example of a builder handling part of a fetched player object in my ongoing DotA2 API project. Just as in the example above, there is actually a larger object received that contains a lot of parts I am not currently using.
                Testing multiple player objects would obviously be a massive chore and just wouldn't make sense. 
            </p>

            <br />

            {playerBuilder()}

            <p>
                All of the numbers will come from the same object in this case - for example a function that 
                calculates kill-death-assist ratio will also have that data being used by other functions; each of which will need their own tests.
            </p>

            <p>
                As you can see in the following piece of code, I can easily omit most of the object to run some very strict tests on a single function. I can also write new tests extremely efficiently.
            </p>

            <br />

            {builderTests()}

            <br />

        </BlogPost>
    </OuterLayout>
)

export default BlogPost2
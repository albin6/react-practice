import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => when we render this element to DOM => html element

// const heading = React.createElement('h1', { id: "heading" }, "Hello World")

// console.log(heading)

// above show how we create react element using core react

// ----------------------------------------------------------------------------

// below show how we create react element using jsx

// JSX - its not html in js => it is html or xml like syntax
// babel is a js compiler/ transpiler => it takes our jsx and convert it in to a code that js engine

const heading = <h1 id="heading">first jsx heading</h1>;

// jsx => React.createElement => Object => render on dom as html element
// use paranthesis to wrap multiline jsx

// class based component (old)
// functional based component (new)

// funcitonal based component is simply a function which returns a react element or a jsx code

// also we can written as

const SampleComponent = () => (
    <span> SampleComponent h3</span>
)

const elem = <span>Another React element</span>;

// one react element inside another react element
const title = (
  <h2>
    {elem} <SampleComponent />
    This is a React element
  </h2>
);

const Title = () => <h1 className="title">This is title component</h1>;

// inserting expression inside jsx
const number = 1000;

// suppose that we get a result from an api call and the api is a bad api
const result = "apiCalling()" // even if the api is returning some malicious data jsx will escapes from it
// it will be execuited in the brower through our code (XSS) but JSX is take care of that

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {/* we can also write it like this. Both are same*/}
    <Title></Title>
    {/* and also we can call the Title from here. Because its a function at the end of the day */}
    {Title()}
    <h2>{result}</h2> 
    {/* the browser wont blindly trust the data inside the curly braces. The jsx will sanitize the data */}
    <h3>{number}</h3>
    <h3>{100 + 200}</h3>
    {console.log("hello all")}
    {/* so we can also write a react element like this(title) */}
    {title}
    <h1>another funcitonal component</h1>
  </div>
);

// all code of jsx in the Title  component will be rendered over there inside the container

// both type of writting are completely valid

// we cannot render a react functional component directly like a react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // normal react element rendering
root.render(<HeadingComponent />); // functional component rendering

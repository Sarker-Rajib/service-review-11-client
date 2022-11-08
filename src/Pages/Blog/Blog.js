import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-4">
            <div className="bg-base-200 p-2">
                <h2 className='text-center text-3xl py-2 text-cyan-600'>Blog</h2>
                <div className="bg-cyan-200 p-2 rounded-xl mb-2">
                    <h1 className="text-1xl font-bold">Q1. What are the differences between SQL and NoSQL databases</h1>
                    <p className="py-2"><span className='text-green-600'>Ans:</span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. 5 most important diffrences are -</p>
                    <ul>
                        <li>- SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li>- SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>- SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>- SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>- SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </ul>
                </div>
                <div className="bg-cyan-200 p-2 rounded-xl mb-2">
                    <h1 className="text-1xl font-bold">Q2. What is JWT? how it works ? </h1>
                    <p className="py-2"><span className='text-green-600'>Ans: </span> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                        <br />
                        <br />
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.

                        <div className='flex py-2 justify-center'>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--paCGhFRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tppls6i2nbdqevr2nybr.png" alt="img" />
                        </div>
                        <ul>
                            <li> - User sign-in using username and password or google/facebook.</li>
                            <li> - Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                            <li> - User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                            <li> - Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                        </ul>
                    </p>
                </div>
                <div className="bg-cyan-200 p-2 rounded-xl mb-2">
                    <h1 className="text-1xl font-bold">Q3. What are the difference between node js and javascript ?</h1>
                    <p className="py-2"><span className='text-green-600'>Ans:</span>  </p>
                    <p><span className='text-1xl text-orange-500'>Node Js :</span> It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature. We can only run JS on browsers. The JS can easily add HTML and even play with the DOM. We can run JS in any browser engine, such as the Spidermonkey in the Firefox browser and the JS core in the Safari browser. It runs mainly on the client-side. Thus, it is used in the development of the front end. The Javascript is nothing but the ECMA script’s updated version that makes use of the Chrome V8 engine that is written in the C++ language.</p>
                    <br />
                    <p><span className='text-1xl text-orange-500'>Javascript :</span> It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well. NodeJS helps us run JS outside the browser as well. It lets us use JS on the server-side as well since it works on the server-side. The Node.JS, on the other hand, isn’t capable enough to add various HTML tags. Inside Node.JS, we have the JS engine known as V8. It helps in parsing and running the JS code. It runs on the server-side. Thus, it helps in the server-side development via the JS. Some very commonly used Node.JS modules are Express, Lodash, etc. All of these modules need to be imported from the npm. C, C++, and also Javascript are used for writing Node.JS.</p>
                </div>
                <div className="bg-cyan-200 p-2 rounded-xl">
                    <h1 className="text-1xl font-bold">Q4. How does NodeJs handle multiple requests at the same time ? </h1>
                    <p className="py-2"><span className='text-green-600'>Ans:</span>  NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
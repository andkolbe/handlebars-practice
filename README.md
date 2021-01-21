Handlebars is a templating engine used on the back end to generate HTML. 

Templating engines in nodejs can be used to split the nodejs application code from the frontend layout and the frontend elements can be used dynamically with the node application. Ex: if you click a button it can run a action from your node app.js

Templating engines are also used to split elements into multiple components like: footer, header, head, layout and more. So you don't need to rewrite those elements for other pages and that way your application can scale easily

In other words, a templating engine takes a bunch of static HTML files, fills them with the necessary data on the server side then sends them as any ordinary HTML file to the client

Can be used to generate Server side rendering (SSR) web apps

The front end framework Ember uses Handlebars as the templating engine

Handlebars takes a static template file you give it inside the layouts folder (index.hbs), this file contains some kind of placeholder {{{body}}} which will be filled with the contens of another .hbs file

The main.hbs contains the core of the HTML code we want to be rendered

Partials help to make the project more organized. They take a string path to a folder as a value, and this folder will contain small chunks of code that we can use in the body of our main.hbs, index.hbs or any other partial file (a partial nested inside another one). It’s the same idea of a component-based frameworks such as React.

Creating and reusing dynamic values is the main purpose of a templating engine

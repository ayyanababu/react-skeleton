a. First created a Root folder with Name "react-skeleton"
b. And same folder is created in github page.
c. And in laptop go inside react-skeleton folder and do git init and git remote add origin "github repository link" and click enter
d. create files using touch readme.md and git status, git add -A and git commit -m 'message'

//Creating Required folders for react
e. Inside react-skeleton project create a folder called public(folder)->index.html, this public folder is used for compiled jsx files.
f. And create src folder which holds actual code.
g. And go inside react-skeleton folder do npm init and give details , it will create package.json, this .json file is used
to download dependent tools for react which we are going to do.

//installing required plugins through package.json
h. sudo npm install -g browserify it will install browseify into project globally we can use in any projects.
i. npm install --save babelify , it will save in projects package.json file
j. npm install --save babel-preset-react , (used to compiile jsx to javascript)
k. npm isntall --save react
l. npm install --save react-dom
m. npm install --save watchify, to compile automatically source every time we save.


//creating remaing folder for react project
n. create components folder under src like src->components which is used for creating react components
o. And create a file with name main.jsx under src->main.jsx, its entry point of application which will call other react components,
and jsx means react code

//For testing upto this point
p. create a file under src->components->List.jsx & ListItem.jsx and write code and in main.jsx import react and reactdom and import list
q. in public folder where we have index.html create a div container and map to main.jsx
r. In public folder create js folder and under that create main.js public->js->main.js , this is actual running code , so we want to convert
jsx code in src to js code and put into public js folder.
s. So to do that go to package.json file under scripts write below code
"scripts": {
  "start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
t. go to terminal and do npm start it will start the script with name start nad open index.html page in browser
u.
v.
w.
x.
y.
z.

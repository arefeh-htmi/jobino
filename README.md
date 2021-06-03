# jobINO

This website is made using MERN-stack connects recruiters and jobseekers.
Jobseekers can make profiles and employers can post jobs, look for job seekers based on their experience, education, skills, and location.

<h2>Color Pallet </h2>
I've used <a href="https://colorhunt.co" >colorhunt</a> , <a href="https://www.color-hex.com" >color-hex</a> and <a href="https://colorhunt.co/palette/220041" >this</a> color pallet 

<br/>

- ![#120078](https://via.placeholder.com/15/120078/000000?text=+) `#120078`

- ![#9d0191](https://via.placeholder.com/15/9d0191/000000?text=+) `#9d0191`

- ![#fd3a69](https://via.placeholder.com/15/fd3a69/000000?text=+) `#fd3a69`

- ![#fecd1a](https://via.placeholder.com/15/fecd1a/000000?text=+) `#fecd1a`

<br/>

![home-page](home-page.png)
<br/>
<h2>Steps to run</h2>
<br/>
you should have node and npm installed.
<br/>
1.to install dependencies and dev-dependencies on server type "npm install" in your terminal
<br/>
2.to install client type "npm run frontend-install" in your terminal
<br/>
3.make a .env file with PORT, MONGO_URI, SECRET_KEY 
<br/>
4.to run both server and client type "npm run both" in your terminal

<br/>
<h2>Scripts</h2>

    "frontend-install": "npm install --prefix frontend",
    "start": "node server.js",
    "server": "nodemon server.js",
    "frontend": "npm start --prefix frontend",
    "both": "concurrently \"npm run server\" \"npm run frontend\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
    

<br/>
<h2>Dependencies </h2>
  <a href="https://www.npmjs.com/package/express">express</a>
   <br/>
  <a href="https://www.npmjs.com/package/mongoose">mongoose</a>
   <br/> 
    <a href="https://www.npmjs.com/package/moment">moment</a>
   <br/>
 <a href="https://www.npmjs.com/package/body-parser">body-parser</a>
    <br/>
   <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a>
   <br/>
   <a href="https://www.npmjs.com/package/passport">passport</a>
   <br/>
   <a href="https://www.npmjs.com/package/passport-jwt">passport-jwt</a> 
   <br/>
     <a href="https://www.npmjs.com/package/jwt-decode">jwt-decode</a>
   <br/> 
    <a href="https://www.npmjs.com/package/validator">validator</a>
       <br/>
      <a href="https://www.npmjs.com/package/concurrently">concurrently</a>
 <br/>
   <a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a>
   <br/>
   <a href="https://www.npmjs.com/package/classnames">classnames</a>
   <br/>
   <a href="https://www.npmjs.com/package/react">react</a>
   <br/> 
   <a href="https://www.npmjs.com/package/react-dom">react-dom</a>
   <br/>
   <a href="https://www.npmjs.com/package/react-redux">react-redux</a>
   <br/>
   <a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a>
   <br/>
  <a href="https://www.npmjs.com/package/react-scripts">react-scripts</a>
   <br/>
     <a href="https://www.npmjs.com/package/redux">redux</a>
   <br/>
     <a href="https://www.npmjs.com/package/redux-thunk">redux-thunk</a>
   <br/>
       <a href="https://www.npmjs.com/package/react-particles-js">react-particles-js</a>
   <br/>
     <a href="https://www.npmjs.com/package/react-moment">react-moment</a>
   <br/>


<br/>

<h2>dev-Dependencies </h2>

<a href="https://www.npmjs.com/package/nodemon">nodemon</a>
<br/>
<h2>Image and icon Sources </h2>
<a href="https://unsplash.com" >unsplash</a>
<br/>
<a href="https://icons8.com" >icons8</a>

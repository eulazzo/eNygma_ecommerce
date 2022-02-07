<h1 align="center">
   <img alt="sigma" src="github/eNygma.svg" width="150px" />
</h1>
  
<div align="center">
  <h1>Ecommerce Application with Register,Login, Add To Cart and Payment Method(Stripe) funcionality. </h1>
</div>

<p align="center" >
  <a href="#about-the-project-and-how-some-features-works"> About </a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
  <a href="#see-app-features">Gifs</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting started</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologies">Techs</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <a href="https://github.com/eulazzo" target="_blank">
    <img src="https://img.shields.io/static/v1?label=author&message=eulazzo&color=D90D32&labelColor=008080" alt="Github"> 
  </a>
    <img src="https://img.shields.io/github/stars/eulazzo/ecommerce?color=D90D32&labelColor=008080" alt="Stars">
  <img src="https://img.shields.io/github/last-commit/eulazzo/ecommerce?color=D90D32&labelColor=008080" alt="Commits">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=D90D32&labelColor=008080" alt="License">
</p>

 ![SIGMA CHAT GIF](github/loginAndRegister.gif)

# eNygma

<p>Ecommerce Application with Register,Login, Add To Cart and Payment Method(Stripe) funcionality. <br>
On the painel dasboard you can see some metrics, like last five users that make register, delete, edit and create new products<br>
<p>Developed with <code>ReactJS</code>, <code>NodeJs</code>,<code>Axios</code>,</br><code>Express</code>, <code>JWT</code>,<code>Mongoose</code>  and <code>Redux</code> </p> 

# About the project and how some features works:
<p>
Ecommerce developed with NodeJs, MongoDB, ReactJS, Styled Component, Redux, Stripe, JWT and Firebase to upload images. So far it has features such as login and registration, add to cart, make payment using Stripe, through the admin panel it is possible to edit and add new products, see the list of products and the number of users who have recently created an account.  
   To make the application more secure, JWT (JSON WEB TOKEN) was used to verify users, providing them a JSON WEB TOKEN after the login process.</br> 
   Thus, when they try to make any request, edit or delete any user or product, it is checked whether the request belongs to the user or  if the user is authorized to perform that action. Since when an application is created, one of the most important things to do is handle authentication and authorization.</br></br> For example, an application where users can create a post and after that they can edit or delete it. The crucial part here is authorization because they (users) should be able to delete only their respective posts, if they try to delete posts from other users they should get an error like “You can't delete this post” or something like that.  
   On the backend, if the login is ok, the JSON WEB TOKEN is created. In the creation process, jwt.sign() received the user ID and the “isAdmin” property as parameters, because when we try to delete a user, the ID inside the JSON WEB TOKEN is checked if it is the same as the one that comes from the database. data, if so, means that this user is a customer and therefore can delete and edit the profile. The isAdmin property, if isAdmin===true, can delete any user or do any CRUD for any other collection in the database.
<p/>

 ## See app features:

### Admin Dashboard

![SIGMA CHAT GIF](github/0-AdminDashboard.gif) 

### Paying some orders with Stripe Payment

![SIGMA CHAT GIF](github/3-payingStripe.gif) 

### Creating a new product

![SIGMA CHAT GIF](github/2-creatingAnewProduct.gif) 

 
## Getting started

1. Clone this repo using `git@github.com:eulazzo/ecommerce.git`
2. Move yourself to the appropriate directory: `cd ecommerce`<br />
3. Run `npm install` to install dependencies<br />

### Getting started with the frontend

1. Move yourself to the frontend folder: `cd client` <br>
2. Run `npm start` or `yarn start` to start the web application <br>
a window will open, but for the data show up, we have to start the back-end server

### Getting started with the backend server

1. Move yourself to the backend folder: `cd api`
2. Create a `.env` file and add the MongoDB url connection in MONGO_URL field
3. Now type yarn run dev, the server will start with nodemon<br>
4. if you dont have yarn installed, type <code> npm install --global yarn </code> on terminal to install it or just use npm instead <br>

### Getting started with Admin
1. Move yourself to the admin folder: `cd admin`
2. Type again <code>npm start</code> for the admin dashboard works properly <br>
3. now you are ready to create an account and login

## :rocket: Technologies

<table>
   
  <thead>
    <th>Back-end</th>
    <th>Front-end</th>
  </thead>
   
  <tbody>
    <tr>
      <td>Node.js</td>
      <td>ReactJS</td>
    </tr>
     <tr>
      <td>JWT</td>
      <td>Redux</td>
    </tr>
    <tr>
      <td>ExpressJs</td>
      <td>Styled Component</td>
    </tr>
    <tr>
      <td>Axios</td>
      <td>Axios</td>
    </tr>
    <tr>
      <td>Nodemon</td>
      <td>React Hooks</td>
    </tr>
    <tr>
      <td>Cors</td>
      <td>Eslint</td>
    </tr>
    <tr>
      <td>Prettier</td>
      <td>Prettier</td>
    </tr>
  </tbody>
  
</table>

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
<!-- <h4>Techs:</h4>

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

  -->

 

 
 


# Project plan

# Idea description

This delivery application is designed for those who value their time and hate traffic. At packngo we understand the hassle of busy streets and long queues. That’s why packngo is here to make your life easier by offering the most affordable and reliable delivery solutions.


# Data models

<img src="/plan/8BAB0917-C78B-41E0-955D-F82B92A6F319.jpeg" alt="Authentication">

<img src="/plan/DD6E6F14-70B4-4D3D-BA57-2A04F62861E2.jpeg" alt="Data Entity Fields">

# User stories

- As a user I want to sign up and login into my account.
- As a user I want to be able to add a new order. I should be able to add the address, contact number, order type, I want to tell if I want to receive the order or will send the order, and I want to be able to add notes.
- As a user, I want to see all the orders that I placed.
- As a user, I want the option to delete my order. 
- As a user, I want the option to edit my order.
- As a user I want to add a button that says the order is delivered.

# mock-ups

<img src="/plan/AE97A6B6-0023-49CB-BEBB-48378BF9BA1D.jpeg" alt="Landing page:">

<img src="/plan/CE469C5F-188E-4053-AA93-199E7DD07D16.jpeg" alt="sign up page:">

<img src="/plan/8880BC43-CDE1-4D8E-B3AF-AE9771862353.jpeg" alt="sign in page:">

<img src="/plan/61D7F383-41E7-4DBD-9132-2D96FF5F9173.jpeg" alt="sign in  confirmation:">

<img src="/plan/548CF372-237D-4874-9ECF-F4A2D0A15E94.jpeg" alt="view orders page:">

<img src="/plan/B85ADFD8-13AB-472E-ACEA-7AD7D1EAB031.jpeg" alt="add orders page:">

# Pushed code

Files
- [ ] Server.js
- [ ] Package.json
- [ ] Package-lock.json
- [ ] Gitignore
- [ ] .env
- [ ] CSS sheet
<li>Controller directory</li>
- [ ] Auth.js
* User information
- [ ] Orders.js
* Router.crud
Middleware directory
- [ ] Is-signed-in.js
- [ ] Pass-user-to-view.js
<li> Models directory </li>
- [ ] Order.js
* OrderSchema
- [ ] User.js
* userSchema
<li> Views directory </li>
- [ ] Index.ejs
* Landing page
<li> Inside the views directory create auth directory </li>
- [ ] Sign-in.ejs
- [ ] Sign-up.ejs
<li>Inside the views directory create orders directory</li>
- [ ] Edit.ejs
* Edit button in the view order page
- [ ] index.ejs
* All the user orders
- [ ] New.ejs
* Add a new order
- [ ] Show.ejs
* Ill make the order has been delivered button and delete button
<li>Inside the views directory create partials directory</li>
- [ ] _navbar.ejs

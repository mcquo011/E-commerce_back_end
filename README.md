
# E-Commerce Backend
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [Walkthrough Video]()

 ## Table of Contents 📑

  * [Description](#description)
  * [Dependencies](#dependencies)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [License](#license)
  * [Questions](#questions)

  ## Description 

  This is a CLI application that allows users to manage products, categories, and tags through a RESTful API. The API endpoints support CRUD (Create, Read, Update, Delete) operations for each resource.

  ## Dependencies  

  * npm i inquirer@8.2.4
  * MySql2
  * Dotenv
  * Sequelize

  ## Usage 

  To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using the command npm install.
3. Set up the MySQL database using the provided schema.sql file.
4. Seed the database using the command npm run seed.
5. Run the server using the command npm start.
6. Use Insomnia or any other API testing tool to interact with the API endpoints.

The following API endpoints are available:

Products
* GET /api/products - Returns all products.
* GET /api/products/:id - Returns a single product with the specified ID.
* POST /api/products - Creates a new product.
* PUT /api/products/:id - Updates an existing product with the specified ID.
* DELETE /api/products/:id - Deletes a product with the specified ID.

Categories
* GET /api/categories - Returns all categories.
* GET /api/categories/:id - Returns a single category with the specified ID.
* POST /api/categories - Creates a new category.
* PUT /api/categories/:id - Updates an existing category with the specified ID.
* DELETE /api/categories/:id - Deletes a category with the specified ID.

Tags
* GET /api/tags - Returns all tags.
* GET /api/tags/:id - Returns a single tag with the specified ID.
* POST /api/tags - Creates a new tag.
* PUT /api/tags/:id - Updates an existing tag with the specified ID.
* DELETE /api/tags/:id - Deletes a tag with the specified ID.

  ## Built with
* Node.js
* Express.js
* Sequelize ORM
* MySQL
* Insomnia (API testing tool)

  ## Screenshots

  ![Alt text](./images/Screen%20Shot%202023-03-15%20at%2011.09.54%20AM.png?raw=true "screenshot of routes")

  ![Alt text](./images/Screen%20Shot%202023-03-15%20at%2011.10.03%20AM.png?raw=true "screenshot of get route")

  ![Alt text](./images/Screen%20Shot%202023-03-15%20at%2011.10.10%20AM.png?raw=true "screenshot of get route")

  Wacth [walkthrough video]() to see the other routes

  ## Contributers 

  Maggie McQuown and starter code from UMN Bootcsmp

  ## License 
  
  Copyright (c)
  [MIT](https://opensource.org/licenses/MIT)

  ## Questions 

  You can visit my Github Profile here: [mcquo011](https://github.com/mcquo011/) 
  If you have any questions please email me at omcquown@gmail.com
  
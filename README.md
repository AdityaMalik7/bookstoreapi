# Bookstore API

Basically this is a basic restful api created using node and express js , it performs the CRUD operations , the instructions is provided below.

## Table of Contents

 [API Endpoints]
   - [GET /api/books]
   - [POST /api/books]
   - [PUT /api/books/:isbn]
   - [DELETE /api/books/:isbn]


## Installation

To get started with the API, you'll need to clone the repository and install the necessary dependencies.
also make sure you have node already installed , you check the version of node by this "node --version".

npm install express

## GET
- GET : in postman change the request to get for seeing all the data.
- GET: "/api/books"
- GET book by ISBN : "/api/books/:isbn"
  for example: /api/books/1

## POST
-POST: in postman change the request to post for creating the data
- POST : "/api/books"
  now to post the data  use postman , and there you can put the data in object format.
- Sample body:
 { "title": "Book Title", "author": "Author Name", "isbn": number, "publishedDate": "YYYY-MM-DD", "price": number }
  
 ## PUT 
  This can be done by isbn only.
  - PUT : in postman change the request to put for updating the data.
  - PUT : '/api/books/:1', then again you can update this data in postman just make sure which id you're passing there and if the given id doesn't exist it gonna give you the 404 error.
  - sample request body: { "title": "Updated Title", "author": "Updated Author", "publishedDate": "YYYY-MM-DD", "price": number }

## DELETE
- now to delete simple call the book by isbn no. and it gonna remove it from the object.
- Simply put a delete request in postman and then use this "/api/books/1", it gonna delete the book by isbn 1.

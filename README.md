# BE-Products
1. run nmp i in CLI
2. rum npm start in CLI
3. there are two APIs on BE
4.  + GET: http://localhost:3000/products  (for fetching products from JSON)
5.  + POST: http://localhost:3000/api/purchase  (for purchase products and add it to purchases.
JSON file)
6.  + GET: http://localhost:3000/product?name=shoe  (for fetching products based on query param of name.)  // currently this feature is not added in Front End, but this api can be checked from postman by passing req.query.name

Note: while running Frontend app, make sure, the  this Backend Server is running.
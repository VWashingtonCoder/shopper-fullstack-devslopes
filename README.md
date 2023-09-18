# Shopper - Full-Stack E-Commerce App
You are going to build a full-stack project. This is a critical portfolio piece that will help you land your first freelance projects and ultimately a full-time job.

"Shopper" is a full-stack application that is similar to Amazon.com.

## 📣 Getting Started
You can use the interface and code you created in the Code Commerce app or you can build this all from scratch.

## 🛠 Requirements
### Front-end
- Build a homepage that shows product images, titles, and prices
- Each item should have an Add to Cart button
- There should be a navigation bar with a cart icon
- The cart icon should update based on how many items are in it (ie 3, 5, 10)
- Menu item for Login/Signup
- User can sign up and log in
- Each item should have a details page that has an Image, Title, Description, and Price. A user can add to the cart as well as change the quantity.

### Back-end
For the backend, you will use the open-source Node API CommerceJS

Get started HERE (Follow the 3 steps in Account Setup)
From your Dashboard you will need to:
    1. Create 5 different product categories
    2. Create 5 different products in each of those categories
Each product needs an image, title, description, quantity and price

**Note: You are using this pre-built back-end API to give your front-end the data you need. You will not need to write any backend code.

### Full-Stack
- You must get your front-end to "talk" to CommerceJS's API. This means fetching products, parsing the JSON, and displaying those items in the UI of the app.
- You CANNOT use their SDK or CDN. You must use a standard HTTP library such as Fetch or Axios and you must parse the JSON yourself. All HTTP request examples can be found in the documentation.
- Use Postman or a similar tool to test that your API calls are working.
- You will only need to fetch (GET request) data from CommerceJS to display the products in your website. You will not need to make any "POST", "UPDATE", "DELETE" requests.
- End result: A user should be able to use your front end just as they might use Amazon.com. i.e.:
    1. Display items
    2. Sort by category
    3. Product search
    4. Add items to cart
    5. Update cart item quantity
    6. Remove items from cart
    7. Proceed to checkout (price summary + your local tax zone rate).
    8. HTTP and UI error handling. (i.e. UI handling for: user entered quantity that exceeds quantity in DB. Products failed to load. Error adding item to cart, etc);

All API actions are found in the CommerceJS API documentation and the data is saved on the backend.


### 📝 Special Notes:
Please add a "test account" login credentials to README.md for grading
Files with sensitive data should always be added to .gitignore. If you are submitting a link to your projects GitHub repository, please include the file with your API KEYS along with your GitHub link within the same zipped folder so we can test and review your code.

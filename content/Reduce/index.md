---
title: "Array.reduce()"
cover: "https://unsplash.it/400/300/?random?BigTest"
category: "javascript"
date: "2018-08-17"
slug: "reduce"
tags:
    - javascript
    - array
---

# JavaScript's Array Reduce Method. When Would I Use That?

Insert leader text about post.

## What does Array.reduce() do?

### What the docs say:

> The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. - [view docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Ok... But what does that mean?

The `reduce()` method will execute a callback for every item in your array much like `map()`, for example. The `map()` and `reduce()` functions both expect you to return something as it iterates over each item in your array. However, the first argument of the `reduce()` callback function contains whatever you returned on the previous callback.

## When would I use Array.reduce()?

There are countless use-cases for `reduce()`, but I'll just go over a few common scenarios you might come across.

### 🛒 Totaling up a shopping cart

It's time to let your user know how much they owe you! Lets total up all the items in their shopping cart.

```javascript
// Our shopping cart array of javascript objects containing a 'price' field
const cart = [
  { id: 1, price: 8.99, name: "Coffee Mug" },
  { id: 2, price: 10.99, name: "8x10 Picture" },
  { id: 3, price: 15.99, name: "T-Shirt" }
];

// The callback function is invoked three (3) times matching the size of our cart array
// The first argument 'previous' will start out at 0
const total = cart.reduce((previous, current) => {
  return previous + current.price;
}, 0);

// As reduce() iterates over our array it sees the following:
// 1st item return value: 0 + 8.99 (8.99)
// 2nd item return value: 8.99 + 10.99 (19.98)
// 3rd item return value: 19.98 + 15.99 (35.97)

console.log(total); // 35.97
```

### ✏️ Concatenating strings

Using our shopping cart data from the previous examples lets create a comma separated string containing all the product names.

```javascript
// The first argument 'previous' will start out as an empty string
const productsInCart = cart
  .reduce((previous, current) => {
    return previous + current.name + ",";
  }, "")
  .slice(0, -1); // Trim off the trailing comma

console.log(productsInCart); // "Coffee Mug,8x10 Picture,T-Shirt"
```

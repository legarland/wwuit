---
title: "Array.reduce()"
cover: "https://unsplash.it/1000/300/?random?BigTest"
category: "javascript"
date: "2018-08-17"
draft: false
tech: "js"
collection: 'javascript-arrays'
slug: "reduce"
tags:
  - javascript
  - array
---

# Array.reduce(). When Would I Use That?

While not as commonly used as other JavaScript array methods, `reduce()` is a performant solution to a few common scenarios.

## What does Array.reduce() do?

### What the docs say:

> The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. - [view docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Ok... But what does that mean?

The `reduce()` method will execute a callback for every item in your array much like `Array.map()`. The `map()` and `reduce()` methods both expect you to return something as it iterates over each item in your array. However, the first argument of the `reduce()` callback function contains whatever you returned on the previous callback.

## When would I use Array.reduce()?

There are countless use-cases for `reduce()`, but I'll just go over a few common scenarios you might come across.

1.  [Totaling up a shopping cart](#shoppingCart)
2.  [Concatenating strings](#stringConcat)
3.  [Getting a word count](#wordCount)

<a name="shoppingCart"></a>

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
const total = cart.reduce(
  // The first argument of the reduce method is the callback function
  (previous, current) => {
    return previous + current.price;
  },
  // The second argument of the reduce method is the initial value
  0
);

// As reduce() iterates over our array it sees the following:
// 1st item return value: 0 + 8.99 (8.99)
// 2nd item return value: 8.99 + 10.99 (19.98)
// 3rd item return value: 19.98 + 15.99 (35.97)

console.log(total); // 35.97
```

<a name="stringConcat"><a/>

### ✏️ Concatenating strings

Using our shopping cart data from the previous examples lets create a comma separated string containing all the product names.

```javascript
const cart = [
  { id: 1, price: 8.99, name: "Coffee Mug" },
  { id: 2, price: 10.99, name: "8x10 Picture" },
  { id: 3, price: 15.99, name: "T-Shirt" }
];

// The first argument 'previous' will start out as an empty string
const productsInCart = cart.reduce(
  (previous, current) => {
    return previous + current.name + ",";
  }, "")
  .slice(0, -1); // Trim off the trailing comma

console.log(productsInCart); // "Coffee Mug,8x10 Picture,T-Shirt"
```

<a name="wordCount"></a>

### ➕➕ Counting the occurrences of a word in a string

Let's say you have a large string that you've harvested from an API, user import or some webpage scraping you've done. Now, you want to count how often a certain word occurs in that string. You can do this with `reduce()`

```javascript
// The Preamble (concatenated for better readability)
const longString =
  "We the People of the United States, in Order to form a more perfect Union, " +
  "establish Justice, insure domestic Tranquility, provide for the common defense, " +
  "promote the general Welfare, and secure the Blessing of Liberty to ourselves and " +
  "our Posterity. Do ordain and establish this Constitution for the United States of America.";

// Split the string into an array of words
const wordArray = longString.split(" ");

// First, set the initial value to an empty object {}
// We can now store/update key-value pairs as we loop through the array.
// The key is the word and the value is the number of occurrences
// I've renamed the callback parameters to better describe what is happening
const wordCount = wordArray.reduce((wordCountObject, currentWord) => {
  // Increment the value by 1. If there is no value at the specified key then start with 0
  wordCountObject[currentWord] = (wordCountObject[currentWord] || 0) + 1;
  // Return our newly updated word count object
  return wordCountObject;
}, {});

console.log(wordCount); // {We: 1, the: 6, People: 1, of: 3, United: 2, …}
```

Wait! But I want to figure out which word occurred the most. Lets use reduce again!

```javascript
const most = Object.keys(wordCount).reduce((previous, current) => {
  const previousCount = wordCount[previous];
  const currentCount = wordCount[current];
  return currentCount > previousCount ? currentCount : previousCount;
});
```

### Side Notes

The `reduce()` method allows for two other arguments in the callback function. The third argument contains the current `index` of the iteration and the fourth contains the entire `array` that we are reducing. We wont go over these in this post but I encourage you dig in to [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and have a look at how these might be used.

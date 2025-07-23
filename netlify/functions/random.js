const quotes = require('../../quotes.json');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const params = event.queryStringParameters || {};
    const category = params.category;

    let availableCategories = Object.keys(quotes);
    let categoryQuotes;
    let selectedCategory;

    if (category) {
      // Check if the requested category exists (case-insensitive)
      const normalizedCategory = category.toLowerCase();
      const foundCategory = availableCategories.find(cat => cat.toLowerCase() === normalizedCategory);
      
      if (!foundCategory) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            error: "Invalid category. Available categories: " + availableCategories.join(", "),
            availableCategories: availableCategories
          })
        };
      }
      
      categoryQuotes = quotes[foundCategory];
      selectedCategory = foundCategory;
    } else {
      // Get random quote from all categories
      categoryQuotes = Object.values(quotes).flat();
      selectedCategory = "mixed";
    }

    if (!categoryQuotes || categoryQuotes.length === 0) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "No quotes available for the selected category"
        })
      };
    }

    // Select a random quote
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    const randomQuote = categoryQuotes[randomIndex];

    // Return the quote with category information
    const response = {
      quote: randomQuote.quote,
      author: randomQuote.author,
      category: selectedCategory
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    };

  } catch (error) {
    console.error('Error in random quote function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Internal server error",
        message: error.message
      })
    };
  }
};

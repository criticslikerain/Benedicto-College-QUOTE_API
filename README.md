# Benedicto College Quote API

A free JSON quote API built with Netlify Functions, featuring thousands of inspirational quotes across multiple educational categories.

## 🚀 Features

- **GET /random** — Returns a random quote from all categories
- **GET /random?category=motivation** — Returns a random quote from a specific category
- **Root route (/)** — Shows API documentation and live demo
- **5 Categories**: motivation, teachers, students, education, inspiration
- **CORS enabled** for browser usage
- **No API key required**


## Para Local Development

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   netlify dev
   ```

4. **Access the API**:
   - Homepage: `http://localhost:8888`
   - Random quote: `http://localhost:8888/.netlify/functions/random`
   - Category quote: `http://localhost:8888/.netlify/functions/random?category=motivation`



## 📄 API Response Format

```json
{
  "quote": "Teaching is the profession that creates all others.",
  "author": "Unknown",
  "category": "teachers"
}
```

## Available Categories

- **motivation** — Quotes to push you forward
- **teachers** — Wisdom about teaching and educators
- **students** — Learning and growth quotes
- **education** — The power of knowledge and learning
- **inspiration** — Life-changing thoughts and ideas

## Example Usage

### JavaScript/Fetch
```javascript
// kuha og random quote
const response = await fetch('https://your-site.netlify.app/.netlify/functions/random');
const quote = await response.json();

// kuha og motivation quote
const motivationResponse = await fetch('https://your-site.netlify.app/.netlify/functions/random?category=motivation');
const motivationQuote = await motivationResponse.json();
```

### cURL
```bash
# random quote
curl https://your-site.netlify.app/.netlify/functions/random

# category specific quote
curl "https://your-site.netlify.app/.netlify/functions/random?category=education"
```

## rror Handling

Invalid category requests return a 400 status:
```json
{
  "error": "Invalid category. Available categories: motivation, teachers, students, education, inspiration",
  "availableCategories": ["motivation", "teachers", "students", "education", "inspiration"]
}
```

## Adding More Quotes

To add more quotes, edit the `quotes.json` file:

```json
{
  "motivation": [
    { "quote": "Your new quote here", "author": "Author Name" }
  ]
}
```

## FYI Contributing

1. Fork the repository
2. Add your quotes to `quotes.json`
3. Test locally with `netlify dev`
4. Submit a pull request

##License

MIT License - feel free to use this API for any purpose!

## About

Built for Benedicto College to provide free access to educational and inspirational quotes. Perfect for educational apps, motivation tools, and learning platforms.

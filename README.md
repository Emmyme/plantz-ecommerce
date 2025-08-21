# 🌱 Plantz Shop

A demo plant e-commerce website built with Next.js and Express.js. This is a personal project for learning purposes - not a real online store.

## Features

- Browse plants by category (indoor/outdoor)
- Shopping cart functionality
- Product details with images
- Newsletter subscription
- Responsive design

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Material-UI
- **Backend**: Express.js, SQLite
- **Database**: SQLite with sample plant data

## Project Structure

```
plantz-shop/
├── frontend/          # Next.js app
├── backend/           # Express.js API
└── README.md
```

## API Endpoints

- `GET /all` - Get all products
- `GET /:category_id` - Get products by category
- `POST /subscribe` - Subscribe to newsletter

## Database

The app uses SQLite with sample plant data. The database is automatically created on first run.

## Images Setup

⚠️ **Note**: Demo images are not included in this repository.

### Required Images

Create the assets folder and add these images to `frontend/src/assets/`:

```bash
mkdir frontend/src/assets
```

**Required images:**
- `cart.svg` - Shopping cart icon
- `heroimg.png` - Hero section background  
- `indoor.png` - Indoor plants category
- `outdoor.png` - Outdoor plants category
- `page-decoration.png` - Decorative element
- `showall.png` - Show all category
- `succulent.png` - Succulent category

*Note: You can use any images you prefer. For free images, try [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com).*

### Product Images

For product images, place them in `frontend/public/productImg/` with these filenames:
- alocasia.png, alpinia.png, basil.png, begonia.png
- birdsnest.png, cactus.png, cactus2.png, callalily.png
- calluna.png, crocus.png, fiddle-leaf-fig.png, hyacinth.png
- impatiens.png, kalanchoe.png, laceflower.png, monstera.png
- orchid.png, peacelily.png, peperomia.png, petunia.png
- primrose.png, rose.png, saintpaulia.png, tulip.png, weepingfig.png
- 
**Alternative:** Use free images from [Unsplash](https://unsplash.com/) or [Pexels](https://pexels.com/)



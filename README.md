# Airchat

**Airchat** is a global chat platform where everyone can chat in real-time. It's built using Next.js and integrates with Redis for message storage and JWT for user authentication.

## Features

- **Global Chat:** Communicate with anyone across the globe.
- **Real-Time Messaging:** Instant updates powered by Redis.
- **JWT Authentication:** Secure user sessions with JSON Web Tokens.

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed (v17.x or later).
- **Redis:** A running Redis instance for storing messages.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/hrichiksite/airchat.git
   cd airchat
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env.local` file in the root of your project and add the following variables:

   ```bash
   REDIS_URL=your_redis_url
   JWT_SECRET=your_jwt_secret
   ```

   - `REDIS_URL`: The connection string for your Redis instance.
   - `JWT_SECRET`: A secret key for signing JSON Web Tokens.

### Running Locally

1. **Start the Development Server:**

   ```bash
   npm run dev
   ```

2. **Open Your Browser:**

   Navigate to `http://localhost:3000` to access Airchat.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate the necessary static files in the `.next` folder.

### Running in Production

After building, you can start the server in production mode:

```bash
npm start
```

### Troubleshooting

- **Redis Connection:** Make sure your Redis server is running and accessible via the `REDIS_URL` specified in your `.env.local`.
- **JWT Issues:** Ensure that the `JWT_SECRET` is correctly set and consistent across all environments.

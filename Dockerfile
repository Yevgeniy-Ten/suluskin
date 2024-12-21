# Build stage
FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn standalone

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy the necessary files from the build stage
COPY --from=build /app/.next/standalone ./

# Start the app using the Next.js server
CMD ["node", "server.js"]

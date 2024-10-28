## Full Stack Netflix Clone
A fully functional Netflix-inspired streaming platform built using modern web technologies. This project includes user authentication, video playback, and a beautiful, responsive UI.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Next.js
- **Backend**: Next.js API Routes, Prisma
- **Database**:: MongoDB
- **Authentication**: NextAuth + OAuth with Google and Github

## Features
- User Authentication with NextAuth
- Responsive UI built with Tailwind CSS
- User Profiles with personalized content
- Favorites and Watchlist functionality
- Highly Performant Next.js framework for SSR and fast loading
- Data Modeling with Prisma and MongoDB

## Prerequisites
Node.js (v14 or above)
MongoDB database instance

# Preview
<img src = https://github.com/user-attachments/assets/1a1e8dc4-25af-4351-bc61-923bdad16c77 >
<img src = https://github.com/user-attachments/assets/8aeaa32a-daf4-4f78-9d99-1301a40d5ad5 >
<img src = https://github.com/user-attachments/assets/46827cea-574b-49a7-800c-1cb5b7691fcd>

## Installation
1. git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
2. npm install
3. Inside the .env file populate these var
  - DATABASE_URL="your_mongodb_connection_string"
  - NEXTAUTH_SECRET="your_nextauth_secret"
  - NEXTAUTH_URL="http://localhost:3000"
  - GOOGLE_CLIENT_ID="your_google_client_id"
  - GOOGLE_CLIENT_SECRET="your_google_client_secret"
  - GITHUB_CLIENT_ID="your_github_client_id"
  - GITHUB_CLIENT_SECRET="your_github_client_secret"
4. npm run dev

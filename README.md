# TalkNow - A Minimalist Text-Based Social Media App

## Overview

TalkNow is a lightweight, text-only social media application that allows users to share posts, like, save, and manage their own content. The app is built using React and leverages localStorage and sessionStorage for state persistence.

## Features

- User authentication using session storage.
- Create, edit, and delete posts.
- Like and unlike posts.
- Save and unsave posts.
- Persistent storage using localStorage.
- Navigation between different post views ("For You", "Your Posts", and "Saved").

## Tech Stack

- **Frontend:** React, JavaScript
- **Styling:** CSS
- **Icons:** Lucide-react
- **Storage:** localStorage & sessionStorage

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/andeluw/talknow.git
   cd talknow
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

### 1. Logging In

- Users who are not logged in can browse existing posts but cannot create new posts or interact with them.  
- The login state is managed using `sessionStorage`.

### 2. Posting

- Users can add new posts which are stored in `localStorage`.
- Posts include the username, content, timestamp, likes, and saves.

### 3. Liking and Saving

- Users can like/unlike and save/unsave posts.
- Likes and saves are updated dynamically and stored in `localStorage`.

### 4. Filtering Posts

- Users can switch between "For You", "Your Posts", and "Saved".

## Deployment

You can access the web at [https://talknow-rpl.netlify.app/](https://talknow-rpl.netlify.app/).

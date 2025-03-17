# Netflix GPT Clone

A React-based web application mimicking the Netflix browsing experience, utilizing TMDB API for movie data and Groq API for AI-powered movie suggestions. Incorporates user authentication with Firebase and multi-language support.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Setup/Installation](#setupinstallation)
-   [Usage](#usage)
-   [Future Improvements/Roadmap](#future-improvementsroadmap)
-   [Author/Contact](#authorcontact)

## Features

### User Authentication

-   Secure Sign In/Sign Up functionality with Firebase.
-   Profile management (display name, profile picture).
-   Session management (sign out, redirection).

### Movie Browsing

-   Dynamic movie data retrieval from TMDB API.
-   Main movie display with trailer playback.
-   Categorized movie lists (Now Playing, Popular, Top Rated, Upcoming).
-   Responsive movie card design.

### AI-Powered Movie Suggestions (Netflix GPT)

-   GPT-like search functionality using Groq API.
-   AI-generated movie suggestions based on search queries.
-   Integration with TMDB API to fetch movie details for suggestions.

### Enhanced User Experience

-   Multi-language support.
-   Responsive design for various screen sizes.
-   Memoization for performance optimization.

## Technologies Used

-   React: [https://reactjs.org/](https://reactjs.org/)
-   Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
-   Firebase: [https://firebase.google.com/](https://firebase.google.com/)
-   Redux Toolkit: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
-   TMDB API: [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
-   Groq API: [https://groq.com/](https://groq.com/)

## Setup/Installation

1.  Clone the repository: `git clone [repository URL]`
2.  Navigate to the project directory: `cd netflix-gpt-clone`
3.  Install dependencies: `npm install`
    ```
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_TMDB_KEY=your_tmdb_api_key
    REACT_APP_GROQ_API_KEY=your_groq_api_key
    ```
4.  Run the application: `npm start`

## Usage

1.  **Sign Up/Sign In:** Create an account or log in with your existing credentials.
2.  **Browse Movies:** Explore movies in various categories (Now Playing, Popular, Top Rated, Upcoming).
3.  **Watch Trailers:** Enjoy movie trailers in the main display.
4.  **Use Netflix GPT:** Navigate to the GPT search page and enter your search query to receive AI-powered movie suggestions.
5.  **Multi-Language:** Select your preferred language from the available options.

## Future Improvements/Roadmap

-   Enhance the AI movie suggestion algorithm with more sophisticated prompts and context.
-   Implement user reviews and ratings.
-   Add user-specific movie recommendations.
-   Expand multi-language support.
-   Refine the responsiveness for a wider range of devices.

## Author/Contact
-   Email: [vipulgajbhiye23@gmail.com]

# Gamified Quiz App

## Overview
A web-based quiz app built with React and Redux, featuring gamification elements. It fetches quiz data from an API and provides an interactive experience with scoring and results.

## Features
- Start quiz with multiple-choice questions  
- Score calculation and result summary  
- Redux for state management  
- Gamification: points system, progress tracking  
- Responsive UI  

## Tech Stack
- React, Redux Toolkit  
- Tailwind CSS / Bootstrap  
- Fetch API / Axios  

## Installation
1. Clone the repo:  
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:  
   ```bash
   npm install  # or yarn install
   ```
3. Start the app:  
   ```bash
   npm start  # or yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000)  

## API Integration
- Fetches quiz data from [this API](https://api.jsonserve.com/Uw5CrX)  
- Includes error handling for smooth data retrieval  

## State Management (Redux)
- Redux Toolkit manages quiz state globally  
- Actions and reducers handle quiz flow and scoring  

## Project Structure
```
/src
   ├── components  # UI components
   ├── pages       # Quiz and Results pages
   ├── redux       # Store, slices
   ├── App.js      # Main logic
   ├── index.js    # Entry point
```

## Gamification
- Points system based on correct answers  
- Progress tracking for engagement  
- Smooth UI interactions  

## Screenshots & Demo
[link](https://drive.google.com/drive/folders/15nLcGZ5l4dO3HWKKT_RWWeAYQ32mxTkr?usp=drive_link)

## Contributing
Fork and submit a pull request for improvements!  

## License
MIT License

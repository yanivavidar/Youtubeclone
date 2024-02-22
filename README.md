# YOUTUBE_Clone

**YOUTUBE_clone** is a powerful and user-friendly web application that emulates some of the key features and functionalities of the popular video-sharing platform, Youtube . It includes basic features like video search , video playback and displaying a myriad of videos sorted by different categories.This project was implemented using various technologies / Libraries like React , Material-UI and Youtube-V3 API.

## Table of Contents

- [Features](#features)
- [TechStack](#techstack)
- [Screens](#screens)
- [Video_Demo](#video_demo)
- [Run_Locally](#run_locally)
- [Authors](#authors)
- [License](#license)

## Features

- User friendly interface for better user experience.
- Accessible through all kinds of devices (Tablets , desktop , phones etc).
- Enables users to search for specefic videos based on keywords, tags etc.
- Allows users to watch videos including features like play, pause and seek.
- Video playback page displays the video details including a set of related videos to watch
- Channel pages come with channel details and also a set of videos uploaded by them for the users to watch.
- Homepage sorts the videos in different categories including recommended videos , comedy , tutorials etc.

## TechStack

**Client:** React, Material-UI

**Third Party Services:** Youtube-v3 API , Vite.js , Rapid API

## Run_Locally

Clone the project

````bash
  $ git clone

Go to the project directory

```bash
  cd Youtube_Clone
````

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Create a **config.js** file in utils folder to hold your Rapid API key which will be used to fetch the videos using Youtube-V3 API.

## Authors

- [@yanivavidar](https://github.com/Yanivavidar)

## Notes

- **Hosting Services :** netlify
- **Youtube-V3 API DRL :** 500
- **Max Results :** 50 videos per API call ( Hard Limit )

## License

[MIT](https://choosealicense.com/licenses/mit/)

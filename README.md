# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Front End Code Challenge

In this code challenge, you'll build an Instagram-like small app called Sologram.
You must create a mobile-rst web app in React JS. The app allows users to browse a Home
Feed and Post a new image. The app must resemble the screenshots provided above as
close as you can:

Typefaces used in the images are: Oleo Script (for logo), Noto Sans JP for the content. Box
shadows around the screenshots are NOT part of the app.

## Features and constraints

This is a solo-mode Instagram (hence the name) where the user only views what the user
herself Posts; in other words, there are no other users (it's like a social network, but only for yourself)

The app has two tabs you'll implement: the "Main Feed" and the "New Post" tabs
The user must be able to Create new Posts, by copy-pasting an image URL and applying
CSS filters to such image.

Images in Posts are always shown in a 1:1 (square) aspect ratio, without distorting the
image, but simply cropping it when the original image has a rectangle aspect ratio.

Posts are stored in the device's localStorage

User can Like a Post by either: double tapping the image, or tapping on the heart icon

The app has what's known as an infinite scroll, that only loads 2 images at a time.

The app must run properly on an iPhone SE simulator on Google Chrome

## You MUST

- Use only basic React libraries (e.g. Redux, routers, etc.).
- Use Tailwind CSS or a low-level framework (e.g. Bass CSS, Tachyons, Funcssion)
- Invent your very own lters by using only the CSS filter property (contrast, grayscale,
  sepia, etc.). Get creative!

- Implement at least one CSS animation. Implement them wherever you think they make
  sense.

- Write a README.md le explaining how to run this project locally

- Upload the code to a Github private repository and share it with us (Github usernames
  will be provided together with this document)

- Deploy the app using either: Surge, Vercel or Netlify. Don't forget to share this URL with us.

## You must NOT

- Use heavily opinionated / big CSS libraries, like Bootstrap, Material Design, etc.
- Use any image processing libraries, or any other external libraries whatsoever
- Store the image les. Instead, simply use the images' URLs
- Implement a backend service that fetches or stores data.

## Bonus points

You'll get bonus points if you implement either of these:

- Styling for desktop screens
- i18n for English and Spanish (or any other language)

## We'll evaluate

The similarity of the UI to the screenshots provided (except for the images used as
example, of course)
The assumptions and interpretations you made for this test, as if this was a real-life request.
E.g.: design decisions, business logic decisions, data model decisions, UX decisions, etc.
That your code is clean, understandable and you DRY
That you've closely followed the instructions provided in this test overall

## Demo
https://react-sologram.netlify.app/
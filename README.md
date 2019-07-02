# Random User Technical Interview

This project is made for the technical interview for MAS Global Consulting

## Tech used

- Expo
- Expo Image Picker
- React native
- React
- React Navigation
- Native Base
- Redux
- React Redux
- Redux Thunk
- TypeScript
- React Native Debugger
- Prettier (code style)

## Explanation of code

In `App.tsx` we setup the router, store provider & theme.

In `src` the special folders are `theme`, `utils` & `store`, `theme` contains all related to the style of the app, `utils` contains a few utility functions, `store` contains everything related to Redux.

Every other folder in `src` represents a page, it means `home` & `user-detail` are actually the only pages of the app, but each is composed of a container (which extracts & updates data from/to store), and the view component (which handles most of the render structure & style, and bubbles up the events to the container).

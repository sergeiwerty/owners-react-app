# **React based application implementing dashboard**

###[View deployment](https://sergeiwerty.github.io/owners-react-app/)

## Description

This is a demo dashboard application with base functionality supporting adding of the new owners.

The objective of this project is to create a single page application with the ability to display the data from list of owners (from local state) and new owners (added to local storage).

## Implementation features

During the process of designing layout for this app Desktop First approach was chosen as responsive strategy.

Application adapts to the size of the screen no matter what the target device. Responsive uses CSS media queries to change styles based on the target device such as width and height.

Adding a new owner is done by filling out a form in a modal window. Submiting is possible only after passing the validation of these fields. When entering invalid data, a message about the corresponding error is displayed. After adding to the list, users are displayed 10 per page, which can be navigated using pagination.

The main navigation is implemented as a sidebar. To demonstrate the work, only the Overview page is implemented. In mobile verseion of the menu implemented CSS-animations.

## Development tools used

*React create app library (as integrated toolchain)
*React DOM package (provides DOM-specific methods)
*React Router package (for dynamic routing)
*React-Bootstrap (components)
*Bootstrap 4 (layouts, components, styles)
*Formik library (menaging forms)
\*Yup package (schema builder for form validation)

As for React, functional components and React Hooks (useState, useEffect, useState, ) were been used

Dashboard UI Designed by [Pierluigi Giglio](https://dribbble.com/pierluigigiglio)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##Extra

<p align="center">
   <a href="#">
    <img src="https://raw.githubusercontent.com/MikeCodesDotNET/ColoredBadges/4a38660afb7be89a6032218589b4454a1285c7f8/svg/dev/frameworks/react.svg" alt="react badge" style="vertical-align:top margin:6px 4px">
  </a>  
</p>

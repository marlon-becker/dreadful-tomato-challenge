> ℹ️ I created a new README because when I tried to push any change to the existing
> I got this error message Attempting to modify read only files: README.md

# Implementation details

## Typing
I used Typescript to ensure type safety and more secure development when working with response
of the api.

## Linter
To ensure code consistency I'm using **eslint** and **prettier**. I like a code style without ; because I think everything
looks cleaner and easier to read, I'm sure that people will disagree with this, but I've found after working sometime
this way no disadvantages and really enjoy it.

## Code structure
As for the code structure a used the _pod pattern_ so every part of the domain (components, tests, api request) is contained in their
own folder, this allows for higher cohesion and lower coupling.
Inside the pod folder there is a shared folder for components that are used by more than one of the other pods.

For doing abstractions and creating page templates and preferred not to abstract to soon (for example
with the movies and series components) and allow that each page could be composed independently. This is
something that maybe could be changed in some way because there is a lot of duplicated code
but, for now I think is better this way because I don't want to guess what could happen in the future.

## Styling
For CSS, I used CSS Modules that are already integrated with Create React App and this allows
the app to have more specific styles that will not affect other parts of the application.

I didn't use a lot of the carbon components because I did not get the customization of theme to work
correctly, and for some reason everytime I did a change in the file that includes the carbon styles (globals.sass)
it took a really long time to recompile the app, so I preferred to focus my time in other parts.

## Testing
I just did a small part of the testing that I would I done in a real application. For testing components
I used for the first time Testing Library, I'm more used to test with Enzyme but I dind't like the way
that we usually ended being very coupled to implementation and for a long time wanted to use this library
that is suppose to help avoiding this problem.

You can find the tests in the api, Home, Movies and Series pods and in the pagination component

# Usage
| Description        | command  |
--------------- | ------------- | 
Install dependencies | npm i |
Run app | npm start |
Linter | npm run test:lint |
Fix Linter Errors | npm run test:lint --fix |
Run tests | npm run tests |



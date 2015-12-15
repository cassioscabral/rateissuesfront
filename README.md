# Rate Issues frontend
Frontend made with React + Relay and all the goodies for the project [rateissues](https://github.com/cassioscabral/rateissues)

For matter of separation of concerns and responsability this front will be developed separated from the backend

I have a first [mockup](https://app.moqups.com/cassioscabral@gmail.com/X4e0gZ6L5B/view/page/ade98745f) ready that I made with the awesome online app [Moqups](https://moqups.com/).

My inspirations for this design was 9gag, S.O. and Spotify. Since I am not a designer or anything I tried to make it more functional than pretty right now, but for sure this will be **pretty** and **simple** =).

Screenshot below; Thanks to the [Moqups](https://moqups.com/) team for giving me a temporary upgrade in my account so I could export this image.

![alt tag](https://cloud.githubusercontent.com/assets/2073557/11826245/ed52b34c-a362-11e5-8467-cbdedda411ed.png)


### Prerequisites to integrate with the backend

An endpoint for a GraphQL server with an endpoint "/graphql"

### Workflow to build the app

Following the suggestions by the React Facebook site and their tutorial this workflow it seems all right with me and I add something to fit my necessities better.

  - Build mockup
  - Separate the components
  - Organize them in a hierarchy
  - Identify reusable components
  - Build skeletons components with some *"Hello World!"* in it
  - Write [tests](https://facebook.github.io/react/docs/test-utils.html) for interactions(events) and data checking
   - Run for red
   - Add some static data if necessary
   - Make it green
   - Repeat
  - Make it pretty with a nice amount of SASS(iness)
  - Add [Relay](https://facebook.github.io/relay/) layer with GraphQL, query and anything required by it
  - Adjust backend if necessary

### Some patterns, good practices and packages used on this project

  - SMACSS
  - Atomic design adapted, see [below](#atomic)
  - ES6 with [*BABEL*](https://github.com/babel/babel)
  - Editor Config
  - Name conventions suggested for JS and React
  - more should be add here




#### <a name="atomic"></a>Atomic design adapted

Since [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/) was made for pages and this is a SPA, although a great idea, I chose to use only the atomic(**atoms**) part of the project, the **molecules** and **organisms**. Since every part is a component from React the difference will be their name and folder the files are in it. The entire app(biggest component) would be my template and page in the Atomic design structure. So I won't define as such, it will be only App and it will be found on the root folder of components. Just for easy naming and simplicity.


### Components folder structure

Following the Atomic design structure it will have only 3 folders and one file.

  - atoms/
  - molecules/
  - organisms/
  - App.js

Inside each folder it should have one folder per component

  - my_component/ (in **snake_case**)

Inside the component folder it will have all the files related with that component

  - stylesheets
  - tests
  - docs if necessary(still looking for how to document better before making the rule)
  - the component itself

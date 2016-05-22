# Rate Issues frontend
Frontend web app made with React + Relay and all the goodies for the project [rateissues](https://github.com/cassioscabral/rateissues). **Name is just a placeholder, might change in the future**

# Goal
An application interely open-source, build to help people start to develop and contribute with open-source code and improve the workflow of core contributors. Using a different UI and a better UX than the one provided by Github.**Using Github API.**

## Main features
 * Classify, filter and rate issues to allow searches like "the easiests JS open issues"
 * Upvote or Downvote issues to rank them
 * Create templates for issue creations
 * Make the contributions more social and engaging to new developers

For matter of separation of concerns and responsability this front will be developed separated from the backend

I have a first [mockup](https://app.moqups.com/cassioscabral@gmail.com/X4e0gZ6L5B/view/page/ade98745f) ready that I made with the awesome online app [Moqups](https://moqups.com/).

My inspirations for this design was 9gag, S.O. and Spotify. Since I am not a designer or anything I tried to make it more functional than pretty right now, but for sure this will be **pretty** and **simple** =).

**New interface based on Atom:**

![new_interface](https://cloud.githubusercontent.com/assets/2073557/13088840/aab28d8c-d4cc-11e5-9199-6fe88b68f636.png)

-


Screenshot below; Thanks to the [Moqups](https://moqups.com/) team for giving me a temporary upgrade in my account so I could export this image.

![alt tag](https://cloud.githubusercontent.com/assets/2073557/11826245/ed52b34c-a362-11e5-8467-cbdedda411ed.png)

### Components organization

![alt tag](https://cloud.githubusercontent.com/assets/2073557/11989355/4cc6776e-a9da-11e5-8b97-1904c78a911f.png)


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
  - the component itself

To improve the development I used this Yeoman generator [atomic-reactor](https://github.com/cassioscabral/generator-atomic-reactor) that I built. It will give commands such as:

`yo atomic-reactor:atom my_component`


### Tools, packages and stuff used on this project

  - the react-webpack generator from Simon Bailey and its default packages
  - using google preset on Atom jscs linter
  - using Auth0 for authentication

### Some setup and stuff you should do to run the project

  - inside the `molecules/smart_links/` component folder you should add .js file with the name API_KEY.js for the Auth0 API and add a social plugin(on Auth0 website settings) with Github integration, inside the .js add a content like this:

  `module.exports = {API_KEY: 'myAuth0ApiKey'};`

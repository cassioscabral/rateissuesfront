# About this folder
This folder holds configuration files for different environments.

You can use it to provide your app with different settings based on the
current environment, e.g. to configure different API base urls depending on
whether your setup runs in dev mode or is built for distribution.
You can include the configuration into your code like this:

Unlike config.js, this configurations will be ignored by git.

```javascript
let react = require('react/addons');
// TODO: alias
let env = require('../../env');
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    let currentAppEnv = env.appEnv;
  }
}
```

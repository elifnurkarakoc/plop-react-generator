<p align="center">
    <h3 align="center"> PLOP REACT GENERATOR</h3>
</p>

### Built With

- [Plop](https://plopjs.com/)
- [ReactJS](https://reactjs.org/)
- [Enzyme](https://enzymejs.github.io/enzyme/)

### Installation

Clone the repo

```sh
git clone https://github.com/elifnurkarakoc/plop-react-generator.git
```

Install NPM packages

```sh
npm install
```

### Use

Create Component

```bash

npm run generate component componentName

```

Create Context API

```bash

npm run generate context-api contextName

```

After the Context API is created, you must add it to index.js.

Example:
```js
import { AuthProvider } from "./Contexts/AuthContext";

.
.
.

<AuthProvider>
  <App />
</AuthProvider>
```

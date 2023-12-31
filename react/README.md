# Job Search React

This side-project was based on a practice Vue project, I thought it would be a good idea to try and recreate it in React as I found out this might be a way for me to learn what's the difference between the two frameworks.

## Tech stack

- React.
- Styled-components.
- Vite

## Setup styled-components

Although I used Tailwindcss in Vue project, I decided to use styled-components in this project as I haven't used it for while, thought it would be a good idea to try it out again.

### DisplayName in Vite config

In order to debug when using devtools, we can setup **displayName** in styled-components, so that we can see the name of the component in devtools, and vite has to be configured to make it work.

First to install the following packages:

```bash
pnpm add babel-plugin-styled-components @vitejs/plugin-react
```

Then we need to add the following code in vite.config.js

```js
// vite.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
  },
})
```

For more reference, please check

- [Styled-components:Tooling](https://styled-components.com/docs/tooling#babel-plugin)
- [@vitejs/plugin-react ](https://www.npmjs.com/package/@vitejs/plugin-react)

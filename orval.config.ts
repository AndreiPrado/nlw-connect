import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'https://nlw-connect-nodejs-5rya.onrender.com/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'https://nlw-connect-nodejs-5rya.onrender.com',
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})

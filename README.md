# The LotrSDK

An sdk for the [The One API](https://the-one-api.dev/) which is a RESTful API based on the works of J.R.R. Tolkien.
The sdk is written in TypeScript and uses [Axios](https://axios-http.com/) for the http requests.

## Installation

Install the package via npm(or your favorite package manager)

```sh
npm i artur_dani-sdk

```

## Usage

You need to register [here](https://the-one-api.dev/) for an api key in order to use the sdk


This SDK is better used with TypeScript, but it can be used with JavaScript as well.

```ts

```typescript
import { LotrSdk } from 'artur_dani-sdk'

const apiKey = process.env.API_KEY
const client = new LotrSdk(apiKey)

const book = await client.books.getOneById('id')
// or 
const books = await client.books.list()

// you can get related resources
const chapters = await client.books.getChaptersByBookId('id')
```


## Tests

Test are made with jest and you can run them like:

```sh
yarn test
```

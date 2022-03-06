# @jeppevinkel/steam-search
[![npm (scoped)](https://img.shields.io/npm/v/@jeppevinkel/steam-search)](https://www.npmjs.com/package/@jeppevinkel/steam-search)

Api for searching games from the Steam store.
This search API works by calling the regular steam store page and scraping the results from the page. It doesn't yet support scrolling the page, so it might be limited in the number of results per search query.

## Installation
Use [npm] to install the package.

```bash
npm install @jeppevinkel/steam-search
```

## Usage
```typescript
import {SteamSearch, QueryBuilder, ResultType} from '@jeppevinkel/steam-search'

let query = QueryBuilder.create()
    .search('counter-strike')

SteamSearch.search(query).then((results) => {
    for (let result of results) {
        const type = result.type == ResultType.App ? 'App' : 'Bundle'
        console.log(`[${type}] (${result.appId}) ${result.title}`)
    }
})
```

## Docs

[https://jeppevinkel.github.io/steam-store-search](https://jeppevinkel.github.io/steam-store-search/)

## Contributing
Pull requests are welcome. For design changes, please open an issue to discuss what you would like to change.

## License
[MIT]

[npm]: https://www.npmjs.com
[MIT]: https://opensource.org/licenses/MIT
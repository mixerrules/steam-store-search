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
import { SteamSearch, QueryBuilder } from '@jeppevinkel/steam-search'

const steamSearch = new SteamSearch()
let query = QueryBuilder.create()
    .search('counter-strike')

steamSearch.search(query).then((results: ISearchResult[]) => {
    for (let result of results) {
        console.log(`(${result.appId}) ${result.name}`)
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
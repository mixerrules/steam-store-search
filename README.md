# @mixerrules/steam-store-search
(A modified fork of [@jeppevinkel/steam-store-search](https://github.com/jeppevinkel/steam-store-search))

Api for searching games from the Steam store.
This search API works by calling the regular steam store page and scraping the results from the page. It doesn't yet support scrolling the page, so it might be limited in the number of results per search query.

## Differences
The main Differences between [@jeppevinkel/steam-store-search](https://github.com/jeppevinkel/steam-store-search) and [@mixerrules/steam-store-search](https://github.com/mixerrules/steam-store-search) are as follows:
- This version is able to to look up NSFW games that are normally block by the default preferences for an unsigned in account.
- Rewrote major sections of SteamSearch.ts to use DOMParser & Element from deno_dom instead of using Cheerio & Axios.
- Fixed alot of other things little to allow for it to be used locally with Deno.

## Usage
```typescript
// Latest build from main branch
import {SteamSearch, QueryBuilder, ResultType} from "https://raw.githubusercontent.com.com/mixerrules/steam-store-search/src/index.ts"

// Latest build release hosted from denoland
import * as steamStoreSearch from "https://deno.land/x/steam_store_search@1.0.0/src/index.ts";


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
Note: The docs between these versions should be the same but might change in the future
[https://jeppevinkel.github.io/steam-store-search](https://jeppevinkel.github.io/steam-store-search/)

## Contributing
Pull requests are welcome. For design changes, please open an issue to discuss what you would like to change.

## License
[MIT]

[npm]: https://www.npmjs.com
[MIT]: https://opensource.org/licenses/MIT

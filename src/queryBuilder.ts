import {SortBy} from "./enums/sortBy"
import {MaxPrice} from "./enums/maxPrice"

/**
 * A class used to easily build a query string for the API.
 */
export class QueryBuilder {
    private static STEAM_SEARCH_URL: string = 'https://store.steampowered.com/search/'

    private _term: string
    private _sort: SortBy = SortBy.Relevance
    private _maxPrice: MaxPrice = MaxPrice.All

    private constructor(term: string) {
        this._term = term
    }

    /**
     * Creates a new QueryBuilder instance.
     * @param term The search term.
     */
    public static create(term: string|undefined): QueryBuilder {
        return new QueryBuilder(term ?? '')
    }

    /**
     * Sets the search term of the query.
     * @param term The search term.
     */
    public search(term: string): QueryBuilder {
        this._term = term
        return this
    }

    /**
     * Sets the sort order of the query.
     * @param sort The sort order.
     */
    public sortBy(sort: SortBy): QueryBuilder {
        this._sort = sort
        return this
    }

    /**
     * Sets the maximum price of the query.
     * @param maxPrice The maximum price.
     */
    public maxPrice(maxPrice: MaxPrice): QueryBuilder {
        this._maxPrice = maxPrice
        return this
    }

    /**
     * Assembles the query into a url with all the parameters set.
     * @return The search url with all the query parameters set.
     */
    public build(): string {
        return this.toString()
    }

    /**
     * Assembles the query into a url with all the parameters set.
     * @return The search url with all the query parameters set.
     */
    public toString(): string {
        let queryElements = new Array<string[]>(
            ['term', this._term],
            ['sort_by', this._sort],
            ['max_price', this._maxPrice],
        ).filter(x => x[1] !== '')

        if (queryElements.length === 0) {
            return QueryBuilder.STEAM_SEARCH_URL
        }

        const params = new URLSearchParams(queryElements)

        return `${QueryBuilder.STEAM_SEARCH_URL}?${params.toString()}`
    }
}
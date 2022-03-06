import {Moment} from 'moment'
import {ResultType} from "../enums/resultType";

export interface ISearchResult {
    /**
     * The type of the result.
     */
    type: ResultType
    /**
     * The title of the Steam app.
     */
    title: string
    /**
     * The app id of the search result
     */
    appId: number
    /**
     * The URL to the store page of the Steam app.
     */
    url: URL
    /**
     * The release date of the Steam app. If the date can't be parsed, the raw string is returned.
     */
    releaseDate: string|Moment
    /**
     * The review summary of the Steam app.
     */
    reviewSummary: string
}
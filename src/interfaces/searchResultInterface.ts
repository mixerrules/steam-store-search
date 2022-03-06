import {Moment} from 'moment'

export interface ISearchResult {
    title: string
    appId: number
    url: string
    releaseDate: string|Moment
    reviewSummary: string
}
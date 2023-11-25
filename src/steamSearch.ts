
import {QueryBuilder} from './queryBuilder.ts'
import {DOMParser, Element} from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";
import {ISearchResult} from './interfaces/searchResultInterface.ts'
import {ResultType} from "./enums/resultType.ts";
import moment from 'npm:moment';

export class SteamSearch {

    /**
     * Searches for games on Steam and returns a promise with the results.
     * @param query The query to search for
     */
    public static async search(query: QueryBuilder): Promise<ISearchResult[]> {
        const response = await fetch(query.build());
        const html = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const games = doc?.querySelectorAll('div#search_resultsRows a');

        //console.log(games)
        const results: ISearchResult[] = [];

        // @ts-ignore | This is because ts is having a stroke over something that doesnt matter and only shows the error in the IDE
        games?.forEach((el: Element, i: number) => {
            const releaseDate = el.querySelector('div.responsive_search_name_combined div.search_released')?.textContent ?? ''
            let momentDate: moment.Moment = moment(releaseDate, 'DD MMM, YYYY')
        
            if (moment(releaseDate, 'DD MMM, YYYY').isValid()) {
                // Do nothing
            } else if (moment(releaseDate, 'MMM DD, YYYY').isValid()) {
                momentDate = moment(releaseDate, 'MMM DD, YYYY')
            } else if (moment(releaseDate, 'YYYY').isValid()){
                momentDate = moment(releaseDate, 'YYYY')
            }
        
            const type = el.getAttribute('data-ds-appid') ? ResultType.App : ResultType.Bundle;
            const id = el.getAttribute('data-ds-appid') ?? el.getAttribute('data-ds-bundleid') ?? '-1';
        
            results[i] = {
                type: type,
                url: new URL(el.getAttribute('href') ?? ''),
                title: el.querySelector('div.responsive_search_name_combined div.search_name span.title')?.textContent ?? '',
                appId: parseInt(id),
                releaseDate: (momentDate.isValid() ? momentDate : releaseDate),
                reviewSummary: (el.querySelector('div.responsive_search_name_combined div.search_reviewscore span')?.getAttribute('data-tooltip-html') ?? '').replace('<br>', ', '),
            }
        })


        return results
    }
}
const assert = require('assert')
const {QueryBuilder, SteamSearch} = require('../lib')
const {SortBy} = require('../lib/enums/sortBy')
const {MaxPrice} = require('../lib/enums/maxPrice')

describe('QueryBuilder', function () {
    describe('#search()', function () {
        it('should return a search result array', function () {
            const query = new QueryBuilder()
                .search('counter-strike')
                .sortBy(SortBy.PriceAsc)
                .maxPrice(MaxPrice.Sixty)

            SteamSearch.search(query).then(results => {
                assert.ok(results.length > 0)
            })
        })

        it('should return results with the proper values', function () {
            const query = new QueryBuilder()
                .search('counter-strike')
                .sortBy(SortBy.PriceAsc)
                .maxPrice(MaxPrice.Sixty)

            SteamSearch.search(query).then(results => {
                results.each((i, result) => {
                    assert.isString(result.name)
                    assert.isString(result.url)
                    assert.isInteger(result.appId)
                    assert.notEqual(result.appId, -1)
                    assert.isString(result.reviewSummary)
                })
            })
        })
    })
})
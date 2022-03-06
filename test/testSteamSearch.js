const assert = require('assert')
const {QueryBuilder, SteamSearch} = require('../lib')
const {SortBy} = require('../lib/enums/sortBy')
const {MaxPrice} = require('../lib/enums/maxPrice')
const expect = require('chai').expect

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

        it('should return results with the proper values', async function () {
            const query = new QueryBuilder()
                .search('counter-strike')

            const results = await SteamSearch.search(query)
            results.forEach(result => {
                expect(result).to.have.all.keys('type', 'title', 'url', 'appId', 'reviewSummary', 'releaseDate')
                expect(result.type).to.be.a('number')
                expect(result.title).to.be.a('string')
                expect(result.url).to.be.a('URL')
                expect(result.appId).to.be.a('number')
                expect(result.reviewSummary).to.be.a('string')
                expect(result.releaseDate).to.not.be.null
                expect(result.appId).to.not.be.equals(-1, 'App ID is -1')
            })
        })
    })
})
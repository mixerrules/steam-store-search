const assert = require('assert')
const {QueryBuilder} = require('../lib')
const {SortBy} = require('../lib/enums/sortBy')
const {MaxPrice} = require('../lib/enums/maxPrice')

describe('QueryBuilder', function() {
  describe('#build()', function() {
    it('should return a query string', function() {
      const queryBuilder = QueryBuilder.create()
      const query = queryBuilder.build()
      assert.equal(query, 'https://store.steampowered.com/search/')
    })
  })

  describe('#search()', function() {
    it('should return a query string with "Dota+2" as the term', function() {
      const queryBuilder = QueryBuilder.create()
          .search('Dota 2')
      const query = queryBuilder.build()
      assert.equal(query, 'https://store.steampowered.com/search/?term=Dota+2')
    })
  })

  describe('#sortBy()', function() {
    it('should return a query string with "Price_ASC" as the sort_by', function() {
      const queryBuilder = QueryBuilder.create()
          .sortBy(SortBy.PriceAsc)
      const query = queryBuilder.build()
      assert.equal(query, 'https://store.steampowered.com/search/?sort_by=Price_ASC')
    })
  })

  describe('#maxPrice()', function() {
    it('should return a query string with "35" as the max_price', function() {
      const queryBuilder = QueryBuilder.create()
          .maxPrice(MaxPrice.ThirtyFive)
      const query = queryBuilder.build()
      assert.equal(query, 'https://store.steampowered.com/search/?max_price=35')
    })
  })
});
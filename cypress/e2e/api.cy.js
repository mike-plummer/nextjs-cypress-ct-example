/*
This test validates the Next.js-defined API paths

Next.js concepts tested here:
* API paths

*/

describe('Movies API', () => {
  describe('getAll', () => {
    it('retrieves all data', () => {
      cy.api({ url: '/api/movies', failOnStatusCode: false })
      .then(({ status, body }) => {
        expect(status).to.equal(200)
        expect(body.length).to.equal(24)
      })
    })
  })

  describe('getById', () => {
    it('retrieves matching item', () => {
      cy.api({ url: '/api/movies/1', failOnStatusCode: false })
      .then(({ status, body }) => {
        expect(status).to.equal(200)
        expect(body.id).to.equal(1)
      })
    })

    it('returns 404 if no match found', () => {
      cy.api({ url: '/api/movies/999', failOnStatusCode: false })
      .then(({ status, body }) => {
        expect(status).to.equal(404)
        expect(body).to.equal('')
      })
    })

    it('returns 400 if non-numeric ID passed', () => {
      cy.api({ url: '/api/movies/abc', failOnStatusCode: false })
      .then(({ status, body }) => {
        expect(status).to.equal(400)
        expect(body).to.equal('')
      })
    })
  })

  describe('search', () => {
    it('retrieves matching items', () => {
      cy.api({ url: '/api/movies/search?title=Back', failOnStatusCode: false })
      .then(({ status, body }) => {
        expect(status).to.equal(200)
        expect(body.length).to.equal(4)
      })
    })

    it('returns 204 if no match found', () => {
      cy.api({ url: '/api/movies/search?title=FakeValue', failOnStatusCode: false })
      .then(({ status, body }) => {
        expect(status).to.equal(204)
        expect(body).to.equal('')
      })
    })

    it('returns 400 if no title param passed', () => {
      cy.api({ url: '/api/movies/search?title=', failOnStatusCode: false })
      .then(({ status, body }) => {
        expect(status).to.equal(400)
        expect(body).to.equal('')
      })
    })
  })
})
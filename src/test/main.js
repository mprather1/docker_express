import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'

chai.use(chaiHttp)

const expect = chai.expect

describe('httpervert test', function () {
  it('should get data at /api/home - GET', function (done) {
    chai.request(server)
    .get('/api/home')
    .end(function (err, res) {
      console.log(err)
      expect(err).to.be.null
      expect(res).to.have.status(200)
      done()
    })
  })
})

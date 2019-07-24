import errorHandler from 'utils/errorHandler';
import messages from 'utils/messages';
import { expect } from 'test/testHelpers/setUpChai';

describe('ErrorHandler', () => {
  /**
   * Mocked Express Request object.
   */
  let req

  /**
   * Mocked Express Response object.
   */
  let res

  /**
   * Mocked Express Next function.
   */

  /**
   * Reset the `req` and `res` object before each test is ran.
   */
  beforeEach(() => {
    req = {
      params: {},
      body: {}
    }

    res = {
      data: null,
      code: null,
      status(status) {
        this.code = status
        return this
      },
      json(payload) {
        this.data = payload
      }
    }
  })

  it('should handle error', () => {
    errorHandler(new Error(), req, res)

    expect(res.code).to.be.equal(400)
    expect(res.data.data.message).to.be.equal(messages.badRequest)
    expect(res.data.status).to.be.equal('failure')
  })
})
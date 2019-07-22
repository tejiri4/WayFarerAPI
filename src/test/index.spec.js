
import messages from 'utils/messages';
import app from '..';


import { expect, chai } from 'test/testHelpers/setUpChai';

describe('API Routes', () => {
  it('Home route should return success', async () => {
    const response = await chai.request(app).get('/');

    expect(response.body.data.message).to.be.equal(messages.welcome);
    expect(response.body.status).to.be.equal('success');
    expect(response).to.have.status(200);
  });

  it('Undefined API routes should return a 404', async () => {
    const response = await chai.request(app).get('/api/v1/undefinedRoute');

    expect(response).to.have.status(404);
    expect(response.body.status).to.be.equal('failure');
    expect(response.body.data.message).to.be.equal(messages.notFound('Route'));
  });
});

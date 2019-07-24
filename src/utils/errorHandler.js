import response from 'utils/response';
import messages from './messages';

export default (err, req, res) => response(res, 400, 'failure', {
  message: messages.badRequest,
  error: err.stack,
});

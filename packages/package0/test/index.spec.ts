import { getMessage } from '../src';

describe('package0', () => {
  it('should fetch a message', async () => {
    const str = await getMessage({ query: undefined, body: undefined });

    if (typeof str !== 'string') {
      throw new Error('did not return a string');
    }
  });
});

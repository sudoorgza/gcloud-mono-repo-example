import { foo } from '../src';

describe('package', () => {
  it('should return a string', async () => {
    const str = foo();

    if (typeof str !== 'string') {
      throw new Error('did not return a string');
    }
  });
});

import { package0 } from '../src';

describe('sls package0', () => {
  it('should fetch a package0 number', async () => {
    await package0({}, context);
  });
});

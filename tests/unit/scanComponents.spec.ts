import { expect } from 'chai';
import { scanComponents } from '@/core/scanComponents';
import KeenUI from 'keen-ui';

describe('component scanner', () => {
  it('scans components', () => {
    scanComponents(KeenUI);
  });
});

import { expect } from 'chai';
import * as ComponentScanner from '@/core/scanComponents';
import { scan } from '@/core/scanComponents';
import KeenUI from 'keen-ui';

describe('component scanner', () => {
  it('scans components', () => {
    scan(KeenUI);
  });
});

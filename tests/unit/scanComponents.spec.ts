import { expect } from 'chai';
import * as ComponentScanner from '@/core/scanComponents';

describe('component scanner', () => {
  it('scans components', () => {
    ComponentScanner.scan();
  });
});

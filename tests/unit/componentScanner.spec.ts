import { expect } from 'chai';
import * as ComponentScanner from '@/core/componentScanner';

describe('component scanner', () => {
  it('scans components', () => {
    ComponentScanner.scan();
  });
});

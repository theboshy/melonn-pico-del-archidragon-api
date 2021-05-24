import { TYPES } from './types';
import { expect } from 'chai';

describe('Inversify Types Unit Tests', () => {
    it('TYPES should be a object', () => {
        expect(typeof TYPES).to.equal('object');
    });
});

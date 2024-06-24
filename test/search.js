import { expect } from 'chai';
import  { searchTrips } from '../index.js';

describe('searchTrips Function', () => {

  it('should return a non-empty array of trips for valid search criteria', async () => {
    const criteria = { from: 'Paris', to: 'Lyon', date: '2024-06-24' };

    const results = await searchTrips(criteria);

    expect(results).to.be.an('array').that.is.not.empty;
  });

});
'use strict';

import config from '../testConfig.json';
import { expect } from 'chai';
import { LiveCoinWatch } from '../../src/liveCoinWatch';

const client = new LiveCoinWatch(config.testKey);

describe('Clien properties tests', () => {
    it('Have token credits API Wrapper', () => {
        expect(client.getCredits).to.be.exist;
    });

    it('Have all fiats API Wrapper', () => {
        expect(client.getAllFiats).to.be.exist;
    });

    it('Have overview API Wrapper', () => {
        expect(client.getOverview).to.be.exist;
    });

    it('Have overview history API Wrapper', () => {
        expect(client.getOverviewHistory).to.be.exist;
    });

    it('Have coin single API Wrapper', () => {
        expect(client.getCoin).to.be.exist;
    });

    it('Have coin single history API Wrapper', () => {
        expect(client.getCoinHistory).to.be.exist;
    });

    it('Have coin list API Wrapper', () => {
        expect(client.getCoinList).to.be.exist;
    });

    it('Have single exchange API Wrapper', () => {
        expect(client.getExchange).to.be.exist;
    });

    it('Have exchange list API Wrapper', () => {
        expect(client.getExchange).to.be.exist;
    });
});
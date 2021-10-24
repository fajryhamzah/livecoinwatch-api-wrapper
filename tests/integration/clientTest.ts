'use strict';

import config from '../testConfig.json';
import { expect } from 'chai';
import { LiveCoinWatch } from '../../src/liveCoinWatch';

const client = new LiveCoinWatch(config.testKey);

describe('LiveCoinWatch client tests', () => {
    // it('Will check token credits API Wrapper', async () => {
    //     let response = await client.getCredits();

    //     expect(response).to.be.an('object');
    //     expect(response.dailyCreditsRemaining).to.be.a('number');
    //     expect(response.dailyCreditsLimit).to.be.a('number');
    // });

    // it('Will check  all fiats API Wrapper', async () => {
    //     let response = await client.getAllFiats();
    //     expect(response).to.be.an('array');
    //     expect(response[0]).to.be.an('object');
    //     expect(response[0].code).to.be.exist;
    //     expect(response[0].countries).to.be.exist;
    //     expect(response[0].flag).to.be.exist;
    //     expect(response[0].name).to.be.exist;
    //     expect(response[0].symbol).to.be.exist;
    // });

    // it('Will check overview API Wrapper', async () => {
    //     let response = await client.getOverview('USD');
    //     expect(response).to.be.an('object');
    //     expect(response.cap).to.be.a('number');
    //     expect(response.volume).to.be.a('number');
    //     expect(response.liquidity).to.be.a('number');
    //     expect(response.btcDominance).to.be.a('number');
    // });

    // it('Will check overview history API Wrapper', async () => {
    //     let response = await client.getOverviewHistory('USD', 1634948165669, 1635034565673);

    //     expect(response).to.be.an('array');
    //     expect(response[0].cap).to.be.a('number');
    //     expect(response[0].volume).to.be.a('number');
    //     expect(response[0].liquidity).to.be.a('number');
    //     expect(response[0].btcDominance).to.be.a('number');
    // });

    // it('Will check coin single API Wrapper', async () => {
    //     let response = await client.getCoin('USD', 'CAKE');

    //     expect(response).to.be.an('object');
    //     expect(response.rate).to.be.a('number');
    //     expect(response.volume).to.be.a('number');
    //     expect(response.cap).to.be.a('number');
    // });

    // it('Will check coin single history API Wrapper', async () => {
    //     let response = await client.getCoinHistory('USD', 'CAKE', 1634948165669, 1635034565673);

    //     expect(response).to.be.an('object');
    //     expect(response['history']).to.be.an('array');
    //     expect(response['history'][0].date).to.be.a('number');
    //     expect(response['history'][0].rate).to.be.a('number');
    //     expect(response['history'][0].volume).to.be.a('number');
    //     expect(response['history'][0].cap).to.be.a('number');
    // });

    // it('Will check coin list API Wrapper', async () => {
    //     let response = await client.getCoinList('USD');

    //     expect(response).to.be.an('array');
    // });

    it('Will check single exchange API Wrapper', async () => {
        const exchangeCode = 'binance';
        let response = await client.getExchange('USD', exchangeCode);

        expect(response).to.be.an('object');
        expect(response.code).to.be.equal(exchangeCode);
    });

    it('Have exchange list API Wrapper', async () => {
        let response = await client.getExchangeList('USD');

        expect(response).to.be.an('array');
    });
});
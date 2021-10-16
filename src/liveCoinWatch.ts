'use strict';

import axios from 'axios';

const API_URL = 'https://api.livecoinwatch.com/';

export class LiveCoinWatch {
    constructor(apiKey: string) {
        axios.defaults.headers.post['x-api-key'] = apiKey;
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#credits
     * @returns {Promise}
     */
    public getCredits() {
        return this.getResponse('credits')
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#fiatsall
     * @returns {Promise}
     */
    public getAllFiats() {
        return this.getResponse('fiats/all');
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#overview
     * @param {string} fiat 
     * @returns {Promise}
     */
    public getOverview(fiat: string) {
        return this.getResponse('overview', {
            currency: fiat
        });
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#overviewhistory
     * @param {string} fiat 
     * @param {number} startTimestamp 
     * @param {number} endTimestamp 
     * @returns {Promise}
     */
    public getOverviewHistory(fiat: string, startTimestamp: number, endTimestamp: number) {
        return this.getResponse('overview/history', {
            currency: fiat,
            end: endTimestamp,
            start: startTimestamp
        });
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#coinssingle
     * @param {string} fiat 
     * @param {string} coinCode 
     * @param {boolean} withMetadata 
     * @returns {Promise}
     */
    public getCoin(fiat: string, coinCode: string, withMetadata: boolean = false) {
        return this.getResponse('coins/single', {
            currency: fiat,
            code: coinCode.toUpperCase(),
            meta: withMetadata
        });
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#coinssinglehistory
     * @param {string} fiat 
     * @param {string} coinCode 
     * @param {number} startTimestamp 
     * @param {number} endTimestamp 
     * @returns {Promise}
     */
    public getCoinHistory(fiat: string, coinCode: string, startTimestamp: number, endTimestamp: number) {
        return this.getResponse('coins/single/history', {
            currency: fiat,
            code: coinCode.toUpperCase(),
            start: startTimestamp,
            end: endTimestamp
        });
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#coinslist
     * @param {string} fiat 
     * @param {object|null} config 
     * @returns {Promise}
     */
    public getCoinList(
        fiat: string,
        config: {
            sort?: string;
            order?: string;
            offset?: number;
            limit?: number;
            meta?: boolean;
        } | null = null
    ) {
        let defaultConfig = {
            sort: 'rank',
            order: 'ascending',
            offset: 0,
            limit: 50,
            meta: true
        };

        let mergeConfig = { ...defaultConfig, ...config, ...{ currency: fiat } };

        return this.getResponse('coins/list', mergeConfig);
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#exchangessingle
     * @param {string} fiat 
     * @param {string} exchangeCode 
     * @param {boolean} withMeta 
     * @returns {Promise} 
     */
    public getExchange(fiat: string, exchangeCode = 'binance', withMeta: boolean = true) {
        return this.getResponse('exchanges/single', {
            currency: fiat,
            code: exchangeCode,
            meta: withMeta
        });
    }

    /**
     * Wrapper for endpoint https://livecoinwatch.github.io/lcw-api-docs/#exchangeslist
     * @param {string} fiat 
     * @param {object|null} config 
     * @returns {Promise}
     */
    public getExchangeList(
        fiat: string = 'USD',
        config: {
            sort?: string;
            order?: string;
            offset?: number;
            limit?: number;
            meta?: boolean;
        } | null = null
    ) {
        let defaultConfig = {
            sort: 'volume',
            order: 'descending',
            offset: 0,
            limit: 50,
            meta: true
        };

        let mergeConfig = { ...defaultConfig, ...config, ...{ currency: fiat } };


        return this.getResponse('exchanges/list', mergeConfig);
    }

    /**
     * Get response from the API
     * @param {string} endpoint 
     * @param {any} data 
     * @returns {Promise}
     */
    private getResponse(endpoint: string, data: any = {}) {
        return axios.post(API_URL + endpoint, data).then(response => {
            return response.data;
        });
    }
}
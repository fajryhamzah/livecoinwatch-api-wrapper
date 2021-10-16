'use strict';

import axios from 'axios';
import CreditResponse from './responses/creditResponse';

const API_URL = 'https://api.livecoinwatch.com/';

export default class LiveCoinWatch {
    constructor(apiKey: string) {
        axios.defaults.headers.post['content-type'] = 'application/json';
        axios.defaults.headers.post['x-api-key'] = apiKey;
    }
    
    public getCredits() {
        return this.getResponse('credits').then(data => {
            return new CreditResponse(data);
        });
 
    }

    public getAllFiats() {

    }

    public getOverview(currency: string) {

    }

    public getOverviewHistory(currency: string, startTimestamp: number, endTimestamp: number) {

    }

    public getCoin(currency: string, coinCode: string, withMetadata: boolean = false) {

    }

    public getCoinHistory(currency: string, coinCode: string, startTimestamp: number, endTimestamp: number) {

    }

    public getCoinList(currency: string, sort: string = 'rank', order: 'ascending', offset: number = 0, limit: number = 50, withMeta: boolean = true) {

    }

    public getExchange(currency: string, exchangeCode = 'binance', withMeta: boolean = true) {

    }

    public getExchangeList(currency: string = 'USD', sort: string = 'volume', order: string = 'descending', offset: number = 0, limit: number = 50, withMeta: boolean = true) {

    }

    private getResponse(endpoint: string, data: any = null) {
        return axios.post(API_URL + endpoint, data).then(response => {
            return response.data;
        });
    }
}
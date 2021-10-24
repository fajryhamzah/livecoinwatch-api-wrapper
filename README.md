# LIVECOINWATCH API WRAPPER

[![NPM](https://nodei.co/npm/livecoinwatch-wrapper-api.png)](https://nodei.co/npm/livecoinwatch-wrapper-api/)

This is unofficial [livecoinwatch.com](https://www.livecoinwatch.com) simple API Wrapper for javascript project written in typescript.

## Instalation

Create account and generate token at [livecoinwatch.com](https://www.livecoinwatch.com/tools/api) and then

``npm i livecoinwatch-wrapper-api``

## Usage

```typescript
# using import
import { LiveCoinWatch } from '../../src/liveCoinWatch';

#using require
const {LiveCoinWatch} = require("livecoinwatch-wrapper-api")

const client = new LiveCoinWatch(TOKEN);

#example api call
let response = await client.getCredits();
let response = await client.getCoin('USD', 'CAKE');
let response = await client.getCoinList('USD', { limit: 2});
```

## Tests

You need to create ``testConfig.json`` first inside ``tests`` folder before run the test. The file should look like this:

```json
{
    "testKey": "LIVECOINWATCH_TOKEN_FOR_TEST"
}
```

After the file created you could just run:

``npm test``

## API

#### ``getCredits()``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#credits>

#### ``getAllFiats()``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#fiatsall>

#### ``getOverview(fiat: string)``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#overview>

#### ``getOverviewHistory(fiat: string, startTimestamp: number, endTimestamp: number)``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#overviewhistory>

#### ``getCoin(fiat: string, coinCode: string, withMetadata: boolean = false)``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#coinssingle>

#### ``getCoinHistory(fiat: string, coinCode: string, startTimestamp: number, endTimestamp: number)``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#coinssinglehistory>

#### ``getCoinList(fiat: string, config = {})``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#coinslist>

Extra config value :

```typescript
config: {
            sort?: string;
            order?: string;
            offset?: number;
            limit?: number;
            meta?: boolean;
        } | null = null
    )
```

#### ``getExchange(fiat: string, exchangeCode = 'binance', withMeta: boolean = true)``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#exchangessingle>

#### ``getExchangeList(fiat: string = 'USD', config = {})``

Wrapper for endpoint <https://livecoinwatch.github.io/lcw-api-docs/#exchangeslist>

Extra config value :

```javascript
config: {
        sort?: string;
        order?: string;
        offset?: number;
        limit?: number;
        meta?: boolean;
    } | null = null
)
```

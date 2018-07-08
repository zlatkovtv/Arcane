export interface CoindataContainer {
    data:     { [key: string]: CoinData };
    metadata: Metadata;
}

export interface CoinData {
    id:                 number;
    name:               string;
    symbol:             string;
    website_slug:       string;
    rank:               number;
    circulating_supply: number;
    total_supply:       number;
    max_supply:         number | null;
    quotes:             Quotes;
    last_updated:       number;
}

export interface Quotes {
    USD: Usd;
}

export interface Usd {
    price:              number;
    volume_24h:         number;
    market_cap:         number;
    percent_change_1h:  number;
    percent_change_24h: number;
    percent_change_7d:  number;
}

export interface Metadata {
    timestamp:            number;
    num_cryptocurrencies: number;
    error:                null;
}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '8a1b68e31amsh61b19fbf46c184ap1e9200jsn02383985bb94'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

// This combines the endpoint url and headers
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    // This reducer is for  crypto api
    reducerPath: 'cryptoAPi',

    // This function holds the base url
    baseQuery: fetchBaseQuery({ baseUrl }),

    // This interacts with your api end points
    endpoints: (builder) => ({

        // You can give your builders any name since they represent functions
        getCryptoStats: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinUUID) => createRequest(`/coin/${coinUUID}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinUUID,timePeriod}) => createRequest(`/coin/${coinUUID}/history?timePeriod=${timePeriod}`)
        }),
    })
});

export const { useGetCryptoStatsQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '8a1b68e31amsh61b19fbf46c184ap1e9200jsn02383985bb94'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/search?'

// This combines the endpoint url and headers
const createRequest = (url) => ({ url, headers: newsApiHeaders })

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getNews:builder.query({
            query: ({ newsCategory, count}) => createRequest(`q=${newsCategory}?count=${count}?freshness=Day?textFormat=Raw?setLanf=EN?safeSearch=off`)
        })
    })

});
export const { useGetNewsQuery } = newsApi
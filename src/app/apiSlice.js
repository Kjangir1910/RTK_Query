import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: (id) => `products/${id}`, 
    }),
  }),
});

export const { useFetchDataQuery } = apiSlice;



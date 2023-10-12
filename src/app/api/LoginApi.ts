import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: `${Config.API_URL}`}),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({email, password}) => ({
        url: `/login`,
        method: 'POST',
        body: {email, password}
      }),
    }),
  }),
});

export const {useLoginMutation} = loginApi;
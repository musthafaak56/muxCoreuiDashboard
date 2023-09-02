import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { VideoViewData } from '../state/Types'
import { firstData } from '../state/Types'

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

// Declare the videoId
const videoId = '0c56e996-c0f9-49ff-a3bb-c68ea450bc2a' // Replace with actual video ID

const startDate = '2023-08-20T00:00:00Z'

// Calculate the UNIX timestamp for August 20th, 2023, and today's date
const startTimestamp: number = Math.floor(new Date(startDate).getTime() / 1000)
const endTimestamp: number = Math.floor(Date.now() / 1000) // Current time in seconds

// Define your API endpoint
export const Data = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mux.com/data/v1/', // Base URL of API
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Basic ${btoa(`${ACCESS_TOKEN}:${SECRET_KEY}`)}`,
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    fetchVideoViews: builder.query<firstData, void>({
      query: () => `video-views/${videoId}`,
    }),
  }),
})

export const { useFetchVideoViewsQuery } = Data

// // Export the Data object
// export { Data }

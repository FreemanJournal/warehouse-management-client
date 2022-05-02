import axios from 'axios';
import React from 'react'
import useSWR from 'swr'

export default function useGetProduct() {
  const getProducts = (uri) => axios.get(uri).then(res => res.data);
  const { data,mutate, error } = useSWR(`${process.env.REACT_APP_uri}/items`, getProducts)
  // const { data } = useSWR(shouldFetch ? '/api/data' : null, fetcher)

  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}

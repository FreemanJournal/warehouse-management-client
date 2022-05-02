import axios from 'axios';
import React from 'react'
import useSWR from 'swr'

export default function useGetProduct() {
  const getProducts = (uri) => axios.get(uri).then(res => res.data);
  const { data, error } = useSWR(`${process.env.REACT_APP_uri}/items`, getProducts)

  return {
    items: data,
    isLoading: !error && !data,
    isError: error
  }
}

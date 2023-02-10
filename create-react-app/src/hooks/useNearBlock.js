import { mbjs } from '@mintbase-js/sdk'
import { useEffect, useState } from 'react'


const useNearblock = () => {
  const [accountUrl, setAccountUrl] = useState('')
  const [hashUrl, setHashUrl] = useState('')
  const [transactionUrl, setTransactionUrl] = useState('')

  useEffect(() => {

    const networkName = mbjs.keys.network

    const sub = networkName === 'testnet' ? 'testnet.' : ''

    setAccountUrl(`https://${sub}nearblocks.io/address/`)
    setHashUrl(`https://${sub}nearblocks.io/hash/`)
    setTransactionUrl(`https://${sub}nearblocks.io/txns/`)
  }, [])

  const getExplorerHashLink = (hash) => {
    return `${hashUrl}${hash}`
  }

  const getExplorerTransactionLink = (hash) => {
    return `${transactionUrl}${hash}`
  }

  const getExplorerAccountLink = (accountId) => {
    return `${accountUrl}${accountId}`
  }

  return {
    accountUrl,
    hashUrl,
    transactionUrl,
    getExplorerAccountLink,
    getExplorerHashLink,
    getExplorerTransactionLink,
  }
}

export { useNearblock }

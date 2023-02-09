
import { useSearchParams } from 'react-router-dom';

export const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams,searchParams.get('transactionHashes'),  'searchParams')

  return (
    <>Success!</>
  )
}

import { EIconName, MbButtonLink, MbIcon } from 'mintbase-ui';
import { useSearchParams } from 'react-router-dom';
import { useNearblock } from '../hooks/useNearBlock';

export const SuccessPage = () => {
  const [searchParams] = useSearchParams();

  const transactionHashes = searchParams.get('transactionHashes')
  const { getExplorerTransactionLink } = useNearblock()

  return (
    <div className="w-full justify-center text-center h-screen align-center flex flex-wrap items-center">
      <div className='h-auto'>
        <h1 className='w-full py-10'> Your Transaction was a Success</h1>
        <div className="flex items-center justify-center gap-12">
          <MbButtonLink icon={<MbIcon size="12" height="12" name={EIconName.OPEN_NEW_TAB} />} href={getExplorerTransactionLink(transactionHashes)} text="See Transaction" target="_blank"/>
          <MbButtonLink icon={<MbIcon size="12" height="12" name={EIconName.ARROW_BACK_SMALL} />} href="/" text="Go To Home" />
        </div>
      </div>
    </div>
  )
}
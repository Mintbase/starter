
import { useWallet } from '@mintbase-js/react';
import { FormProvider, useForm } from 'react-hook-form'
import { EInputType } from '../config/constants';
import { Connect } from './Connect';
import { NearWalletConnector } from './NearWalletSelector';
import { StoreForm } from './StoreForm';


export default function NewStore() {
  const { isConnected } = useWallet();


  const methods = useForm({
    defaultValues: {
      [EInputType.NAME]: "",
      [EInputType.SYMBOL]: "",
    },
  });

  return isConnected ? (
    <FormProvider {...methods}>
      <form>
        <StoreForm />
      </form>
    </FormProvider>
  ) : <Connect />
}
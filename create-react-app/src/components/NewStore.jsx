
import { FormProvider, useForm } from 'react-hook-form'
import { EInputType } from '../config/constants';
import { StoreForm } from './StoreForm';


export default function NewStore() {


  const methods = useForm({
    defaultValues: {
      [EInputType.NAME]: "",
      [EInputType.SYMBOL]: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <StoreForm />
      </form>
    </FormProvider>
  )
}
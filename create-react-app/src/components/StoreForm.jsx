import {
  EControlStatus,
  ESize,
  EState,
  EType,
  MbButton,
  MbInput,
  MbModal,
  MbText,
} from 'mintbase-ui'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { EInputType, VALID_STORE_NAME } from '../config/constants'
import { debounce } from 'lodash'
import { checkStoreName } from '@mintbase-js/data'
import { deployContract, execute, mbjs } from '@mintbase-js/sdk'
import { useWallet } from '@mintbase-js/react'

export const StoreForm = () => {


  const {
    register,
    watch,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext();




  const hasErrors = Object.keys(errors).length > 0
  const hasValues = (watch().name && watch().symbol);


  const checkNameExists = async (v) => {
    const res = await checkStoreName(v)
    return res?.data?.nft_contracts?.length === 0
  }


  const { selector, activeAccountId } = useWallet()


  const onSubmit = async () => {
    const name = getValues(EInputType.NAME)
    const symbol = getValues(EInputType.SYMBOL)


    const wallet = await selector.wallet()

    const isTestnet = mbjs.keys.network === 'testnet'

    const endContractName = isTestnet ? 'mintspace2.testnet' : 'mintbase1.near'

    const callbackArgs = {
      contractName: `${name}.${endContractName}`,
    }
    const callback = {
      type: 'deploy-store',
      args: callbackArgs
    }

    const receipt = (await execute(
      { wallet, callbackArgs: callback },
      {
        ...deployContract({
          name: name,
          ownerId: activeAccountId,
          factoryContractId: endContractName,
          metadata: {
            symbol: symbol,
            baseUri: 'https://arweave.net'
          },
        }),
      }
    ))

  }



  return (<div className="p-24">
    <div>
      <MbInput
        {...register(EInputType.NAME, {
          required: true,
          pattern: {
            value: VALID_STORE_NAME,
            message: 'Name can only contain lowercase letters and numbers.',
          },
          maxLength: {
            value: 20,
            message: `Name can't be longer than 20 characters.`,
          },
          validate: {
            checkUrl: async (v) => {
              const isValid = await checkNameExists(v)
              return isValid || 'Name already exists.'
            },
          },
        })}
        type="text"
        placeholder="myfirststore"
        label="Store Name"
        required
        controlStatus={
          errors[EInputType.NAME]
            ? EControlStatus.INVALID
            : EControlStatus.NORMAL
        }
        inputSize={ESize.MEDIUM}
        onChange={debounce(async (evt) => {
          setValue(EInputType.NAME, evt.target.value)
          await trigger(EInputType.NAME)
        }, 500)}
      />
      {errors[EInputType.NAME] && (
        <MbText className="mt-8 cap-big-90">
          {errors[EInputType.NAME].message}
        </MbText>
      )}
    </div>

    <div className="mt-24">
      <MbInput
        {...register(EInputType.SYMBOL, {
          required: true,
          maxLength: {
            value: 5,
            message: `Symbol can't be longer than 5 characters.`,
          },
        })}
        type="text"
        placeholder="MFS"
        label="Symbol"
        required
        controlStatus={
          errors[EInputType.SYMBOL]
            ? EControlStatus.INVALID
            : EControlStatus.NORMAL
        }
        inputSize={ESize.MEDIUM}
        hasIcon
        onChange={debounce(async (evt) => {
          setValue(EInputType.SYMBOL, evt.target.value)
          await trigger(EInputType.SYMBOL)
        }, 500)}
      />
      {errors[EInputType.SYMBOL] && (
        <MbText className="mt-8 cap-big-90">
          {errors[EInputType.SYMBOL].message}
        </MbText>
      )}
    </div>
    <div className="mt-64 flex justify-between">
      <MbButton
        label="Deploy Store"
        state={hasErrors || !hasValues ? EState.DISABLED : EState.ACTIVE}
        disabled={hasErrors ? true : hasValues ? false : true}
        onClick={onSubmit}
      />
    </div>
  </div>)
}
import { useWallet } from "@mintbase-js/react";
import { MbButton, MbText } from "mintbase-ui";
import { uploadReference } from "@mintbase-js/storage";
import { mint, execute } from "@mintbase-js/sdk";

import { FormProvider, useForm } from "react-hook-form";

import { DESCRIPTION, MAIN_IMAGE, TITLE } from "../config/constants";
import MintForm from "./MintForm";
import { Connect } from "./Connect";


export default function Minter() {
  const { selector, activeAccountId , isConnected} = useWallet();

  const methods = useForm({
    defaultValues: {
      [TITLE]: "",
      [DESCRIPTION]: "",
      [MAIN_IMAGE]: null,
    },
  });
  const { getValues, handleSubmit } = methods;

  const onSubmit = async (data) => {
    const wallet = await selector.wallet();
    const file = getValues(MAIN_IMAGE);

    if (file == null || activeAccountId == null) {
      console.error("Error uploading file")
      return
    }

    const reference = await handleUpload(file, data);
    await handleMint(reference, activeAccountId, wallet);
  };

  return isConnected ? (
    <div className="md:max-w-2xl w-full space-y-4">
      <div className="flex flex-col items-center justify-center mt-2">
        <MbText className="text-3xl">Mint your NFTs</MbText>
        <div className="w-full mt-4 space-y-4">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit, (errorMsgs) =>
                console.error(errorMsgs)
              )}
            >
              <MintForm />
              <div className="flex justify-center items-center mt-4">
                <MbButton type="submit" label="Mint Me" />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  ): <Connect/>;
}

async function handleUpload(file, data) {
  const metadata = {
    title: data[TITLE],
    description: data[DESCRIPTION],
    media: file
  };

  const referenceJson = await uploadReference(metadata)
  console.log("Successfully uploaded with referece:", referenceJson.id)
  return referenceJson.id
}

async function handleMint(reference, activeAccountId, wallet) {

  if (reference) {
    const mintCall = mint({
      reference: reference,
      ownerId: activeAccountId,
      options: {
        royaltyPercentage: 0.1,
        splits: {
        'example1.testnet': 0.4,
        'example2.testnet': 0.3,
        'example3.testnet': 0.3,
      }
    }
    })

    await execute({ wallet }, mintCall)
  }
}

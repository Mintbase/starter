# Mintbase Starter
starter kits with different front-end technologies


### live:

<p>
  <a href="https://mb-starter-create-react-app.vercel.app/">
    <img src="https://miro.medium.com/max/464/1*LxtdsVO0UnRDlrale42riQ.png" style="width:30px">
    <span> create-react-app </span>
  </a>
</p>



## Troubleshooting

### Buffer issue:

Due to near-api-js uses buffer and util packages, some webpack or vite projects, cant load and build due to that but theres some workarounds for that:<br/>
[Buffer is not defined](https://stackoverflow.com/questions/70714690/buffer-is-not-defined-in-react-vite)<br/>
[Vite Global isnt defined](https://stackoverflow.com/questions/72114775/vite-global-is-not-defined)<br/>
https://github.com/near/near-api-js/issues/757<br/>


### util:

need to do a ```npm install --save-dev util```

## Current Support / Roadmap
| stack            | Features                            | TypeScript       | mb-ui version | mbjs version    | version |
|------------------|-------------------------------------|------------------|---------------|-----------------|---------|
| create-react-app | Minting, Deploy Store, Nft Showcase | soon             | 0.9.21        | 0.1.0-beta.2    | 5.0.1   |
| vite             | in progress                         | soon             | --            | --              | --      |
| Next.js          | Simple MarketPlace, Simple Minter   | Yes, Only no JSX | 0.9.16        | v0.1.0-alpha-20 | 13.1.1  |


## Next.js examples

for Next.js examples please visit our [examples repository](https://github.com/Mintbase/examples)

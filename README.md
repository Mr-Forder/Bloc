# bloc

![blocheader](https://user-images.githubusercontent.com/66869833/197811238-55a038e1-d90f-4d52-aacf-36d79e564649.jpg)


Bloc directly connects to your Metamask wallet and allow users to send and receive crypto directly, with no additional fees.

But that’s not all. When you send crypto to anyone via Bloc, you can also upload any image you like. When the user initates the transaction, that image will also be sent to your recipents wallet, where it will live, immutably, on the Blockchain.

Anyone who connects their wallet to Bloc can access their wallet to view the pictures that they’ve collected. Whenever a wallet is connected, Bloc will check to see if there’s any images linked to that wallet’s past transactions.

Bloc’s frontend was created in React, with a basic Node backend added to allow for image upload functionality via Cloudinary. The actual smart contract that allows the magic to happen was built in Solidity.

To make the user experience as simple and as slick as possible, I included a quick animated guide to act as an onboarding section that shows how to complete a transaction, as well as some quick little micro animations when the user successfully connects their Metamask wallet to the app and completes a transaction.

I wanted to make Bloc something of an all-in-one app,  so I also used Axios to leverage Coin API data, giving users at a glance information on the permormance metrics of hundreds of different coins. Data visualisation was done via ChartJS.

## To get Started


### In the client folder, you'll need the following environment variables:

```
REACT_APP_RAPIDAPI_KEY
REACT_APP_CRYPTO_API_URL
REACT_APP_CRYPTO_RAPIDAPI_HOST
```

You'll need a RapidAPI account, with an active sub to the CoinAPI API(free).

##In the server folder, you'll need the follwing environment variables:

```
CLOUD_NAME
API_KEY
API_SECRET
```

Put your Cloudinary API credentials in and you're good to go.

In the server folder, spin up the backend:

```
npm install

npm start
```


then, in the client, start up the frontend:
```
npm install

npm start
```

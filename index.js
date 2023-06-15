import { Web3 } from "web3";

const web3 = new Web3("https://yourProvider.com");
web3.eth
  .getBalance("0x05fB80699034011c702B7e1C8429f2977E4C6B63")
  .then((balance) => console.log(balance));

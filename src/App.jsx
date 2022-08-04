import { ethers } from "ethers";
import Web3Modal from "web3modal";
import "./App.css";

const App = () => {
  const foo = async (e) => {
    e.preventDefault();
  };

  const connectWallet = async () => {
    const providerOptions = {
      injected: {
        display: {
          name: "Injected",
          description: "Connect with the provider in your Browser",
        },
        package: null,
      },
    };

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });

    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={connectWallet}>click here</button>
    </>
  );
};

export default App;

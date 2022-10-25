import { useEffect, useState } from "react";

export default function CheckNetwork({ children }) {
  const [isCorrectChain, setIsCorrectChain] = useState(true);

  const klaytnNetwork = {
    testNet: 1001,
    main: 8217,
  };

  useEffect(() => {
    if (parseInt(window.ethereum.chainId) != klaytnNetwork) {
      setIsCorrectChain(false);
      handleConnectToChain();
    }
  }, []);

  async function handleConnectToChain() {
    let hex = "0x" + klaytnNetwork.testNet.toString(16);

    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: hex }],
      });
      setIsCorrectChain(true);
    } catch (e) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: hex,
              chainName: "Klaytn Testnet Baobab",
              nativeCurrency: {
                name: "KLAY",
                symbol: "KLAY",
                decimals: 18,
              },
              blockExplorerUrls: ["https://scope.klaytn.com/"],
              rpcUrls: ["https://api.baobab.klaytn.net:8651"],
            },
          ],
        });
        setIsCorrectChain(true);
      } catch (addError) {
        console.log(addError);
      }
      console.log(e);
    }
  }

  if (!isCorrectChain) {
    return (
      <div className='w-full gap-3 flex-col min-h-screen flex items-center justify-center text-black'>
        <h1 className='font-bold text-5xl'>Wrong Network</h1>
        <p className='text-md'>
          Please connect to
          <span
            onClick={handleConnectToChain}
            className='ml-1 cursor-pointer text-green-600 font-bold hover:text-xl transition-all'
          >
            Klaytn TestNet
          </span>
        </p>
      </div>
    );
  }

  return <>{children}</>;
}

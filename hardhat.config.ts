import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
networks: {
  mumbai:{
    url:"https://polygon-mumbai.g.alchemy.com/v2/Ep7KsGLIgdpjKuXQJ-l6vCYZR4HC2jJP",
    accounts:["192e587d1b3e70927edbf5ec81b5d7461a51c3bb1a5b214f4c6a2830b706817c"]
  }
},
  gasReporter:{enabled:true}
};

export default config;

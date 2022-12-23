import React from 'react';
import { Layout, Menu } from 'antd';
import { EyeOutlined, SearchOutlined, EditOutlined } from '@ant-design/icons';
import { ethers } from "ethers";

import NFTData from "../contracts/NFTData.json";
import contractAddress from "../contracts/contract-address.json";


import Home from './Home';
import { Search } from './Search';
import { Browse } from './Browse';
import { Customize } from './Customize';
import NoWalletDetected from "./NoWalletDetected";
import ConnectWallet from './ConnectWallet';

const HARDHAT_NETWORK_ID = '1337';

const { Header, Content, Footer } = Layout;

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <EyeOutlined />,
  },
  {
    label: 'Random',
    key: 'browse',
    icon: <EyeOutlined />,
  },
  {
    label: 'Search',
    key: 'search',
    icon: <SearchOutlined />,
  },
  {
    label: 'Customize',
    key: 'customize',
    icon: <EditOutlined />,
  },
];





export class App extends React.Component {
  constructor(props) {
    super(props);

    // We store multiple things in Dapp's state.
    // You don't need to follow this pattern, but it's an useful example.
    this.initialState = {
      // The info of the token (i.e. It's Name and symbol)
      tokenData: undefined,
      // The user's address and balance
      selectedAddress: undefined,
      networkError: undefined,
      currentMenuItem: 'home',
      // Search use
      SVGImage: undefined,
      SVGAttributes: undefined,
      SVGBackground: '#638595',
      // Browse use
      BrowseImage1: undefined,
      BrowseAttributes1: undefined,
      RandomId: Math.floor(Math.random() * (10000 - 1) + 1),
      BrowseBackground1: '#638595',

      //Customize use
      CustomizeIndex: 0,
      CustomizeImage: undefined,
      CustomizeAttributes: undefined,
      CustomizeBackground: '#638595',
    };

    this.state = this.initialState;
  }



  render() {

    let page;
    if (window.ethereum === undefined) {
      return <NoWalletDetected />;
    }

    if (!this.state.selectedAddress) {
      return (
        <ConnectWallet
          connectWallet={() => this._connectWallet()}
          networkError={this.state.networkError}
          dismiss={() => this._dismissNetworkError()}
        />
      );
    }

    const onClickMenu = (e) => {
      this.setState({ currentMenuItem: e.key });
    };



    if (this.state.currentMenuItem === 'home') {
      page = <Home></Home>;
    } else if (this.state.currentMenuItem === 'search') {
      page = <Search
        getIndexInfo={this._getIndexInfo}
        SVGImage={this.state.SVGImage}
        SVGAttributes={this.state.SVGAttributes}
        SVGBackground={this.state.SVGBackground}
      />;
    } else if (this.state.currentMenuItem === 'browse') {
      page = <Browse
        getBrowseInfo={this._getBrowseInfo}
        BrowseImage1={this.state.BrowseImage1}
        BrowseAttributes1={this.state.BrowseAttributes1}
        BrowseBackground1={this.state.BrowseBackground1}
        RandomId={this.state.RandomId}
      />;
    } else if (this.state.currentMenuItem === 'customize') {
      page = <Customize
        SetCustomizeParams={this._setCustomize}
        CustomizeIndex={this.state.CustomizeIndex}
        CustomizeImage={this.state.CustomizeImage}
        CustomizeAttributes={this.state.CustomizeAttributes}
        CustomizeBackground={this.state.CustomizeBackground}
      />
    }
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={onClickMenu}
            selectedKeys={[this.state.currentMenuItem]}
            items={items}
          />
        </Header>
        <Content
          style={{
            padding: '0 50px',
          }}
        >

          <div
            className="site-layout-content"
            style={{
              padding: '10px',
            }}
          >
            {page}
          </div>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Created by Scott Chu & Linsong You @2022
        </Footer>
      </Layout>
    );
  }


  async _connectWallet() {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Once we have the address, we can initialize the application.

    // First we check the network
    if (!this._checkNetwork()) {
      return;
    }

    this._initialize(selectedAddress);

  }

  _checkNetwork() {
    if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
      return true;
    }

    this.setState({
      networkError: 'Please connect Metamask to Localhost:8545'
    });

    return false;
  }

  _initialize(userAddress) {
    // This method initializes the dapp

    // We first store the user's address in the component's state
    this.setState({
      selectedAddress: userAddress,
    });

    // Then, we initialize ethers, fetch the token's data, and start polling
    // for the user's balance.

    // Fetching the token data and the user's balance are specific to this
    // sample project, but you can reuse the same initialization pattern.
    this._initializeEthers();

  }

  async _initializeEthers() {
    // We first initialize ethers by creating a provider using window.ethereum
    this._provider = new ethers.providers.Web3Provider(window.ethereum);

    // Then, we initialize the contract using that provider and the token's
    // artifact. You can do this same thing with your contracts.
    this._nft = new ethers.Contract(
      contractAddress.NFT,
      NFTData.abi,
      this._provider.getSigner(0)
    );

  }
  _getBrowseInfo = () => {
    this._getBrowseImage_Attributes(this.state.RandomId);
  }
  async _getBrowseImage_Attributes(i) {
    const result = await this._nft.punkImageSvg(i);
    const n_result = result.replace("data:image/svg+xml;utf8,", "");
    this.setState({ BrowseImage1: n_result });
    const attribute1 = await this._nft.punkAttributes(i);
    this.setState({ BrowseAttributes1: attribute1 });
    const backgroundColor = await this._nft.punkBackground(i);
    this.setState({ BrowseBackground1: backgroundColor });
  }

  _getIndexInfo = (index) => {
    this._getImage(index);
    this._getAttributes(index);
  }
  async _getImage(index) {
    const result = await this._nft.punkImageSvg(index);
    const n_result = result.replace("data:image/svg+xml;utf8,", "");
    this.setState({ SVGImage: n_result });
  }

  async _getAttributes(index) {
    const result = await this._nft.punkAttributes(index);
    this.setState({ SVGAttributes: result });
    const backgroundColor = await this._nft.punkBackground(index);
    this.setState({ SVGBackground: backgroundColor });
  }

  _setCustomize = (params1, params2, params3, params4, params5, params6, params7, params8) => {
    this._getCustomize_Attributes(params1, params2, params3, params4, params5, params6, params7, params8);
  }

  async _getCustomize_Attributes(params1, params2, params3, params4, params5, params6, params7, params8) {
    const i = await this._nft.punkEncode(params1, params2, params3, params4, params5, params6, params7, params8);
    console.log(i);
    const result = await this._nft.punkImageSvg(i);
    const n_result = result.replace("data:image/svg+xml;utf8,", "");
    this.setState({ CustomizeImage: n_result });
    const attribute1 = await this._nft.punkAttributes(i);
    this.setState({ CustomizeAttributes: attribute1 });
    const backgroundColor = await this._nft.punkBackground(i);
    this.setState({ CustomizeBackground: backgroundColor });
    this.setState({ CustomizeIndex: i })
  }

}

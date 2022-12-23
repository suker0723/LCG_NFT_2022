import React from 'react';
import { Divider, Typography } from 'antd';
import 'antd/dist/reset.css';
const { Title, Paragraph, Link } = Typography;


const Home = () => (
  <Typography>
    <Title>Introduction</Title>
    <Paragraph>
      This is a smart contract that encompasses all possible pictures of a certain dimension. We are inspired by Jorge Luis Borges’ short story The Library of Babel, an imaginative thought experiment where a heavenly library with infinite hexagonal rooms contains every possible book up to 410 pages.
      Instead of bringing about pious librarians seeking divine truths in infinity,
      our NFT of babel may present an interesting opportunity for us to explore the idea,
      the absurdity of digital ownership on blockchain.

    </Paragraph>

    <Title level={2}>Backgrounds and Resources</Title>
    <Paragraph>
      Non-fungible tokens (NFTs) have gained widespread attention as a means of demonstrating ownership of unique digital assets.
      However, the majority of NFT metadata is currently stored on centralized servers,
      which poses serious risks to the ownership and security of these tokens.
      In this project, we examined the technical aspects of Cryptopunks, a well-known project that utilizes on-chain NFTs. Through this analysis, we developed an enhanced on-chain solution that utilizes an invertible Linear Congruential Generator.
      This improvement is highly extensible, enabling users to search and customize their NFTs to a greater degree.
    </Paragraph>

    <Title level={2}>References</Title>
    <Paragraph>
      <ul>
        <li>
          <Link href="https://docs.ethers.org/v5/">Ether.js</Link>
        </li>
        <li>
          <Link href="https://hardhat.org/tutorial">Hardhat</Link>
        </li>
        <li>
          <Link href="https://reactjs.org/docs/create-a-new-react-app.html">React native</Link>
        </li>
        <li>
          <Link href="https://ant.design/">Ant Design</Link>
        </li>
      </ul>
    </Paragraph>


    <Divider />



  </Typography>


);

export default Home;
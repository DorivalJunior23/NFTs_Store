import React from "react";

import CommonSection from "../components/ui/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "A Bitcoin wallet provides a secure and decentralized way to store your valuable digital assets. With the power of blockchain technology, it ensures that your Bitcoin holdings are safeguarded and easily accessible. Seamlessly manage your investments, make transactions, and explore the world of decentralized finance.",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "The Coinbase wallet offers a user-friendly and reliable platform to manage your crypto portfolio. Explore a variety of cryptocurrencies and assets with ease. With its intuitive interface, you can buy, sell, and trade your favorite tokens. Feel confident in the security and convenience that Coinbase brings to the world of digital finance.",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "Metamask is your gateway to the decentralized web. This Ethereum-based wallet empowers you to seamlessly interact with decentralized applications (dApps), manage your Ethereum assets, and engage in the world of blockchain innovation. Enjoy the freedom of secure and borderless transactions, all from the comfort of your browser.",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Authereum",
    desc: "Authereum introduces a new level of simplicity and security to the world of crypto. Through its innovative approach, Authereum ensures that managing your digital assets is both convenient and protected. Seamlessly access decentralized applications and take control of your crypto journey. Trust in Authereum to provide a cutting-edge solution for your blockchain needs.",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <p>
                Immerse yourself in the world of digital assets and decentralized finance. Seamlessly connect your preferred cryptocurrency wallet to unlock a universe of possibilities. Whether you're an experienced crypto enthusiast or just starting your journey, connecting your wallet opens doors to exploring, trading, and owning unique NFTs that capture the essence of creativity and innovation.
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
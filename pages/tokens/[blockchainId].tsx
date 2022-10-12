import Layout from "../../components/Layout";
import TokenList from "../../components/TokenList";
import axios from "axios";
import { useEffect, useState } from "react";

const TokenPage = ({ blockchainId }) => {
    const [tokenList, setTokenList] = useState();

    useEffect(() => {
        getBlockchainTokens();
    }, [blockchainId])

    const getBlockchainTokens = async () => {
        try{
            const tokenData = await axios.get(`https://api.1inch.io/v4.0/${blockchainId}/tokens`)
            setTokenList(tokenData?.data);
        } catch(err){
            console.log(err)
        }
    }
  return (
    <Layout title="Home | Next.js + TypeScript Example Blockchain">
      <TokenList tokenData = {tokenList}/>
    </Layout>
  );
};

export default TokenPage;

export async function getServerSideProps({ query }: { query: any }) {
  const blockchainId = query?.blockchainId;
  return {
    props: { blockchainId },
  };
}

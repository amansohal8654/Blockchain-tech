import Layout from "../../components/Layout";
import LimitOrders from "../../components/LimitOrders";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const LimitOrdersPage = ({ blockchainId }) => {
    const [limitOrders, setLimitOrders] = useState();

    useEffect(() => {
        getLimitOrder();
      }, [blockchainId]);
    
      const getLimitOrder = useCallback(async () => {
        try {
          const limitOrderData = await axios.get(
            `https://limit-orders.1inch.io/v2.0/${blockchainId}/limit-order/all?limit=100`
          );
          setLimitOrders(limitOrderData?.data);
        } catch (err) {
          console.log(err);
        }
      }, [blockchainId]);
  return (
    <Layout title="Home | Next.js + TypeScript Example Blockchain">
      <LimitOrders limitOrders={limitOrders}/>
    </Layout>
  );
};

export default LimitOrdersPage 

export async function getServerSideProps({ query }: { query: any }) {
  const blockchainId = query?.blockchainId;
  return {
    props: { blockchainId },
  };
}

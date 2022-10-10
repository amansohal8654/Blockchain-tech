import Link from 'next/link'
import Layout from '../components/Layout'
import BlockchainList from '../components/BlockchainList'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example Blockchain">
    <BlockchainList />
  </Layout>
)

export default IndexPage

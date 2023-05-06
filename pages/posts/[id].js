import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';


// export async function getServerSideProps() {
//   const postData = await getPostData('first-post')

//   return {
//     props: {
//       postData
//     }
//   }
// }
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
     paths,
     fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function SecondPost({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    );
  }
import { GetStaticProps, NextPage } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

import PageLayout from '../../layouts/PageLayout';
import TreeCard from '../../components/TreeCard';

import { Tree } from '../../utils/types';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL!);

interface TreesPageProps {
  trees: Tree[];
}

const TreesPage: NextPage<TreesPageProps> = ({ trees }) => {
  return (
    <PageLayout
      seo={{ title: 'Trees - Catalog', slug: '/catalog/trees' }}
      breadcrumbs={[
        { name: 'Catalog', href: '/catalog' },
        { name: 'Trees', href: '/catalog/trees' },
      ]}
      heading="Trees"
    >
      <div className="">
        <h2 className="sr-only">Trees</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {trees.map(tree => (
            <TreeCard key={tree.slug} tree={tree} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query Trees {
      trees {
        slug
        exposure
        foliageColor
        growthRate
        height
        image {
          url
        }
        name
        scientificName
        spread
        waterUse
        zone
      }
    }
  `;

  const data = await client.request(query);

  return {
    props: {
      trees: data.trees,
    },
  };
};

export default TreesPage;

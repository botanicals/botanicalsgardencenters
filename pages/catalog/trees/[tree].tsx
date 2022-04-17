import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

import PageLayout from '../../../layouts/PageLayout';

import { Tree } from '../../../utils/types';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL!);

interface TreePageProps {
  tree: Tree;
}

const TreePage: NextPage<TreePageProps> = ({ tree }) => {
  console.log({ tree });
  return (
    <PageLayout
      seo={{ title: tree.name, slug: tree.slug }}
      breadcrumbs={[
        { name: 'Catalog', href: '/catalog' },
        { name: 'Trees', href: '/catalog/trees' },
        { name: tree.name, href: `/catalog/trees/${tree.slug}` },
      ]}
      heading={tree.name}
    >
      <div className="grid items-start grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
        <div className="">
          <div className="px-4 py-2 bg-black">
            <p className="text-gray-300">{tree.scientificName}</p>
            <h2 className="text-3xl font-semibold tracking-tight uppercase text-primary-green sm:text-4xl">{tree.name}</h2>
          </div>

          <dl className="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {[
              {
                name: 'Zone',
                description: tree.zone,
              },
              {
                name: 'Height',
                description: tree.height,
              },
              {
                name: 'Spread',
                description: tree.spread,
              },
              {
                name: 'Growth Rate',
                description: tree.growthRate,
              },
              {
                name: 'Exposure',
                description: tree.exposure,
              },
              {
                name: 'Water Use',
                description: tree.waterUse,
              },
              {
                name: 'Foliage Color',
                description: tree.foliageColor,
              },
            ].map(feature => (
              <div key={feature.name} className="px-4 py-2 pt-4 border-t border-gray-200">
                <dt className="font-medium uppercase text-primary-green">{feature.name}</dt>
                <dd className="mt-2 text-base font-medium text-gray-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tree.image?.url || 'https://via.placeholder.com/800'} alt={tree.name} className="bg-gray-100 rounded-sm" />
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Trees {
      trees {
        slug
      }
    }
  `;

  const data = await client.request(query);

  console.log({ slugs: data.trees });

  return {
    paths: data.trees.map((tree: { slug: string }) => ({ params: { tree: tree.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { tree } = context.params!;

  console.log({ tree });

  const query = gql`
    query Tree($slug: String!) {
      tree(where: { slug: $slug }) {
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

  const data = await client.request(query, { slug: tree });

  console.log({ tree: data.tree });

  return {
    props: {
      tree: data.tree,
    },
  };
};

export default TreePage;

import { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

import { SearchIcon } from '@heroicons/react/solid';

import PageLayout from '../../layouts/PageLayout';
import TreeCard from '../../components/TreeCard';

import { Tree } from '../../utils/types';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL!);

interface TreesPageProps {
  treesData: Tree[];
}

const TreesPage: NextPage<TreesPageProps> = ({ treesData }) => {
  const [trees, setTrees] = useState<Tree[]>(treesData);

  const handleSearch = (searchTerm: string) => {
    const filtered = treesData.filter(tree => {
      return tree.name.toLowerCase().includes(searchTerm.toLowerCase()) || tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setTrees(filtered);
  };

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
        <div className="flex items-center justify-end mb-8">
          <div className="relative w-full rounded-sm shadow-sm md:w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full pl-10 border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
              placeholder="Search..."
              onChange={e => handleSearch(e.target.value)}
            />
          </div>
        </div>

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
        zones
      }
    }
  `;

  const data = await client.request(query);

  return {
    props: {
      treesData: data.trees,
    },
  };
};

export default TreesPage;

import { GetStaticProps, NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import CategoryCard from '../components/CategoryCard';

import { Category } from '../utils/types';

interface CatalogPageProps {
  categories: Category[];
}

const CatalogPage: NextPage<CatalogPageProps> = ({ categories }) => {
  return (
    <PageLayout seo={{ title: 'Catalog', slug: '/catalog' }} breadcrumbs={[{ name: 'Catalog', href: '/catalog' }]} heading="Catalog">
      <div className="bg-green-200">
        <h2 className="sr-only">Categories</h2>
        <div className="grid grid-cols-1 gap-y-10">
          {categories.map(category => (
            <CategoryCard key={category.href} category={category} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = [
    {
      name: 'Trees',
      href: 'trees',
      image: { url: '/images/hedge-maple.png' },
    },
  ];

  return {
    props: {
      categories,
    },
  };
};

export default CatalogPage;

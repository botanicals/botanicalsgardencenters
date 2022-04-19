import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';

interface IndexPageProps {
  name: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ name }) => {
  return (
    <PageLayout seo={{ title: '', slug: '/' }} breadcrumbs={[]} heading="Botanicals Garden Centers">
      <div className="relative overflow-hidden bg-black border-2 border-black rounded-sm">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hedge-maple.png" alt="" className="object-cover object-center w-full h-full" />
        </div>
        <div className="relative px-6 py-32 bg-black bg-opacity-70 sm:py-40 sm:px-12 lg:px-16">
          <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight uppercase text-primary-green sm:text-5xl">Explore our catalog</h2>
            {/* <p className="mt-3 text-xl text-white">
              Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least
              you have a really nice desk setup.
            </p> */}
            <Link href="/catalog">
              <a className="block w-full px-8 py-3 mt-8 text-base font-medium uppercase border-2 rounded-sm hover:text-white hover:border-transparent hover:bg-primary-green border-primary-green text-primary-green sm:w-auto">
                Explore catalog
              </a>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      name: 'Index Page',
    },
  };
};

export default IndexPage;

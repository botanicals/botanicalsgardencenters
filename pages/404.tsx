import { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';

const NotFoundPage: NextPage = () => {
  return (
    <PageLayout seo={{ title: 'Not Found', slug: '' }} breadcrumbs={[]} heading="">
      <div className="min-h-full px-4 py-16 bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <div className="sm:flex">
            <p className="text-4xl font-bold text-black sm:text-5xl">404</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
              </div>
              <div className="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white border border-transparent rounded-md shadow-sm bg-primary-green hover:bg-primary-green/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green"
                >
                  Go back home
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-transparent rounded-md text-primary-green bg-primary-green/10 hover:bg-primary-green/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green/80"
                >
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;

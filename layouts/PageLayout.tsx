import Seo, { Metadata } from './components/Seo';
import Breadcrumbs, { Breadcrumb } from './components/Breadcrumbs';
import Link from 'next/link';

interface PageLayoutProps {
  seo: Metadata;
  breadcrumbs: Breadcrumb[];
  heading: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ seo, breadcrumbs, heading, children }) => {
  return (
    <>
      <Seo metadata={seo} />
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <header className="bg-black">
            <div className="flex items-center h-auto px-4 py-8 mx-auto sm:h-16 max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-between w-full">
                <Link href="/">
                  <a>
                    <div className="flex flex-col items-center justify-center space-x-2 sm:flex-row">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-10 h-10" src="/assets/botanicals-icon.png" alt="Botanicals" />
                      <h1 className="mt-4 text-2xl font-medium text-center uppercase sm:mt-0 text-primary-green">Botanicals Garden Centers</h1>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </header>

          <div className="bg-white shadow">
            <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="mt-2 md:flex md:items-center md:justify-between">
                  <div className="">
                    <h2 className="text-4xl font-bold text-gray-900">{heading}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {children}
            {/* /End replace */}
          </main>
        </div>

        <footer className="mt-4">
          <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <p className="text-sm text-center text-gray-400">&copy; {new Date().getFullYear()} Botanicals, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PageLayout;

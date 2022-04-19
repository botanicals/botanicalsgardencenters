import Link from 'next/link';

import { ChevronRightIcon } from '@heroicons/react/solid';

export interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.VFC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div>
      <nav className="overflow-y-hidden" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li className="shrink-0">
            <div className="flex">
              <Link href="/">
                <a className="font-medium text-gray-500 text-md hover:text-gray-700">Garden Centers</a>
              </Link>
            </div>
          </li>
          {breadcrumbs.map(crumb => (
            <li key={crumb.href}>
              <div className="flex items-center">
                <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
                <Link href={crumb.href}>
                  <a className="flex-shrink-0 ml-4 font-medium text-gray-500 text-md hover:text-gray-700">{crumb.name}</a>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;

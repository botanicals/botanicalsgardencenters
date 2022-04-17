import Link from 'next/link';

import { Category } from '../utils/types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.VFC<CategoryCardProps> = ({ category }) => {
  return (
    <Link key={category.name} href={'/catalog/' + category.href}>
      <a className="relative flex flex-col p-6 overflow-hidden transition-all border-4 border-white shadow-lg rounded-xs h-80 group">
        <span aria-hidden="true" className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={category.image?.url} alt="" className="object-cover object-center w-full h-full" />
        </span>
        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-40">
          <span className="text-4xl font-bold uppercase text-gray-50">{category.name}</span>
        </span>
      </a>
    </Link>
  );
};

export default CategoryCard;

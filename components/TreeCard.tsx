import { Tree } from '../utils/types';

interface TreeCardProps {
  tree: Tree;
}

const TreeCard: React.VFC<TreeCardProps> = ({ tree }) => {
  return (
    <a key={tree.slug} href={'/catalog/trees/' + tree.slug} className="bg-black rounded-sm group" title={tree.name}>
      <div className="shadow-lg">
        <div className="w-full overflow-hidden border-2 border-black rounded-t-sm aspect-w-1 aspect-h-1 xl:aspect-w-8 xl:aspect-h-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tree.image?.url || 'https://via.placeholder.com/150'} alt={tree.name} className="object-cover object-center w-full h-full group-hover:opacity-75" />
        </div>
        <div className="px-4 py-2 bg-black rounded-b-sm">
          <span className="text-base text-gray-400 ">{tree.scientificName}</span>
          <p className="mt-1 mb-2 text-xl font-medium text-primary-green">{tree.name}</p>
        </div>
      </div>
    </a>
  );
};

export default TreeCard;

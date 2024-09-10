export function PostCardSkeleton() {
  return (
    <div className="w-full h-[225px] md:w-[48%] lg:w-[30%] xl:w-[32%]  rounded-[10px] bg-gray-50 p-[20px] flex flex-col "></div>
  );
}

const numberOfSkeletons = [1, 2, 3, 4, 5, 6];

export function PostCardsSkeleton() {
  return (
    <div className="flex flex-wrap gap-[20px] py-[20px] px-[20px] lg:px-[50px]  2xl:px-[200px]">
      {numberOfSkeletons.map((item, index) => (
        <PostCardSkeleton key={index} />
      ))}
    </div>
  );
}

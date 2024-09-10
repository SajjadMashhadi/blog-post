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

export function FormSkeleton() {
  return (
    <div className="flex flex-col justify-around items-center gap-[10px] my-[50px]">
      <div className="h-[20px]"></div>

      <div className="w-full flex flex-col sm:flex-row px-[20px] sm:p-0 justify-center gap-[20px]">
        <label className="w-[80px] " htmlFor="title"></label>
        <div className="w-full sm:w-[400px] h-[40px] bg-gray-50  rounded-[5px] p-[5px]"></div>
      </div>
      <div className="h-[20px] "></div>
      <div className=" w-full flex flex-col px-[20px] sm:p-0 sm:flex-row justify-center gap-[20px]">
        <label className="w-[80px]" htmlFor="content"></label>
        <div className="w-full sm:w-[400px] bg-gray-50  h-[300px] rounded-[5px] p-[5px]"></div>
      </div>
      <div className="p-[5px] px-[20px] h-[30px] w-[100px] bg-gray-50   rounded-[5px]  mt-[50px]"></div>
    </div>
  );
}

export function PostSkeleton() {
  return (
    <div className="flex flex-col gap-[50px] mt-[20px] items-center capitalize">
      <h2 className="text-[24px] font-bold h-[40px] w-[200px] rounded-[10px] capitalize bg-gray-50"></h2>
      <p className="text-gray-500 w-[800px] h-[300px] text-justify  rounded-[10px] capitalize bg-gray-50"></p>
    </div>
  );
}

function TransactionInfo() {
  const price = '120,428.50';

  return (
    <div className='flex gap-x-5 px-[70px] items-center mt-[16px] mb-[32px]'>
      <img
        className='h-[41px] w-[41px] object-contain rounded-full'
        src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00601dc55c3be303dad8c666054962d4d6763d9c_full.jpg'
        alt=''
      />
      <div className='flex flex-col flex-y-[5px] font-inter'>
        <div className='leading-[21px] text-darkGrey'>Account **** 1234</div>
        <div className='text-2xl font-extrabold '>${price}</div>
      </div>
    </div>
  );
}

export default TransactionInfo;

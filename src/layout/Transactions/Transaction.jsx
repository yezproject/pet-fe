import ic_unfold_more from '@/assets/images/icons/ic_unfold_more.svg';
import TransactionInfo from '@/layout/Transactions/TransactionInfo';
import TransactionMenu from '@/layout/Transactions/TransactionMenu';
import TransactionTable from '@/layout/Transactions/TransactionTable.jsx';

const Transactions = () => {
  const transactions = [
    {
      key: 1,
      date: new Date().getTime(),
      paymentTo: 'paymentTo 1',
      type: 'Type 1',
      fee: 5,
      amount: 100000,
    },
    {
      key: 2,
      date: new Date().getTime(),
      paymentTo: 'paymentTo 2',
      type: 'Type 2',
      fee: 5,
      amount: 200000,
    },
    {
      key: 3,
      date: new Date().getTime(),
      paymentTo: 'paymentTo 3',
      type: 'Type 3',
      fee: 5,
      amount: 300000,
    },
  ];
  const handleSort = (a, b) => {
    const A = a.toUpperCase();
    const B = b.toUpperCase();
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
  };
  const columns = [
    {
      title: (
        <div className='flex items-center'>
          Date <img src={ic_unfold_more} className='block ml-2 h-[18px] w-[18px] object-contain' alt='icon_fold' />
        </div>
      ),
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date - b.date,
      className: 'font-inter text-[14px] leading-[21px] text-darkGrey',
    },
    {
      title: (
        <div className='flex items-center'>
          Payment To{' '}
          <img src={ic_unfold_more} className='block ml-2 h-[18px] w-[18px] object-contain' alt='icon_fold' />
        </div>
      ),
      dataIndex: 'paymentTo',
      key: 'paymentTo',
      sorter: (a, b) => handleSort(a.paymentTo, b.paymentTo),
      className: 'font-inter text-[14px] font-bold leading-[21px] text-darkColor',
    },
    {
      title: (
        <div className='flex items-center'>
          Type <img src={ic_unfold_more} className='block ml-2 h-[18px] w-[18px] object-contain' alt='icon_fold' />
        </div>
      ),
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => handleSort(a.type, b.type),
      className: 'font-inter text-[14px] leading-[21px] text-darkGrey',
    },
    {
      title: (
        <div className='flex items-center'>
          Fee <img src={ic_unfold_more} className='block ml-2 h-[18px] w-[18px] object-contain' alt='icon_fold' />
        </div>
      ),
      dataIndex: 'fee',
      key: 'fee',
      sorter: (a, b) => a.fee - b.fee,
      className: 'font-inter text-[14px] leading-[21px] text-darkColor',
    },
    {
      title: (
        <div className='flex items-center'>
          Amount <img src={ic_unfold_more} className='block ml-2 h-[18px] w-[18px] object-contain' alt='icon_fold' />
        </div>
      ),
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a, b) => a.amount - b.amount,
      className: 'font-inter text-[14px] font-bold leading-[21px] text-darkColor',
    },
  ];

  return (
    <div className='w-full h-full'>
      <TransactionInfo />
      <TransactionMenu />
      <TransactionTable transactions={transactions} columns={columns} />
    </div>
  );
};

export default Transactions;

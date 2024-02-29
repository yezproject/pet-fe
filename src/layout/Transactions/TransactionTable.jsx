import { Table } from 'antd';
import PropTypes from 'prop-types';

const TransactionTable = ({ transactions, columns }) => {
  return (
    <div className="px-[70px] table-custom">
      <Table
        dataSource={transactions}
        columns={columns}
        bordered={false}
        pagination={{
          position: ['none'],
        }}
      />
    </div>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.array,
  columns: PropTypes.array,
};
export default TransactionTable;

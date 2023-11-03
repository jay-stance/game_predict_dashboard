import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import "./Table.css";

const NoData = () => {
  return <div>No Data to be displayed</div>;
};

const Table = ({
  data,
  columns,
  title,
  handleSelection,
  toggledClearRows,
  handleRowClicked,
  totalRows,
  handlePageChange,
  handlePerRowsChange,
}) => {
  // A super simple expandable component.
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  return (
    <div>
      <DataTableExtensions exportHeaders columns={columns} data={data}>
        <DataTable
          // dense
          onRowClicked={handleRowClicked}
          title={title}
          highlightOnHover
          persistTableHead
          noDataComponent={NoData}
          columns={columns}
          data={data}
          selectableRows
          onSelectedRowsChange={handleSelection}
          exwandableRowsComponent={ExpandedComponent}
          clearSelectedRows={toggledClearRows}
          paginationPerPage={100}
          paginationRowsPerPageOptions={[100]}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
        />
      </DataTableExtensions>
    </div>
  );
};

export default Table;

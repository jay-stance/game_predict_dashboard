import React, { useState, useEffect } from "react";

import Table from "../../components/Table/Table";
import { users_Table_Column, formatDate } from "../../utils/table_columuns";
import { getAllUsersService } from "../../services/usersService";

export default function Users() {
  const [clearTable, setClearTable] = useState(true);
  const [users, setusers] = useState([])

  // pagination
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(50);

  const handlePageChange = (page) => {};

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  const handleSelection = ({ allSelected, selectedCount, selectedRows }) => {
    const ids = selectedRows.map((row) => {
      return row._id;
    });
    // setSelectedIds(ids);
  };

  const getUsers = async() => {
    const res = await getAllUsersService()
    console.log("users res \b\b", res)
    if(!res) return

    setusers(res)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <Table
        title="All Users"
        columns={users_Table_Column}
        data={users}
        handleSelection={handleSelection}
        toggledClearRows={clearTable}
        // handleRowClicked={(row) => navigate(`/userProfile/${row._id}`)}
        // pagination
        totalRows={totalRows}
        handlePageChange={handlePageChange}
        handlePerRowsChange={handlePerRowsChange}
      />
    </div>
  );
}

import './table.scss';
import React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { usePagination } from '@table-library/react-table-library/pagination';
import { useSort } from '@table-library/react-table-library/sort';

function Table({ users }) {
  const theme = useTheme(getTheme());
  const [search, setSearch] = React.useState("");

  const filteredUsers = users.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const pagination = usePagination({ nodes: filteredUsers }, {
    state: { page: 0, size: 10 },
  });

  const sort = useSort(
    { nodes: filteredUsers },
    {},
    {
      sortFns: {
        FIRST_NAME: (array) => array.sort((a, b) => a.firstName.localeCompare(b.firstName)),
        LAST_NAME: (array) => array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
        DOB: (array) => array.sort((a, b) => new Date(a.dob) - new Date(b.dob)),
        START_DATE: (array) => array.sort((a, b) => new Date(a.startDate) - new Date(b.startDate)),
        STREET: (array) => array.sort((a, b) => a.street.localeCompare(b.street)),
        CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
        STATE: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
        ZIP_CODE: (array) => array.sort((a, b) => a.zipCode.localeCompare(b.zipCode)),
        DEPARTMENT: (array) => array.sort((a, b) => a.department.localeCompare(b.department)),
      }
    }
  );

  const COLUMNS = [
    { label: 'First Name', renderCell: (item) => item.firstName, sort: { sortKey: 'FIRST_NAME' } },
    { label: 'Last Name', renderCell: (item) => item.lastName, sort: { sortKey: 'LAST_NAME' } },
    { label: 'Date of Birth', renderCell: (item) => item.dob, sort: { sortKey: 'DOB' } },
    { label: 'Start Date', renderCell: (item) => item.startDate, sort: { sortKey: 'START_DATE' } },
    { label: 'Street', renderCell: (item) => item.street, sort: { sortKey: 'STREET' } },
    { label: 'City', renderCell: (item) => item.city, sort: { sortKey: 'CITY' } },
    { label: 'State', renderCell: (item) => item.state, sort: { sortKey: 'STATE' } },
    { label: 'Zip Code', renderCell: (item) => item.zipCode, sort: { sortKey: 'ZIP_CODE' } },
    { label: 'Department', renderCell: (item) => item.department, sort: { sortKey: 'DEPARTMENT' } }
  ];

  const data = {
    nodes: pagination.state.nodes || filteredUsers.map((user, index) => ({ ...user, id: `user-${index}` }))
  };

  return (
    <div className="table__Container">
      <div className='w__Search'>
        <label htmlFor="search">
          Search:
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search employees"
          />
        </label>
      </div>
      <br />

      <CompactTable
  columns={COLUMNS}
  data={data}
  theme={theme}
  pagination={pagination}
  sort={sort}
  role="table"
  aria-labelledby="employeeTable"
>
  {data.nodes.map((node, index) => (
    <tr role="row" key={node.id}>
      {COLUMNS.map((column) => (
        <td role="cell" key={column.label}>
          {column.renderCell(node)}
        </td>
      ))}
    </tr>
  ))}
</CompactTable>

      <br />
      <div className="pagination__Controls">
        <span>Total Pages: {pagination.state.getTotalPages(filteredUsers)}</span>

        <div className="pagination__Buttons">
          {pagination.state.getPages(filteredUsers).map((_, index) => (
            <button
              key={`page-${index}`}
              type="button"
              className={`pagination__Button ${pagination.state.page === index ? 'active' : ''}`}
              onClick={() => pagination.fns.onSetPage(index)}
              aria-label={`Go to page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;

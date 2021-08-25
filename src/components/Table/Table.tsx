import { TableInstance } from "react-table";
import * as T from './Table.styles'


export default function Table<T extends Object>({instance} : {instance: TableInstance<T>}) {


  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = instance


  return (
    <T.Wrapper {...getTableProps()} cellPadding={0} cellSpacing={0}>
      <T.Heading>
        {
          headerGroups.map(headerGroup => (
            <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))
              }
            </T.HeadingRow>
          ))
        }
      </T.Heading>

      <T.Body {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return <T.BodyRow {...row.getRowProps()}>
              {
                row.cells.map(cell => {
                  return <T.BodyCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </T.BodyCell>
                })
              }
            </T.BodyRow>
          })
        }
      </T.Body>
    </T.Wrapper>
  )

}
import { useState } from 'react';

import ReactApexChart from 'react-apexcharts';

import { useTheme } from '@mui/material/styles';

// utils
import { Button, Box, Card, Table, TableHead, TableRow, TableBody, TableCell, Typography } from '@mui/material';
import { fNumber } from '../../utils/formatNumber';

// components
import Label from '../../components/Label';

// sections
import MoreMenu from './MoreMenu';

// ----------------------------------------------------------------------

export default function AppTables({ user, title, tableHead, data }) {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleDeleteProduct = (productId) => {
    const deleteProduct = data.filter((product) => product.id !== productId);
    setSelected([]);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.length) : 0;
  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHead.map((headCell, index) => (
                <TableCell key={index} align={headCell.alignRight ? 'right' : 'left'}>
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((row, index) => {
              const { id, audienceName, audienceType, size, change, chartData } = row;

              return (
                <TableRow hover key={index} tabIndex={-1}>
                  <TableCell>
                    <Typography variant="subtitle2" noWrap>
                      {id}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="subtitle2" noWrap>
                      {audienceName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" noWrap>
                      {audienceType}
                    </Typography>
                  </TableCell>
                  <TableCell>{fNumber(size)}</TableCell>
                  <TableCell>
                    <Label
                      variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                      color={(change < 0 && 'error') || (change < 50 && 'warning') || 'success'}
                    >
                      {change}%
                    </Label>
                  </TableCell>

                  <TableCell align="right">
                    <ReactApexChart
                      type="area"
                      series={[{ data: chartData }]}
                      width={80}
                      height={36}
                      options={{
                        colors: [(change < 0 && '#F6543E') || (change < 50 && '#6374C3') || '#30E0A1'],
                        chart: { sparkline: { enabled: true } },
                        stroke: {
                          curve: 'smooth',
                          width: 0.5,
                        },

                        tooltip: {
                          x: { show: false },
                          y: {
                            formatter: (seriesName) => fNumber(seriesName),
                            title: {
                              formatter: () => '',
                            },
                          },
                          marker: { show: false },
                        },
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <MoreMenu user={user} productName={audienceName} onDelete={() => handleDeleteProduct(id)} />
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}

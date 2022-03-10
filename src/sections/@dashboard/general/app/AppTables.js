import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
// utils
import {
  Button,
  Box,
  Card,
  CardHeader,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
} from '@mui/material';
import { fNumber } from '../../../../utils/formatNumber';

// components
import Label from '../../../../components/Label';
import Scrollbar from '../../../../components/Scrollbar';
import Iconify from '../../../../components/Iconify';
import AppModal from '../../../../components/AppModal';

// sections
import MoreMenu from './MoreMenu';

// ----------------------------------------------------------------------

export default function AppTables({ user, title, tableHead, data }) {
  const navigate = useNavigate();
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    if (!user) {
      setModalOpen(true);
    } else {
      console.log(user);
    }
  };

  const handleDeleteProduct = (productId) => {
    const deleteProduct = data.filter((product) => product.id !== productId);
    setSelected([]);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.length) : 0;

  return (
    <Card>
      <AppModal
        type="auth"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title={'You need an Account to use this feature'}
      />
      <CardHeader
        title={user ? title : <>Demo {title}</>}
        action={
          title === 'Custom Audience' && (
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={handleModal}
              sx={{ color: '#605BFF', border: '0.5px solid #605BFF' }}
            >
              + Create
            </Button>
          )
        }
      />
      <Scrollbar>
        <Box sx={{ p: 2 }}>
          <TableContainer>
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
                {data?.slice(0, 5)?.map((row, index) => {
                  const { id, audienceName, size, change } = row;

                  return (
                    <TableRow hover key={index} tabIndex={-1}>
                      {title === 'Custom Audience' && (
                        <TableCell>
                          <Typography variant="subtitle2" noWrap>
                            {id}
                          </Typography>
                        </TableCell>
                      )}
                      <TableCell>
                        <Typography variant="subtitle2" noWrap>
                          {audienceName}
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
                        <MoreMenu productName={audienceName} onDelete={() => handleDeleteProduct(id)} />
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
          </TableContainer>

          <Box sx={{ pr: 2, textAlign: 'right' }}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ mt: 2, color: '#000', border: '0.5px solid #000' }}
              onClick={() => navigate('/dashboard/search')}
            >
              View All
            </Button>
          </Box>
        </Box>
      </Scrollbar>
    </Card>
  );
}

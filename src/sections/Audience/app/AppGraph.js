import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';
import BaseOptionChartArea from '../../../components/chart/BaseOptionChartArea';
// ----------------------------------------------------------------------

AppGraph.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function AppGraph({ type, title, chartData }) {
  // const [seriesData, setSeriesData] = useState(2019);

  // const handleChangeSeriesData = (event) => {
  //   setSeriesData(Number(event.target.value));
  // };

  const chartOptions = merge(BaseOptionChart('#605BFF'), {
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  });

  const chartOptionsArea = merge(BaseOptionChartArea('#5BC4FF', '#AE8FF7'), {
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  });

  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader
        title={title}
        // subheader="(+43%) than last year"
        // action={
        //   <TextField
        //     select
        //     fullWidth
        //     value={seriesData}
        //     SelectProps={{ native: true }}
        //     onChange={handleChangeSeriesData}
        //     sx={{
        //       '& fieldset': { border: '0 !important' },
        //       '& select': {
        //         pl: 1,
        //         py: 0.5,
        //         pr: '24px !important',
        //         typography: 'subtitle2',
        //       },
        //       '& .MuiOutlinedInput-root': {
        //         borderRadius: 0.75,
        //         bgcolor: 'background.neutral',
        //       },
        //       '& .MuiNativeSelect-icon': {
        //         top: 4,
        //         right: 0,
        //         width: 20,
        //         height: 20,
        //       },
        //     }}
        //   >
        //     {CHART_DATA.map((option) => (
        //       <option key={option.year} value={option.year}>
        //         {option.year}
        //       </option>
        //     ))}
        //   </TextField>
        // }
      />

      {chartData?.map((item, index) => (
        <Box key={index} sx={{ mt: 3, mx: 3 }} dir="ltr">
          <ReactApexChart
            type={type}
            series={item.data}
            options={type === 'area' ? chartOptionsArea : chartOptions}
            height={type === 'area' ? 390 : 320}
          />
        </Box>
      ))}
    </Card>
  );
}

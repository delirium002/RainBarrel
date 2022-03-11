import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Stack, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { LoadingButton, DateRangePicker, DatePicker } from '@mui/lab';

// hooks
import useAuth from '../../hooks/useAuth';
// components
import { FormProvider, RHFSelect, RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

export default function CustomAudienceComponent() {
  const { enqueueSnackbar } = useSnackbar();

  const [optMark, setOptMark] = useState(false);

  const [value, setValue] = useState([null, null]);

  const { user } = useAuth();

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required'),
  });

  const defaultValues = {
    displayName: user?.displayName || '',
    email: user?.email || '',
    photoURL: user?.photoURL || '',
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || '',
    address: user?.address || '',
    state: user?.state || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    about: user?.about || '',
    isPublic: user?.isPublic || '',
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    // setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  };

  const industries = [
    { title: 'IT' },
    { title: 'Marketing' },
    { title: 'Finance' },
    { title: 'Sales' },
    { title: 'Engineering' },
    { title: 'Design' },
    { title: 'HR' },
    { title: 'Accounting' },
    { title: 'Admin' },
    { title: 'Other' },
  ];

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 4,
                columnGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField color="secondary" name="email" label="Email" sx={{ backgroundColor: '#FAFAFB' }} />
              <RHFTextField color="secondary" name="name" label="Audience Name" sx={{ backgroundColor: '#FAFAFB' }} />

              <RHFTextField color="secondary" name="client" label="Client Name" sx={{ backgroundColor: '#FAFAFB' }} />

              <DateRangePicker
                startText="Start date for device data"
                endText="End date for device data"
                calendars={1}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
                renderInput={(startProps, endProps) => (
                  <>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </>
                )}
              />

              <DatePicker
                label="End date for campaign"
                // value={value}
                onChange={(newValue) => {
                  // setValue(newValue);
                }}
                format="dd/MM/yyyy"
                style={{ backgroundColor: '#FAFAFB' }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <FormControlLabel
                control={<Checkbox color="secondary" value={optMark} onChange={() => setOptMark(!optMark)} />}
                label="Opt-in Marketing"
              />
            </Box>
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" color="secondary" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

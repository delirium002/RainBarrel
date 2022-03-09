import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Stack, Checkbox, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import { FormProvider, RHFSelect, RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();

  const [optMark, setOptMark] = useState(false);

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
    setValue,
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
              <RHFTextField color="secondary" name="displayName" label="Name" sx={{ backgroundColor: '#FAFAFB' }} />
              <RHFTextField color="secondary" name="email" label="Email Address" sx={{ backgroundColor: '#FAFAFB' }} />

              <RHFTextField
                color="secondary"
                name="phoneNumber"
                label="Phone Number"
                sx={{ backgroundColor: '#FAFAFB' }}
              />
              <RHFTextField
                color="secondary"
                name="companyName"
                label="Company Name"
                sx={{ backgroundColor: '#FAFAFB' }}
              />

              <RHFSelect
                color="secondary"
                name="industry"
                label="Industry"
                placeholder="Industry"
                sx={{ backgroundColor: '#FAFAFB' }}
              >
                <option value="" />
                {industries?.map((option, index) => (
                  <option key={index} value={option.title}>
                    {option.title}
                  </option>
                ))}
              </RHFSelect>
              <RHFTextField color="secondary" name="position" label="Position" sx={{ backgroundColor: '#FAFAFB' }} />

              <RHFTextField
                color="secondary"
                name="location"
                label="Location (City)"
                sx={{ backgroundColor: '#FAFAFB' }}
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

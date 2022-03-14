import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Stack } from '@mui/material';
import { LoadingButton, DateRangePicker, DatePicker } from '@mui/lab';

// hooks
import useAuth from '../../hooks/useAuth';
// components
import { FormProvider } from '../../components/hook-form';

import IntroInputs from './IntroInputs';
import Selects from './Selects';
import Activations from './Activations';
import Geography from './Geography';
import VisitorInput from './VisitorInput';
// ----------------------------------------------------------------------

export default function CustomAudienceComponent() {
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

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Box sx={{ p: 3 }}>
            <IntroInputs />
            <VisitorInput />
            <Selects />
            <Geography />
            <Activations />

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 4 }}>
              <LoadingButton size="large" type="submit" variant="contained" color="secondary" loading={isSubmitting}>
                Request Audience
              </LoadingButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

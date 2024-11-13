import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Welcome() {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Application!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          You have successfully logged in using OTP.
        </Typography>
      </Box>
    </Container>
  );
}

export default Welcome;

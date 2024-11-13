// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// function Login() {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState(1); // 1: Request OTP, 2: Verify OTP
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const requestOtp = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/api/send-otp', { email });
//       setMessage(response.data.message);
//       setStep(2); // Go to OTP verification step
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Error sending OTP');
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/api/verify-otp', { email, otp });
//       console.log(response.data);
//       setMessage(response.data.message);

//       // If OTP verification is successful, navigate to Welcome page
//       if (response.data.success) {
//         console.log('Navigating to /welcome');
//         navigate('/welcome'); // Redirect to the Welcome page
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Error verifying OTP');
//     }
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>OTP Login</h2>
//       {step === 1 && (
//         <div>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button onClick={requestOtp}>Send OTP</button>
//         </div>
//       )}
//       {step === 2 && (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button onClick={verifyOtp}>Verify OTP</button>
//         </div>
//       )}
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: Request OTP, 2: Verify OTP
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const requestOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/send-otp', { email });
      setMessage(response.data.message);
      setStep(2); // Go to OTP verification step
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/verify-otp', { email, otp });
      setMessage(response.data.message);

      // If OTP verification is successful, navigate to Welcome page
      if (response.data.success) {
        navigate('/welcome'); // Redirect to the Welcome page
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error verifying OTP');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom>
          OTP Login
        </Typography>
        {step === 1 && (
          <Box sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Enter your email"
              variant="outlined"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={requestOtp}
            >
              Send OTP
            </Button>
          </Box>
        )}
        {step === 2 && (
          <Box sx={{ width: '100%' }}>
            <TextField
              fullWidth
              label="Enter OTP"
              variant="outlined"
              margin="normal"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={verifyOtp}
            >
              Verify OTP
            </Button>
          </Box>
        )}
        {message && (
          <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default Login;

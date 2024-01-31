import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import {
  Backdrop,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { AppContext } from '../components/Root';
import { textSignInUp } from '../texts';
import { GoogleIcon } from '../components/SVGIcons';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://buyitnow.am/">
        https://buyitnow.am/
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUpPage() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const context = React.useContext(AppContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const location = useLocation();
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: data.get('firstName') + ' ' + data.getAll('lastName'),
        });
        // console.log(user);
        navigate(`/${location.search.slice(2)}`);
        setLoading(false);
        // ...
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setError(errorCode);
        // ..
      });
  };

  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate(`/${location.search.slice(2)}`);
        setLoading(false);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log('asd');
        // navigate(`/${location.search.slice(2)}`);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const getText = (text) => {
    if (context.language === '1') {
      return textSignInUp[text].am;
    } else if (context.language === '2') {
      return textSignInUp[text].en;
    } else {
      return textSignInUp[text].ru;
    }
  };

  return (
    <Grid item container xs={12}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            // onClick={()=>setLoading(false)}
          >
            {' '}
            <CircularProgress color="inherit" />
          </Backdrop>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {getText('signUp')}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {/* <Box sx={{ mt: 3 }}> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={getText('name')}
                  // autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={getText('srName')}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={() => setError()}
                  error={error === 'auth/invalid-email' || error === 'auth/email-already-in-use'}
                  required
                  fullWidth
                  id="email"
                  label={getText('email')}
                  name="email"
                  autoComplete="email"
                  helperText={
                    error === 'auth/invalid-email'
                      ? getText('invalidEmail')
                      : error === 'auth/email-already-in-use'
                      ? getText('usedEmail')
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  onChange={() => setError()}
                  error={error === 'auth/weak-password'}
                  required
                  fullWidth
                  name="password"
                  label={getText('password')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText={error === 'auth/weak-password' ? 'at leat 6 characters' : ''}
                /> */}
                <FormControl
                  error={error && error.includes('password')}
                  required
                  // sx={{ my: 2 }}
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">{getText('password')}</InputLabel>
                  <OutlinedInput
                    autoComplete="new-password"
                    error={error && error.includes('password')}
                    onChange={() => setError(false)}
                    // id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label={getText('password')}
                  />
                  <FormHelperText id="standard-weight-helper-text">
                    {error && error.includes('password') && getText('passwardError')}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label={getText('getNot')}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {getText('signUp')}
            </Button>
            <Button
              onClick={() => signInWithGoogle()}
              fullWidth
              variant="outlined"
              sx={{ mb: 2, textTransform: 'none' }}
            >
              <Box sx={{ display: 'flex', paddingRight: '25px' }}>
                <GoogleIcon />
              </Box>
              {getText('signUpGoogle')}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
                <Link style={{ fontSize: '14px' }} component={RouterLink} to={`/signin/${location.search}`}>
                  {getText('haveAccount')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Grid>
  );
}

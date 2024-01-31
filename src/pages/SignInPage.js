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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink, useLocation, useNavigate, useParams } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
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
import { auth } from '../firebase';
import { AppContext } from '../components/Root';
import { textSignInUp } from '../texts';
import { GoogleIcon } from '../components/SVGIcons';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

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

export default function SignInPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth1 = auth;
  const context = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(false);
  const [error, seteError] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    signInWithEmailAndPassword(auth1, data.get('email'), data.get('password'))
      .then((userCredential) => {
        // Signed in
        setLoading(false);
        const user = userCredential.user;
        navigate(`/${location.search.slice(2)}`);
        // ...
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        seteError(errorCode);
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
            {getText('signIn')}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={() => seteError(false)}
              error={!!error && !error.includes('password')}
              margin="normal"
              required
              fullWidth
              id="email"
              label={getText('email')}
              name="email"
              autoComplete="email"
            />

            <FormControl error={!!error} required sx={{ my: 2 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">{getText('password')}</InputLabel>
              <OutlinedInput
                autoComplete="current-password"
                error={!!error}
                onChange={() => seteError(false)}
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
              <FormHelperText id="standard-weight-helper-text">{error && getText('error')}</FormHelperText>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={getText('remember')}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {getText('signIn')}
            </Button>
            {/* </Link> */}
            <Button
              onClick={() => signInWithGoogle()}
              fullWidth
              variant="outlined"
              sx={{ mb: 2, textTransform: 'none' }}
            >
              <Box sx={{ display: 'flex', paddingRight: '25px' }}>
                <GoogleIcon />
              </Box>
              {getText('signInGoogle')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {getText('forgotPassword')}
                </Link>
              </Grid>
              <Grid item>
                <Link style={{ fontSize: '14px' }} component={RouterLink} to={`/signup/${location.search}`}>
                  {getText('noAcount')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Grid>
  );
}

import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import GoogleIcon from '../../common/icon/GoogleIcon';
import BaseDarkMod from '@/common/base/BaseDarkMod.jsx';
import { signIn } from '@/services/join-service.js';
import { useAuth } from '@/common/auth/use-auth.jsx';
import { getToken, getUser } from '@/common/storage/local-storage.js';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Login() {
    const { login, cacheUser } = useAuth();
    const [getErrorUser, setErrorUser] = useState(false);
    const [getErrorPassword, setErrorPassword] = useState(false);
    const [getRememberMe, setRememberMe] = useState(false);
    const [getCacheUser, setCacheUser] = useState('');
    const [getCachePassword, setCachePassword] = useState('');

    if (getToken()) {
        return <Navigate to="/main" />;
    }

    const onLogin = async (event) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const formData = {
            email: formElements.email.value,
            password: formElements.password.value,
        };
        const { data, status } = await signIn(formData);
        if (status === 200) {
            await Promise.all([login(data.token),  cacheUser(formData, getRememberMe)]);
        } else {
            setErrorUser(data === 'USER_NOT_FOUND');
            setErrorPassword(data === 'INVALID_PASSWORD');
        }
    };

    const onRememberMe = async (event) => {
        setRememberMe(event.target.checked);
    };

    const onChangeUser = (event) => {
        setCacheUser(event.target.value);
    };

    const onChangePassword = (event) => {
        setCachePassword(event.target.value);
    };

    useEffect(() => {
        const rememberUser = getUser();
        if (rememberUser) {
            setCacheUser(rememberUser.email);
            setCachePassword(rememberUser.password);
        }
    }, []);

    return (
        <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s', // set to `none` to disable transition
                    },
                }}
            />
            <Box sx={theme => ({
                width: { xs: '100%', md: '50vw' },
                transition: 'width var(--Transition-duration)',
                transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(255 255 255 / 0.2)',
                [theme.getColorSchemeSelector('dark')]: {
                    backgroundColor: 'rgba(19 19 24 / 0.4)',
                },
            })}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100dvh',
                    width: '100%',
                    px: 2,
                }}>
                    <Box component="header"
                         sx={{
                             py: 3,
                             display: 'flex',
                             justifyContent: 'space-between',
                         }}>
                        <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                            <IconButton variant="soft" color="primary" size="sm">
                                <BadgeRoundedIcon />
                            </IconButton>
                            <Typography level="title-lg">Company logo</Typography>
                        </Box>
                        <BaseDarkMod />
                    </Box>
                    <Box component="main"
                         sx={{
                             my: 'auto',
                             py: 2,
                             pb: 5,
                             display: 'flex',
                             flexDirection: 'column',
                             gap: 2,
                             width: 400,
                             maxWidth: '100%',
                             mx: 'auto',
                             borderRadius: 'sm',
                             '& form': {
                                 display: 'flex',
                                 flexDirection: 'column',
                                 gap: 2,
                             },
                             [`& .MuiFormLabel-asterisk`]: {
                                 visibility: 'hidden',
                             },
                         }}>
                        <Stack gap={4} sx={{ mb: 2 }}>
                            <Stack gap={1}>
                                <Typography component="h1" level="h3">
                                    Sign in
                                </Typography>
                                <Typography level="body-sm">
                                    New to company?{' '}
                                    <Link href="#replace-with-a-link" level="title-sm">
                                        Sign up!
                                    </Link>
                                </Typography>
                            </Stack>
                            <Button variant="soft"
                                    color="neutral"
                                    fullWidth
                                    startDecorator={<GoogleIcon />}>
                                Continue with Google
                            </Button>
                        </Stack>
                        <Divider
                            sx={theme => ({
                                [theme.getColorSchemeSelector('light')]: {
                                    color: { xs: '#FFF', md: 'text.tertiary' },
                                },
                            })}
                        >
                            or
                        </Divider>
                        <Stack gap={4} sx={{ mt: 2 }}>
                            <form onSubmit={event => onLogin(event)}>
                                <FormControl required error={getErrorUser}>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" name="email" value={getCacheUser}
                                           onChange={event => onChangeUser(event)} />
                                </FormControl>
                                <FormControl required error={getErrorPassword}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" name="password" value={getCachePassword}
                                           onChange={event => onChangePassword(event)} />
                                </FormControl>
                                <Stack gap={4} sx={{ mt: 2 }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                         onClick={event => onRememberMe(event)}>
                                        <Checkbox size="sm" label="Remember me" name="persistent" />
                                        <Link level="title-sm">
                                            Forgot your password?
                                        </Link>
                                    </Box>
                                    <Button type="submit">
                                        Sign in
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                        <Typography level="body-xs" textAlign="center">
                            © Your company {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={theme => ({
                    height: '100%',
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    left: { xs: 0, md: '50vw' },
                    transition:
                        'background-image var(--Transition-duration), left var(--Transition-duration) !important',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    backgroundColor: 'background.level1',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
                    },
                })}
            />
        </CssVarsProvider>
    );
}

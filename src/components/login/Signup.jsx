import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import GoogleIcon from '../../common/icon/GoogleIcon';

export default function SignUp() {
    return (
        <Box component="signup"
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
                <form onSubmit={event => onSignUp(event)}>
                    <FormControl required>
                        <FormLabel>Full name</FormLabel>
                        <Input type="text" name="fullname"/>
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email"/>
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password"/>
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Enter the password</FormLabel>
                        <Input type="password" name="password"/>
                    </FormControl>
                    <Stack gap={4} sx={{ mt: 2 }}>
                        <Button type="submit">
                            Sign up
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Box>
    );
}

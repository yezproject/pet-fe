import { useEffect, useState } from "react"
import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Checkbox from "@mui/joy/Checkbox"
import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"
import Link from "@mui/joy/Link"
import Input from "@mui/joy/Input"
import Stack from "@mui/joy/Stack"
import joinService from "@/services/join-service.js"
import { useAuth } from "@/common/auth/use-auth.jsx"
import { getUser } from "@/common/storage/local-storage.js"
import { useNavigate } from "react-router-dom"
import Typography from "@mui/joy/Typography"
import GoogleIcon from "@/common/icon/GoogleIcon.jsx"
import Divider from "@mui/joy/Divider"

export default function SignInForm() {
    const navigate = useNavigate()
    const { login, cacheUser } = useAuth()
    const [getErrorUser, setErrorUser] = useState(false)
    const [getErrorPassword, setErrorPassword] = useState(false)
    const [getRememberMe, setRememberMe] = useState(false)
    const [getCacheUser, setCacheUser] = useState("")
    const [getCachePassword, setCachePassword] = useState("")

    const onLogin = async (event) => {
        event.preventDefault()
        const formElements = event.currentTarget.elements
        const formData = {
            email: formElements.email.value,
            password: formElements.password.value,
        }
        const { data, status } = await joinService.signIn(formData)
        if (status === 200) {
            await Promise.all([login(data.token), cacheUser(formData, getRememberMe)])
        } else {
            setErrorUser(data === "USER_NOT_FOUND")
            setErrorPassword(data === "INVALID_PASSWORD")
        }
    }

    const onRememberMe = async (event) => {
        setRememberMe(event.target.checked)
    }

    const onChangeUser = (event) => {
        setCacheUser(event.target.value)
    }

    const onChangePassword = (event) => {
        setCachePassword(event.target.value)
    }

    useEffect(() => {
        const rememberUser = getUser()
        if (rememberUser) {
            setCacheUser(rememberUser.email)
            setCachePassword(rememberUser.password)
        }
    }, [])

    const toSignUp = () => {
        navigate("../sign-up")
    }

    return (
        <>
            <Stack gap={4} sx={{ mb: 2 }}>
                <Stack gap={1}>
                    <Typography component="h1" level="h3">
                        Sign in
                    </Typography>
                    <Typography level="body-sm">
                        New to company?{" "}
                        <Link level="title-sm" onClick={() => toSignUp()}>
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
                    [theme.getColorSchemeSelector("light")]: {
                        color: { xs: "#FFF", md: "text.tertiary" },
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
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
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
        </>
    )
}

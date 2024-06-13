import * as React from "react"
import {useState} from "react"
import Button from "@mui/joy/Button"
import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"
import Stack from "@mui/joy/Stack"
import Typography from "@mui/joy/Typography"
import Link from "@mui/joy/Link"
import GoogleIcon from "@/common/icon/GoogleIcon.jsx"
import Divider from "@mui/joy/Divider"
import {useNavigate} from "react-router-dom"
import {signUp} from "@/services/join-service.js"

export default function SignUp(props) {
    const navigate = useNavigate()
    const [acceptPassword, setAcceptPassword] = useState(true)
    const [getErrorUser, setErrorUser] = useState(false)
    const toSignIn = () => {
        navigate("/")
    }

    const onRestrict = async (event) => {
        event.preventDefault()
        const formElements = event.currentTarget.elements
        const isAcceptPassword = formElements.enter.value === formElements.password.value
        setAcceptPassword(isAcceptPassword)
        if (isAcceptPassword) {
            const formData = {
                fullName: formElements.fullName.value,
                email: formElements.email.value,
                password: formElements.password.value,
            }
            const {status} = await signUp(formData)
            setErrorUser(status !== 201)
            if (status === 201) {
                toSignIn()
                props.showToast("Bạn đã đăng ký thành công, vui lòng đăng nhập")
            }
        }
    }

    return (
        <>
            <Stack gap={4} sx={{mb: 2}}>
                <Stack gap={1}>
                    <Typography component="h1" level="h3">
                        Sign up
                    </Typography>
                    <Typography level="body-sm">
                        Do you already have an account?{" "}
                        <Link level="title-sm" onClick={() => toSignIn()}>
                            Sign in!
                        </Link>
                    </Typography>
                </Stack>
                <Button variant="soft"
                    color="neutral"
                    fullWidth
                    startDecorator={<GoogleIcon/>}>
                    Continue with Google
                </Button>
            </Stack>
            <Divider
                sx={theme => ({
                    [theme.getColorSchemeSelector("light")]: {
                        color: {xs: "#FFF", md: "text.tertiary"},
                    },
                })}
            >
                or
            </Divider>
            <Stack gap={4} sx={{mt: 2}}>
                <form onSubmit={event => onRestrict(event)}>
                    <FormControl required>
                        <FormLabel>Full name</FormLabel>
                        <Input type="text" name="fullName"/>
                    </FormControl>
                    <FormControl required error={getErrorUser}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email"/>
                    </FormControl>
                    <FormControl required error={!acceptPassword}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name="password"/>
                    </FormControl>
                    <FormControl required error={!acceptPassword}>
                        <FormLabel>Enter the password</FormLabel>
                        <Input type="password" name="enter"/>
                    </FormControl>
                    <Stack gap={4} sx={{mt: 2}}>
                        <Button type="submit">
                            Sign up
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </>
    )
}

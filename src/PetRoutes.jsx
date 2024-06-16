import { Navigate, Route, Routes } from "react-router-dom"
import AuthenticationPage from "@/layout/authentication/AuthenticationPage.jsx"
import NotFoundPage from "@/layout/NotFoundPage.jsx"
import MainPage from "@/layout/MainPage.jsx"
import SignUpForm from "@/components/login/SignUpForm.jsx"
import SignInForm from "@/components/login/SignInForm.jsx"
import TransactionPage from "@/layout/TransactionPage.jsx"
import Profile from "@/components/profile/Profile.jsx"
import Dashboard from "@/components/dashboard/Dashboard.jsx"
import ErrorPage from "@/layout/ErrorPage.jsx"

export default function PetRoutes() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthenticationPage />}>
                <Route path="sign-up" element={<SignUpForm />} />
                <Route path="sign-in" element={<SignInForm />} />
            </Route>
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/" element={<MainPage />}>
                <Route index element={<Navigate to="/transaction" replace />} />
                <Route path="transaction" element={<TransactionPage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/transaction" replace />} />
            </Route>
            {/*<Route path="/*" element={<Navigate to="/" />} />*/}
        </Routes>
    )
}
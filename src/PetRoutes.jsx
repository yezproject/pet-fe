import SignInForm from "@/components/login/SignInForm.jsx"
import SignUpForm from "@/components/login/SignUpForm.jsx"
import Profile from "@/components/profile/Profile.jsx"
import ErrorPage from "@/layout/ErrorPage.jsx"
import HomePage from "@/layout/HomePage.jsx"
import MainPage from "@/layout/MainPage.jsx"
import NotFoundPage from "@/layout/NotFoundPage.jsx"
import TransactionPage from "@/layout/TransactionPage.jsx"
import CategoryPage from "@/layout/CategoryPage.jsx"
import AuthenticationPage from "@/layout/authentication/AuthenticationPage.jsx"
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

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
                <Route path="home" element={<HomePage />} />
                <Route path="transaction" element={<TransactionPage />} />
                <Route path="category" element={<CategoryPage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/transaction" replace />} />
            </Route>
            {/*<Route path="/*" element={<Navigate to="/" />} />*/}
        </Routes>
    )
}
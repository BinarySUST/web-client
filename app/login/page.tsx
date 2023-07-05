import BreadCrump from "@/components/Breadcrump/BreadCrump"
import Login from "@/modules/Login/Login"

export const metadata = {
    title: 'Login | Binary SUST',
}

export default function LoginPage() {
    return (

        <>
            <BreadCrump title="Login" />
            <Login />
        </>

    )
}
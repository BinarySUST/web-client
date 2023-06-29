import BreadCrump from "@/components/Breadcrump/BreadCrump";
import Register from "@/modules/Register/Register";


export const metadata = {
    title: 'Register',
};

export default function RegisterPage() {
    return (
        <>
            {/* <BreadCrump title="Register" /> */}
            <Register />
        </>

    )
}
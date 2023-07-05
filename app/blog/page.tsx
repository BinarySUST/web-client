import BreadCrump2 from "@/components/Breadcrump/BreadCrump2";
import BlogList from "@/modules/Blog/BlogList";

export const metadata = {
    title: 'Blog | Binary SUST',
}

export default function BlogListPage() {
    return (
        <>
            <BreadCrump2 />
            <BlogList />
        </>
    )
}
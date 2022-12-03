import { useRouter } from "next/router";
import { NextPage } from "next/types"
import { PageContent } from "../portofolio/component";

const BlogPostsPage: NextPage = () => {

    const { query } = useRouter();

    console.log(query);

    return (
        <PageContent title="The blog posts page" />
    )
}

export default BlogPostsPage;
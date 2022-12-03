import { useRouter } from "next/router"
import { NextPage } from "next/types"
import { PageContent } from "../../portofolio/component"

const SelectedClientProjectPage: NextPage = () => {

    const { query } = useRouter();

    console.log(query);

    return (
        <PageContent title="The Client selected project page" />
    )
}

export default SelectedClientProjectPage;
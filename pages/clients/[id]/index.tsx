import { useRouter } from "next/router";
import { NextPage } from "next/types";
import { PageContent } from "../../portofolio/component";

const ClientProjectsPage: NextPage = () => {
    const router = useRouter()

    const loadProjectHandler = () => {
        router.push({
            pathname: "/clients/[id]/[clientProjectId]",
            query: { id: "max", clientProjectId: "projectA" },
        });
    }

    return (
        <>
        <PageContent title="The Client projects page" />
        <button onClick={loadProjectHandler}>Load Project A</button>
        </>
    )
}

export default ClientProjectsPage;
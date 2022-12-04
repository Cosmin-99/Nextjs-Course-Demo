import { NextPage } from "next/types"
import { PageContent } from "../portofolio/component"
import Link from "next/link"

const ClientsPage: NextPage = () => {

    const clients = [
        { id: "max", name: "Maximilian" },
        { id: "manu", name: "Manuel" },
    ]

    return (
        <>
            <PageContent title="The Clients page" />
            <ul>
                {clients.map((el) => (<li key={el.id}>
                    <Link href={{
                        pathname: "clients/[id]",
                        query: { id: el.id },
                    }}>{el.name}</Link>
                </li>))}
            </ul>
        </>
    )
}

export default ClientsPage;
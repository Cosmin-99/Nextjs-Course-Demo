import { NextPage } from "next";
import { PageContent } from "./component";
import { useRouter } from "next/router";

const PortofolioProjectPage: NextPage = () => {

    const { query } = useRouter();

    console.log(query);

    return (
        <PageContent title="The Portofolio Project page" />
    );
}

export default PortofolioProjectPage;


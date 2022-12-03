
export function PageContent(props: {
    title: string;
}) {
    const { title } = props;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}
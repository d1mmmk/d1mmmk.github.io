export default function AppContent(
    { element = null, extraClass = '' }: { element?: JSX.Element, extraClass?: string }
): JSX.Element  {
    const className = "app_content " + extraClass
    return (
        <div className={className}>
            { element }
        </div>
    );
}

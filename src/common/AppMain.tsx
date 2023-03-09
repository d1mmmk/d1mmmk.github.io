import AppContent from "common/AppContent";

export default function Main(
    { element }: { element: JSX.Element }
): JSX.Element  {
return (
  <div className="app_main">
    <AppContent element ={ element } />
  </div>
);
}

import { TopBar } from "./TopBar";

export function Layout({ children }) {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
}

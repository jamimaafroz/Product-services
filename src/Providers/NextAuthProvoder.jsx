import { SessionProvider } from "next-auth/react";

export default function nextAuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

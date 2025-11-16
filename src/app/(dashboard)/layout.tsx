import LayoutMain from "@/layouts/Index";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

// const ProtectedRouteProvider = dynamic(
//   () => import("@/libs/Auth/provider/ProtectedRouteProvider"),
//   { ssr: false }
// );

export default async function Layout({ children }: Props) {
  return (
    <>
      {/* <ProtectedRouteProvider> */}
      {/* <OidcAuthProvider autoSignIn={true}> */}
      <Suspense>
        <LayoutMain>{children}</LayoutMain>
      </Suspense>
      {/* </OidcAuthProvider> */}
      {/* </ProtectedRouteProvider> */}
    </>
  );
}

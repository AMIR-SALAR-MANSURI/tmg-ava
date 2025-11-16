import type { Metadata } from "next";
import AntdDesign from "@/provider/antd-design";
import NextProgressBar from "@/provider/next-progress-bar";
import QueryClientProvider from "@/provider/query-client-provider";
import "./globals.css";
import "@/styles/font.css";
import "@/styles/antd.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "سامانه TMG",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <AntdDesign>
            {/* <NuqsAdapter> */}
            <NextProgressBar />
            {children}
            {/* </NuqsAdapter> */}
          </AntdDesign>
        </QueryClientProvider>
      </body>
    </html>
  );
}

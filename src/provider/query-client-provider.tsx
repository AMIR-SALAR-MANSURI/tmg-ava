"use client";

import React from "react";
import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/libs/queryClient";

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       retry: 0,
  //     },
  //   },
  // });

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} buttonPosition="bottom-left" />
    </TanstackQueryClientProvider>
  );
};

export default QueryClientProvider;

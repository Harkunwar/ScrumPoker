import { createTRPCClient, TRPCRequestOptions } from "@trpc/client";
import { createResource } from "solid-js";

import type { inferHandlerInput } from "@trpc/server";
import type { AppRouter } from "../../api/[trpc]";

const client = createTRPCClient<AppRouter>({ url: "/api" });

const data = async () => {
  return await client.query("hello");
};
type AppQueries = AppRouter["_def"]["queries"];

type AppQueryKeys = keyof AppQueries & string;

export const createTrpcQuery = <TPath extends AppQueryKeys>(
  path: TPath,
  ...args: [...inferHandlerInput<AppQueries[TPath]>, TRPCRequestOptions?]
) => {
  const fetchData = async () => {
    return client.query(path, ...args);
  };

  return createResource(fetchData);
};

createTrpcQuery("hello", { text: "blue" });

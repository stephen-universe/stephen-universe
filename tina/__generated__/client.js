import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: "http://localhost:4001/graphql", token: "fc71eba393fa51c0cfac1fdc20f4bf3e818ec05e", queries });
export default client;

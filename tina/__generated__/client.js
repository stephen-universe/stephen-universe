import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: "http://localhost:4001/graphql", token: "57a89881ac08192d36caab3cea8bcac2be6ad596", queries });
export default client;

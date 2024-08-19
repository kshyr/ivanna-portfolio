import { type SchemaTypeDefinition } from "sanity";

import { homePageSingleton } from "./homePageSingleton";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageSingleton],
};

import { type SchemaTypeDefinition } from "sanity";

import { homePageSingleton } from "./homePageSingleton";
import { aboutPageSingleton } from "./aboutPageSingleton";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageSingleton, aboutPageSingleton],
};

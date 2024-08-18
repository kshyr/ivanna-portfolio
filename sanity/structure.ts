import type { StructureResolver } from "sanity/structure";

export const homePageSingletonName = "homePage";
export const aboutPageSingletonName = "aboutPage";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  return S.list()
    .title("Portfolio")
    .items([
      S.documentTypeListItem("post")
        .title("Home")
        .schemaType("post")
        .child(S.editor().id("post").schemaType("post").documentId("post")),
    ]);
};

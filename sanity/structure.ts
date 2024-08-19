import type { StructureResolver } from "sanity/structure";

export const homePageSingletonName = "homePage";
export const aboutPageSingletonName = "aboutPage";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  return S.list()
    .title("Portfolio")
    .items([
      S.documentTypeListItem(homePageSingletonName)
        .title("Home")
        .schemaType(homePageSingletonName)
        .child(
          S.editor()
            .title("Home")
            .id(homePageSingletonName)
            .schemaType(homePageSingletonName)
            .documentId(homePageSingletonName),
        ),
    ]);
};

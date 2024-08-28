import { BsFiletypeDoc } from "react-icons/bs";
import { defineArrayMember, defineField, defineType } from "sanity";
import { aboutPageSingletonName } from "../structure";

export const aboutPageSingleton = defineType({
  name: aboutPageSingletonName,
  title: "Post",
  type: "document",
  icon: BsFiletypeDoc,
  fields: [
    defineField({
      name: "aboutMeParagraph",
      type: "text",
    }),
    defineField({
      name: "secondParagraphTitle",
      type: "string",
    }),
    defineField({
      name: "secondParagraph",
      type: "text",
    }),
    defineField({
      name: "photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "hobbies",
      type: "array",
      validation: (r) => r.max(3),
      of: [
        defineArrayMember({
          name: "hobby",
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
            }),
            defineField({
              name: "pic1",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "pic2",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "pic3",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
});

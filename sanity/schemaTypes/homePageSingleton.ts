import { BsFiletypeDoc } from "react-icons/bs";
import { defineArrayMember, defineField, defineType } from "sanity";
import { homePageSingletonName } from "../structure";

export const homePageSingleton = defineType({
  name: homePageSingletonName,
  title: "Post",
  type: "document",
  icon: BsFiletypeDoc,
  fields: [
    defineField({
      name: "resumeLink",
      type: "url",
    }),
    defineField({
      name: "socialLinks",
      type: "object",
      fields: [
        defineField({
          name: "email",
          type: "url",
        }),
        defineField({
          name: "linkedn",
          type: "url",
        }),
        defineField({
          name: "behance",
          type: "url",
        }),
        defineField({
          name: "instagram",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "title",
      description: "e.g. UX/UI Designer",
      type: "string",
    }),
    defineField({
      name: "heroParagraph",
      description: "e.g. Paragraph about you",
      type: "text",
    }),
    defineField({
      name: "projectsParagraphStart",
      description: "Start of paragraph with muted color",
      type: "string",
    }),
    defineField({
      name: "projectsParagraphEnd",
      description: "End of paragraph with highlighted color",
      type: "string",
    }),
    defineField({
      name: "heroImages",
      type: "array",
      description: "e.g. High Fidelity Wifeframes slide",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "logoImages",
      description: "Logos of tools displayed as skills",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "projects",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "tags",
              type: "array",
              of: [
                defineArrayMember({
                  type: "string",
                }),
              ],
            }),
            defineField({
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                },
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "skillsParagraphStart",
      description: "Start of paragraph with muted color",
      type: "string",
    }),
    defineField({
      name: "skillsParagraphEnd",
      description: "End of paragraph with highlighted color",
      type: "string",
    }),
    defineField({
      name: "skillsImages",
      description: "Logos of tools displayed as skills",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
    }),
  ],
});

// tina/config.ts
import { defineConfig } from "tinacms";
var branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.NEXT_PUBLIC_TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },
  schema: {
    collections: [
      // Site Settings Collection
      {
        name: "setting",
        label: "Site Config",
        path: "content/data",
        format: "json",
        match: {
          include: "setting",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          filename: {
            slugify: () => "setting",
            readonly: true,
          },
        },
        fields: [
          {
            type: "object",
            name: "siteSettings",
            label: "Site Settings",
            fields: [
              {
                type: "string",
                name: "siteName",
                label: "Site Name",
              },
              {
                type: "string",
                name: "siteOwner",
                label: "Site Owner",
              },
            ],
          },
          {
            type: "object",
            name: "preloader",
            label: "Preloader",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Preloader Image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
              },
            ],
          },
          {
            type: "object",
            name: "companyLogo",
            label: "Company Logo",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Logo Image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              {
                type: "object",
                name: "fb",
                label: "Facebook",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "URL",
                  },
                ],
              },
              {
                type: "object",
                name: "ig",
                label: "Instagram",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "URL",
                  },
                ],
              },
              {
                type: "object",
                name: "github",
                label: "GitHub",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "URL",
                  },
                ],
              },
              {
                type: "object",
                name: "linkedin",
                label: "LinkedIn",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "URL",
                  },
                ],
              },
            ],
          },
        ],
      },
      // Navigation Collection
      {
        name: "navigation",
        label: "Navigation",
        path: "content/data",
        format: "json",
        match: {
          include: "navigation",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          filename: {
            slugify: () => "navigation",
            readonly: true,
          },
        },
        fields: [
          {
            type: "object",
            name: "navigationLinks",
            label: "Navigation Links",
            list: true,
            ui: {
              itemProps: (item) => ({
                label:
                  item?.heading?.mainText || item?.text || "Navigation Item",
              }),
            },
            fields: [
              {
                type: "string",
                name: "link",
                label: "Link URL",
              },
              {
                type: "object",
                name: "heading",
                label: "Heading",
                fields: [
                  {
                    type: "string",
                    name: "mainText",
                    label: "Main Text",
                  },
                  {
                    type: "string",
                    name: "subText",
                    label: "Sub Text",
                  },
                ],
              },
              {
                type: "string",
                name: "text",
                label: "Simple Text",
              },
            ],
          },
          {
            type: "object",
            name: "footerLinks",
            label: "Footer Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Link Text",
              },
              {
                type: "string",
                name: "url",
                label: "Link URL",
              },
            ],
          },
          {
            type: "object",
            name: "footerText",
            label: "Footer Text",
            list: true,
            fields: [
              {
                type: "string",
                name: "text1",
                label: "Text Part 1",
              },
              {
                type: "string",
                name: "text2",
                label: "Text Part 2",
              },
            ],
          },
        ],
      },
      // Content Collection
      {
        name: "home",
        label: "Home Page",
        path: "content/data",
        format: "json",
        match: {
          include: "home",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          filename: {
            slugify: () => "home",
            readonly: true,
          },
        },
        fields: [
          {
            type: "string",
            name: "rotatingWords",
            label: "Rotating Words",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "object",
            name: "introLines",
            label: "Intro Lines",
            fields: [
              {
                type: "string",
                name: "line1",
                label: "Line 1",
              },
              {
                type: "string",
                name: "line2",
                label: "Line 2",
              },
              {
                type: "string",
                name: "line3",
                label: "Line 3",
              },
              {
                type: "string",
                name: "line4",
                label: "Line 4",
              },
            ],
          },
          {
            type: "object",
            name: "doorMessages",
            label: "Door Messages",
            fields: [
              {
                type: "string",
                name: "message1",
                label: "Message 1",
              },
              {
                type: "string",
                name: "message2",
                label: "Message 2",
              },
              {
                type: "string",
                name: "message3",
                label: "Message 3",
              },
            ],
          },
          {
            type: "object",
            name: "coreSystems",
            label: "Core Systems",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "desc",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "skills",
                label: "Skills",
                fields: [
                  {
                    type: "string",
                    name: "skill1",
                    label: "Skill 1",
                  },
                  {
                    type: "string",
                    name: "skill2",
                    label: "Skill 2",
                  },
                  {
                    type: "string",
                    name: "skill3",
                    label: "Skill 3",
                  },
                  {
                    type: "string",
                    name: "skill4",
                    label: "Skill 4",
                  },
                  {
                    type: "string",
                    name: "skill5",
                    label: "Skill 5",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "fieldSystems",
            label: "Field Systems",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "desc",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "skills",
                label: "Skills",
                fields: [
                  {
                    type: "string",
                    name: "skill1",
                    label: "Skill 1",
                  },
                  {
                    type: "string",
                    name: "skill2",
                    label: "Skill 2",
                  },
                  {
                    type: "string",
                    name: "skill3",
                    label: "Skill 3",
                  },
                  {
                    type: "string",
                    name: "skill4",
                    label: "Skill 4",
                  },
                  {
                    type: "string",
                    name: "skill5",
                    label: "Skill 5",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "combinedStatement",
            label: "Combined Statement",
            fields: [
              {
                type: "string",
                name: "statement1",
                label: "Statement 1",
              },
              {
                type: "string",
                name: "statement2",
                label: "Statement 2",
              },
            ],
          },
          {
            type: "object",
            name: "projectSection",
            label: "Project Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "projects",
                label: "Projects",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "image1",
                    label: "Image 1",
                  },
                  {
                    type: "string",
                    name: "url1",
                    label: "URL 1",
                  },
                  {
                    type: "image",
                    name: "image2",
                    label: "Image 2",
                  },
                  {
                    type: "string",
                    name: "url2",
                    label: "URL 2",
                  },
                  {
                    type: "image",
                    name: "image3",
                    label: "Image 3",
                  },
                  {
                    type: "string",
                    name: "url3",
                    label: "URL 3",
                  },
                  {
                    type: "image",
                    name: "image4",
                    label: "Image 4",
                  },
                  {
                    type: "string",
                    name: "url4",
                    label: "URL 4",
                  },
                ],
              },
              {
                type: "object",
                name: "viewAllLink",
                label: "View All Link",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "quote",
            label: "Quote",
            fields: [
              {
                type: "object",
                name: "lines",
                label: "Lines",
                fields: [
                  {
                    type: "string",
                    name: "line",
                    label: "Line",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                type: "object",
                name: "attribution",
                label: "Attribution",
                fields: [
                  {
                    type: "string",
                    name: "signature",
                    label: "Signature",
                  },
                  {
                    type: "string",
                    name: "source",
                    label: "Source",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "timedQuote",
            label: "Timed Quote",
            fields: [
              {
                type: "object",
                name: "quoteParts",
                label: "Quote Parts",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                  {
                    type: "number",
                    name: "delay",
                    label: "Delay (ms)",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              {
                type: "string",
                name: "link",
                label: "Link",
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
              },
            ],
          },
        ],
      },
      // Projects Collection
      {
        name: "projects",
        label: "Projects",
        path: "content/data",
        format: "json",
        match: {
          include: "projects",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          filename: {
            slugify: () => "projects",
            readonly: true,
          },
        },
        fields: [
          {
            type: "object",
            name: "projects",
            label: "Projects",
            fields: [
              {
                type: "object",
                name: "logofolio",
                label: "Logofolio",
                fields: [
                  {
                    type: "object",
                    name: "meta",
                    label: "Metadata",
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "number",
                        name: "speed",
                        label: "Speed",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "project",
                    label: "Project Items",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.title || "New Project Item",
                      }),
                    },
                    fields: [
                      {
                        type: "object",
                        name: "images",
                        label: "Images",
                        fields: [
                          {
                            type: "image",
                            name: "white",
                            label: "White Version",
                          },
                          {
                            type: "image",
                            name: "black",
                            label: "Black Version",
                          },
                        ],
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "anarose",
                label: "Ana Rose",
                fields: [
                  {
                    type: "object",
                    name: "meta",
                    label: "Metadata",
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "number",
                        name: "speed",
                        label: "Speed",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "project",
                    label: "Project Items",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.title || "New Project Item",
                      }),
                    },
                    fields: [
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },

                      {
                        type: "string",
                        name: "goals",
                        label: "Goals",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "challenges",
                        label: "Challenges",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "solutions",
                        label: "Solutions",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              // Add similar configurations for other projects
              {
                type: "object",
                name: "queendomfarms",
                label: "Queendom Farms",
                fields: [
                  {
                    type: "object",
                    name: "meta",
                    label: "Metadata",
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "number",
                        name: "speed",
                        label: "Speed",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "project",
                    label: "Project Items",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.title || "New Project Item",
                      }),
                    },
                    fields: [
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },

                      {
                        type: "string",
                        name: "goals",
                        label: "Goals",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "challenges",
                        label: "Challenges",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "solutions",
                        label: "Solutions",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              // Add similar configurations for other projects
              {
                type: "object",
                name: "epicfuture",
                label: "Epic Future",
                fields: [
                  {
                    type: "object",
                    name: "meta",
                    label: "Metadata",
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "number",
                        name: "speed",
                        label: "Speed",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "project",
                    label: "Project Items",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.title || "New Project Item",
                      }),
                    },
                    fields: [
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },

                      {
                        type: "string",
                        name: "goals",
                        label: "Goals",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "challenges",
                        label: "Challenges",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "solutions",
                        label: "Solutions",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "video",
                        label: "Video",
                      },
                    ],
                  },
                ],
              },
              // Add similar configurations for other projects
              {
                type: "object",
                name: "consolidatedconstructionsolutions",
                label: "Consolidated Construction Solutions",
                fields: [
                  {
                    type: "object",
                    name: "meta",
                    label: "Metadata",
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "number",
                        name: "speed",
                        label: "Speed",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "project",
                    label: "Project Items",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.title || "New Project Item",
                      }),
                    },
                    fields: [
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },

                      {
                        type: "string",
                        name: "goals",
                        label: "Goals",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "challenges",
                        label: "Challenges",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "solutions",
                        label: "Solutions",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              // Add similar configurations for other projects
              {
                type: "object",
                name: "perfectlydifferent",
                label: "Perfectly Different",
                fields: [
                  {
                    type: "object",
                    name: "meta",
                    label: "Metadata",
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "number",
                        name: "speed",
                        label: "Speed",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "project",
                    label: "Project Items",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.title || "New Project Item",
                      }),
                    },
                    fields: [
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },

                      {
                        type: "string",
                        name: "goals",
                        label: "Goals",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "challenges",
                        label: "Challenges",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "solutions",
                        label: "Solutions",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              // Add similar configurations for other projects
            ],
            create: true,
          },
        ],
      },
    ],
  },
});
export { config_default as default };

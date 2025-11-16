import { Type } from "lucide-react";
import { boolean, z } from "zod";

const _support = {
  Clients: {
    url: "V1/Support/clients",
    type: z.object({
      limit: z.string().optional(),
      after: z.string().optional(),
      pageSize: z.number().optional(),
      pageNumber: z.number().optional(),
    }),

    item: z.object({
      data: z.object({
        limit: z.string().optional(),
        after: z.string().optional(),
        pageSize: z.number().optional(),
        pageNumber: z.number().optional(),
      }),
    }),
    method: "GET",
    response: z.object({
      data: z.array(
        z.object({
          id: z.string().optional(),
          name: z.string().optional(),
          description: z.string().optional(),
          createdAt: z.string().optional(),
          isDisabled: z.boolean(),
        })
      ),
    }),
  },
  Rooms: {
    url: "V1/Support/clients",
    method: "GET",
    type: z.object({
      clientKey: z.string(),
      limit: z.string().optional(),
      after: z.string().optional(),
      pageSize: z.number().optional(),
      pageNumber: z.number().optional(),
    }),

    item: z.object({
      isSuccess: z.boolean(),

      data: z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        createdAt: z.string(),
      }),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        createdAt: z.string(),
      }),
    }),
  },

  Conversations: {
    url: "V1/Support/clients",
    method: "GET",
    item: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        id: z.string(),
        title: z.string(),
        createdAt: z.string().optional(),
        isArchived: z.boolean().optional(),
      }),
    }),

    type: z.object({
      clientKey: z.string(),
      roomId: z.string().nullable().optional(),
      limit: z.number().nullable().optional(),
      userKey: z.string().optional(),
      after: z.string().optional(),
      pageSize: z.number().optional(),
      pageNumber: z.number().optional(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        id: z.string(),
        title: z.string(),
        createdAt: z.string().optional(),
        isArchived: z.boolean().optional(),
      }),
    }),
  },
  EditTitle: {
    url: "/Conversations/",
    method: "PUT",
    type: z.object({
      uid: z.string(),
      title: z.string(),
    }),
    // response: z.object({
    //   isSuccess: z.boolean(),
    //   data: z.object({
    //     data: z.object({
    //       id: z.string(),
    //       title: z.string(),
    //       Message: z.array(
    //         z.object({
    //           id: z.string(),
    //           userInput: z.string(),
    //           botResponse: z.string(),
    //           createdAt: z.string(),
    //         })
    //       ),
    //     }),
    //   }),
    // }),
  },
  DeleteTitle: {
    url: "/Conversations/",
    method: "DELETE",
  },

  summary: {
    url: "/Assistant/Summarize",
    method: "POST",
    item: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        content: z.string(),
        keywords: z.string(),
      }),
    }),
    type: z.object({
      content: z.string(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        content: z.string(),
        keywords: z.array(z.string()),
      }),
    }),
  },
  translate: {
    url: "/Assistant/Translate",
    method: "POST",
    item: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        content: z.string(),
        keywords: z.string(),
      }),
    }),
    type: z.object({
      sourceLanguage: z.string(),
      targetLanguage: z.string(),
      content: z.string(),
    }),

    response: z.object({
      isSuccess: z.boolean(),
      data: z.string(),
    }),
  },
  languges: {
    url: "/Assistant/AvailableLanguages",
    method: "GET",
    item: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        content: z.string(),
        keywords: z.string(),
      }),
    }),

    response: z.object({
      data: z.array(
        z.object({
          locale: z.string(),
          label: z.string(),
        })
      ),
    }),
  },
  comparator: {
    url: "/Assistant/Comparator",
    method: "POST",
    type: z.object({
      firstText: z.string(),
      secondText: z.string(),
    }),

    response: z.object({
      isSuccess: z.boolean(),
      data: z.string(),
    }),
  },
  categorizer: {
    url: "/Assistant/categorizer",
    method: "POST",
    type: z.object({
      content: z.string(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.string(),
    }),
  },
  unethicalText: {
    url: "/Assistant/content-safety",
    method: "POST",
    type: z.object({
      content: z.string(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.string(),
    }),
  },
  emotionalText: {
    url: "/Assistant/emotional-recognizer",
    method: "POST",
    type: z.object({
      content: z.string(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.string(),
    }),
  },

  entityName: {
    url: "/Assistant/named-entity-recognition",
    method: "POST",
    type: z.object({
      content: z.string(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.string(),
    }),
  },
  officialLetter: {
    url: "/Assistant/official-letter",
    method: "POST",
    type: z.object({
      content: z.string(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.string(),
    }),
  },
  economic: {
    url: "/Assistant/economic-recognition",
    method: "POST",
    type: z.object({
      content: z.string(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.string(),
    }),
  },
  GetLanguageModels: {
    url: "/General/LanguageModels",
    item: z.object({
      data: z.object({
        id: z.string().optional(),
        modelEnglishName: z.string().optional(),
        modelFarsiName: z.string().optional(),
      }),
    }),
    method: "GET",
    response: z.object({
      data: z.array(
        z.object({
          id: z.string().optional(),
          modelEnglishName: z.string().optional(),
          modelFarsiName: z.string().optional(),
        })
      ),
    }),
  },
};

export { _support };

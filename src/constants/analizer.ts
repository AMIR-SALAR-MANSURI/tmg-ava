import { Type } from "lucide-react";
import { boolean, z } from "zod";

const _analizer = {
  GetConverList: {
    url: "/Conversations/list",
    item: z.object({
      data: z.object({
        id: z.string().optional(),
        title: z.string().optional(),
        createdAt: z.string().optional(),
        updatedAt: z.string().optional(),
      }),
    }),
    method: "GET",
    response: z.object({
      data: z.array(
        z.object({
          id: z.string().optional(),
          title: z.string().optional(),
          createdAt: z.string().optional(),
          updatedAt: z.string().optional(),
          isLocked: z.boolean(),
        })
      ),
    }),
  },
  GetConver: {
    url: "/Conversations/",
    method: "GET",
    item: z.object({
      isSuccess: z.boolean(),

      data: z.object({
        id: z.string(),
        title: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        modelName: z.string(),
        messages: z.array(
          z.object({
            id: z.string(),
            userInput: z.string(),
            botResponse: z.string(),
            createdAt: z.string(),
          })
        ),
      }),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        id: z.string(),
        title: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        modelName: z.string(),
        messages: z.array(
          z.object({
            id: z.string(),
            userInput: z.string(),
            isLoading: z.boolean().optional(),
            botResponse: z.string(),
            createdAt: z.string(),
          })
        ),
      }),
    }),
  },

  NewConversation: {
    url: "/Conversations/messages/new",
    method: "POST",
    item: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        data: z.object({
          id: z.string(),
          title: z.string(),
          Message: z.array(
            z.object({
              id: z.string(),
              userInput: z.string(),
              botResponse: z.string(),
              createdAt: z.string(),
            })
          ),
        }),
      }),
    }),
    type: z.object({
      userInput: z.string(),
      conversationId: z.string().nullable().optional(),
      supportId: z.string().nullable().optional(),
      languageModelId: z.string().optional(),
    }),
    response: z.object({
      isSuccess: z.boolean(),
      data: z.object({
        data: z.object({
          id: z.string(),
          title: z.string(),
          removedOn: z.string().optional(),
          userId: z.string().optional(),
          Message: z.array(
            z.object({
              id: z.string(),
              userInput: z.string(),
              botResponse: z.string(),
              createdAt: z.string(),
            })
          ),
        }),
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

export { _analizer };

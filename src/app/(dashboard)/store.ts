import { message } from "antd/lib";
import { any } from "zod";
import { create } from "zustand";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
  isLoading?: boolean;
};
export interface History {
  id: number;
  message: string;
}
[];

interface Summary {
  content: string;
  keywords: string[];
}

interface TmgTS {
  extarctOcr: any | undefined;
  setExtarctOcr: (value: string | undefined) => void;

  extarctObj: any | undefined;
  setExtarctObj: (value: string | undefined) => void;

  extarctGun: any | undefined;
  setExtarctGun: (value: string | undefined) => void;

  extarctVoice: any | undefined;
  setExtarctVoice: (value: string | undefined) => void;

  extarctSpeech: any | undefined;
  setExtarctSpeech: (value: string | undefined) => void;

  locations: { longitudes: any; latitudes: any } | undefined;
  setLocation: (value: any | undefined) => void;

  address: any | undefined;
  setAddress: (value: any | undefined) => void;

  addressLoc: { x: any; y: any } | undefined;
  setAddressLoc: (value: any | undefined) => void;

  plaque: any | undefined;
  setPlaque: (value: any | undefined) => void;

  sign: any | undefined;
  setSign: (value: any | undefined) => void;

  face: any | undefined;
  setFace: (value: any | undefined) => void;

  searchFace: any | undefined;
  setSearchFace: (value: any | undefined) => void;

  numStatus: any | undefined;
  setNumStatus: (value: any | undefined) => void;

  messages: any[];
  setMessages: (value: any) => void;

  inputValue: string;
  setInputValue: (value: string) => void;

  chatHistory: History[];
  setChatHistory: (value: History[]) => void;

  summary: Summary;
  setSummary: (value: Summary) => void;

  translates: string;
  setTranslate: (value: string) => void;

  compare: string;
  setCompare: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;
}

interface TAction {
  setMessageOnLoading: (value: Message) => void;
  setClearMessage: (value: Message) => void;
}

const useTmgStore = create<TmgTS & TAction>((set) => ({
  //ocr
  extarctOcr: undefined,
  setExtarctOcr: (value: any) => set({ extarctOcr: value }),

  //obj
  extarctObj: undefined,
  setExtarctObj: (value: any) => set({ extarctObj: value } as any),

  //gun
  extarctGun: undefined,
  setExtarctGun: (value: any) => set({ extarctGun: value } as any),

  //voice
  extarctVoice: undefined,
  setExtarctVoice: (value: any) => set({ extarctVoice: value } as any),

  extarctSpeech: undefined,
  setExtarctSpeech: (value: any) => set({ extarctVoice: value } as any),

  //MAP
  locations: { latitudes: undefined, longitudes: undefined },
  setLocation: (value: any) => set({ locations: value } as any),

  address: undefined,
  setAddress: (value: any) => set({ address: value } as any),

  addressLoc: { x: 51.431163210478864, y: 35.72387338825216 },
  setAddressLoc: (value: any) => set({ addressLoc: value } as any),

  //plaque
  plaque: undefined,
  setPlaque: (value: any) => set({ plaque: value } as any),
  //sign
  sign: undefined,
  setSign: (value: any) => set({ sign: value } as any),
  //face
  face: undefined,
  setFace: (value: any) => set({ face: value } as any),

  searchFace: undefined,
  setSearchFace: (value: any) => set({ searchFace: value } as any),

  numStatus: undefined,
  setNumStatus: (value: any) => set({ numStatus: value } as any),

  //analizer
  messages: [],
  setMessages: (value: any) => set(() => ({ messages: [value] })),

  inputValue: "",
  setInputValue: (value: string) => set({ inputValue: value }),

  chatHistory: [],
  setChatHistory: (value) =>
    set((prev) => ({ chatHistory: [...prev.chatHistory, ...value] })),

  setMessageOnLoading: (value: Message) => {
    set((prev) => ({
      messages: prev.messages.map((i) =>
        i.isLoading == true ? { ...i, ...value } : i
      ),
    }));
  },

  setClearMessage: () => {
    set((prev) => ({
      ...prev,
      messagess: [],
    }));
  },
  summary: { content: "", keywords: [] },
  setSummary: (value) => set({ summary: value }),

  translates: "",
  setTranslate: (value: string) => set({ translates: value }),

  compare: "",
  setCompare: (value: string) => set({ compare: value }),

  category: "",
  setCategory: (value: string) => set({ category: value }),
}));
export default useTmgStore;

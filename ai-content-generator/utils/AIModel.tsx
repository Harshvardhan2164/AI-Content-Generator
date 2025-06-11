import {
  GoogleGenAI,
} from '@google/genai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey});
const config = {
  temperature: 1,
  responseMimeType: 'text/plain',
};
const model = 'gemini-2.0-flash';
const contents = [
  {
    role: 'user',
    parts: [
      {
        text: ``,
      },
    ],
  },
];

export const response = ai.chats.create({
  model,
  config,
});
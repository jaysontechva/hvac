import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (history: { role: string; content: string }[], message: string) => {
  if (!apiKey) {
    return "I am currently in demo mode. Please configure the API Key to chat with JaysonR AI.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are the friendly, professional AI assistant for "JaysonR HVAC", a heating and cooling company based in New York. 
        Your tone is helpful, trustworthy, and expert.
        Services: AC Repair, Installation, Furnace Repair, Ventilation, Air Quality, Commercial HVAC.
        Contact: +639282300210, jaysonramosp@gmail.com.
        Address: New York, USA.
        Goal: Answer HVAC questions, explain services, and encourage booking appointments.
        Keep responses concise (under 100 words) unless asked for detailed steps.`,
      },
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.content }],
      })),
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having trouble connecting to the server. Please call us directly at +639282300210.";
  }
};

export const generateQuoteEstimate = async (data: any) => {
  if (!apiKey) {
    // Fallback for demo without key
    return JSON.stringify({
      estimatedRange: "$200 - $500",
      explanation: "This is a demo estimate. Please provide an API Key for real-time AI analysis.",
      nextSteps: "Call us to confirm."
    });
  }

  try {
    const prompt = `
      Act as an expert HVAC estimator. Analyze the following request and provide a rough estimated price range and a brief explanation.
      
      Data:
      Customer: ${data.customerName}
      Service: ${data.serviceType}
      Property: ${data.propertyType}
      Size: ${data.squareFootage} sq ft
      Notes: ${data.notes}

      Return ONLY JSON with this schema:
      {
        "estimatedRange": "string (e.g. '$300 - $600')",
        "explanation": "string (1-2 sentences explaining factors)",
        "nextSteps": "string (Call to action)"
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedRange: { type: Type.STRING },
            explanation: { type: Type.STRING },
            nextSteps: { type: Type.STRING }
          }
        }
      }
    });

    return response.text;
  } catch (error) {
    console.error("Quote Error:", error);
    return null;
  }
};
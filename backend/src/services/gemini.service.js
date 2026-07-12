const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Generative AI client with your key
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const processRecordsWithAI = async (rawRecords) => {
  const promptText = `
    You are an expert CRM data transformation model. Map these messy user-uploaded records into standard GrowEasy CRM records.

    Rules:
    1. CRM Status Values must ONLY be: 'GOOD_LEAD_FOLLOW_UP', 'DID_NOT_CONNECT', 'BAD_LEAD', or 'SALE_DONE'.
    2. Data Source Values must ONLY be: 'leads_on_demand', 'meridian_tower', 'eden_park', 'varah_swamy', 'sarjapur_plots'. Leave blank if none match confidently.
    3. 'created_at' must be ISO compliant or formatted format convertible using "new Date(created_at)" in JS.
    4. If multiple emails or phone numbers exist, extract the first one into the primary field and append the rest into 'crm_note'.
    5. CRITICAL: If a record contains NEITHER a valid email NOR a mobile number, add it to the skipped list.

    Target CRM fields to extract:
    - created_at, name, email, country_code, mobile_without_country_code, company, city, state, country, lead_owner, crm_status, crm_note, data_source, possession_time, description

    OUTPUT FORMAT REQUIREMENT:
    Return your entire response as a single, valid JSON object. Do not include any conversational markdown text, descriptions, backticks (\`\`\`), or explanations. 

    Expected JSON structure:
    {
      "successfully_parsed": [],
      "skipped_records": []
    }

    Raw Input Data:
    ${JSON.stringify(rawRecords)}
  `;

  // Updated model to the active free tier available version
  const model = ai.getGenerativeModel({ 
    model: "gemini-3.5-flash"
  });

  // Removed generationConfig to prevent the 400 Bad Request error
  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: promptText }] }]
  });

  const responseText = result.response.text();
  
  // Strip out markdown code block wrappers (like ```json ... ```) just in case the model wraps it
  const cleanJsonText = responseText.replace(/```json|```/gi, '').trim();
  
  try {
    return JSON.parse(cleanJsonText);
  } catch (parseError) {
    console.error("Failed to parse Gemini response text as JSON:", responseText);
    throw new Error("AI returned an unparsable response format.");
  }
};

module.exports = { processRecordsWithAI };
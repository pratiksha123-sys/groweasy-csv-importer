const { parseCSVBuffer } = require('../utils/csv.parser');
const { processRecordsWithAI } = require('../services/gemini.service');

const uploadAndPreview = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });
    const parsedData = await parseCSVBuffer(req.file.buffer);
    return res.status(200).json({ preview: parsedData });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const confirmAndProcess = async (req, res) => {
  try {
    const { data } = req.body; 
    if (!data || !Array.isArray(data)) return res.status(400).json({ error: 'Invalid data payload.' });

    let finalSuccessful = [];
    let finalSkipped = [];
    const batchSize = 15; // Processes items in groups to protect token rates cleanly

    for (let i = 0; i < data.length; i += batchSize) {
      const batch = data.slice(i, i + batchSize);
      const aiResponse = await processRecordsWithAI(batch);
      
      if (aiResponse.successfully_parsed) finalSuccessful.push(...aiResponse.successfully_parsed);
      if (aiResponse.skipped_records) finalSkipped.push(...aiResponse.skipped_records);
    }

    return res.status(200).json({
      successfully_parsed: finalSuccessful,
      skipped_records: finalSkipped,
      total_imported: finalSuccessful.length,
      total_skipped: finalSkipped.length
    });
  } catch (err) {
    // Add this line right here to catch the exact error:
    console.error("❌ Gemini Processing Error:", err); 
    
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { uploadAndPreview, confirmAndProcess };
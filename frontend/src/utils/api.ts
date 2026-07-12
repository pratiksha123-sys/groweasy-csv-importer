const BASE_URL = 'https://groweasy-csv-importer-54w2.onrender.com';

export async function uploadCSVPreview(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${BASE_URL}/csv/preview`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to parse file preview.');
  return res.json();
}

export async function confirmAIImport(data: any[]) {
  const res = await fetch(`${BASE_URL}/csv/confirm`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });
  if (!res.ok) throw new Error('AI processing failed.');
  return res.json();
}
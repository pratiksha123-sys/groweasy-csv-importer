# GrowEasy AI CSV Importer

An AI-powered CSV Importer that intelligently extracts, maps, and converts CRM lead information from any valid CSV format into the GrowEasy CRM structure using Google Gemini AI.

---

## 🚀 Features

- Upload CSV files from multiple sources
- Preview uploaded CSV data before processing
- AI-powered intelligent field mapping using Google Gemini
- Automatic extraction of CRM fields
- Responsive and user-friendly interface
- Displays:
  - Successfully imported records
  - Skipped records
  - Total imported
  - Total skipped
- Handles different CSV formats without predefined column names
- Graceful fallback processing when AI quota is exceeded

---

## 🛠 Tech Stack

### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Multer
- CSV Parser

### AI
- Google Gemini API

---

## 📂 Project Structure

```text
groweasy-csv-importer/
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── next.config.js
│
└── .gitignore
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/pratiksha123-sys/groweasy-csv-importer.git

cd groweasy-csv-importer
```

---

# Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=5001
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Start the backend server.

```bash
npm run dev
```

Backend URL:

```
http://localhost:5001
```

---

# Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the frontend.

```bash
npm run dev
```

Frontend URL:

```
http://localhost:3000
```

---

# How to Use

### Step 1

Upload any valid CSV file.

Supported examples:

- Facebook Lead Export
- Google Ads Export
- Excel Files
- CRM Exports
- Sales Reports
- Custom CSV Files

### Step 2

Preview the uploaded CSV before importing.

### Step 3

Click **Confirm Import**.

The backend processes the CSV using Google Gemini AI and maps the data into GrowEasy CRM fields.

### Step 4

View the extracted CRM records along with import statistics.

---

# CRM Fields

The application extracts the following CRM fields automatically:

- created_at
- name
- email
- country_code
- mobile_without_country_code
- company
- city
- state
- country
- lead_owner
- crm_status
- crm_note
- data_source
- possession_time
- description

---

## API Configuration

Create a `.env` file inside the `backend` folder with the following variables:

```env
PORT=5001
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

> **Note:** Keep your `.env` file private and never commit or upload it to a public GitHub repository.

---

# Security

Add the following entries to your `.gitignore` file.

```gitignore
backend/.env
backend/node_modules/
frontend/node_modules/
.next/
```

---

# Future Improvements
- Docker Support
- Unit Testing
- Dark Mode
- Progress Indicators
- AI Prompt Optimization

---

# Repository

GitHub Repository:

https://github.com/pratiksha123-sys/groweasy-csv-importer

---

# Author

**Pratiksha Kote**

Software Developer | AI & Machine Learning Enthusiast

This project was developed as part of the **GrowEasy Software Developer Assessment**.

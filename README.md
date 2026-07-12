# GrowEasy AI CSV Importer

An AI-powered CRM Lead Importer that intelligently extracts, maps, and converts lead information from CSV files into the GrowEasy CRM format using Google Gemini AI.

## 🚀 Features

- Upload CSV files from different sources
- Preview uploaded CSV data before processing
- AI-powered intelligent field mapping using Google Gemini
- Automatic CRM field extraction
- Responsive and modern user interface
- Displays:
  - Successfully imported records
  - Skipped records
  - Total imported
  - Total skipped
- Local fallback processing when AI quota is exceeded

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
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
pratiksha123-sys/groweasy-csv-importer

cd groweasy-csv-importer
```

---

## Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5001
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Start backend

```bash
npm run dev
```

Backend runs at

```
http://localhost:5001
```

---

## Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start frontend

```bash
npm run dev
```

Frontend runs at

```
http://localhost:3000
```

---

## 📋 Usage

### Step 1

Upload any CSV file.

Supported examples:

- Facebook Lead Ads
- Google Ads
- Excel Files
- CRM Exports
- Custom CSV Files

### Step 2

Preview uploaded CSV before importing.

### Step 3

Click **Confirm Import**.

The backend processes the CSV using Google Gemini AI.

### Step 4

View extracted CRM records including:

- Lead Name
- Email
- Mobile Number
- Company
- City
- State
- Country
- Lead Status
- Notes
- Data Source
- Description

---

## CRM Fields

The application extracts the following fields automatically:

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

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5001
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

> **Do not upload your `.env` file to GitHub.**

---

## Security

Add the following to `.gitignore`

```gitignore
backend/.env
backend/node_modules/
frontend/node_modules/
.next/
```

---

## Future Improvements

- User Authentication
- Database Integration
- Deployment with Docker
- Unit Testing
- AI Prompt Optimization
- Dark Mode
- Progress Indicators

---

## Author

**Pratiksha Kote**

Software Developer | AI & Machine Learning Enthusiast

---

## License

This project was developed as part of the **GrowEasy Software Developer Internship Assessment**.

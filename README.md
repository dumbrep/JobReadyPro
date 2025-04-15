# JobReadyPro
 
# JobReady Pro - Complete Placement Preparation System 🎯

JobReady Pro is an AI-driven platform designed to help candidates prepare for job placements through intelligent interview simulation, resume analysis, and job recommendations. Built with a modern tech stack, it combines machine learning, computer vision, and large language models to deliver an all-in-one preparation tool.

---

## 🚀 Features

### 🧠 AI-Powered Interview Simulator
- Frontend: **React.js**
- Backend: **FastAPI**
- Uses **GPT-4o Mini** for generating dynamic, role-specific interview questions.
- Provides real-time question flow and captures user responses.

### 🎥 Real-time Facial Analysis
- Utilizes **OpenCV** for facial tracking (eye contact, head pose, engagement).
- Integrates **DeepFace** for emotion detection and behavioral insights during interviews.

### 📄 Resume ATS Scoring & Feedback
- Integrated with **Google Gemini 2.0 Flash** to:
  - Evaluate resumes like an ATS system.
  - Provide HR-style feedback to improve structure, clarity, and impact.

### 🔍 Smart Job Search with Resume
- Users can upload their resume.
- The system uses the **JSearch API** to recommend relevant job listings based on skills and experience.

---

## 🛠️ Tech Stack

| Frontend      | Backend     | AI/ML Services           | APIs Used            |
|---------------|-------------|--------------------------|----------------------|
| React.js      | FastAPI     | GPT-4o Mini (OpenAI)     | JSearch API          |
|   CSS         | Python      | OpenCV(DeepFace)         | Google Gemini Flash  |


---



## 🧑‍💻 How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/jobready-pro.git
cd jobready-pro
cd backend
.\venv\Scripts\activate
python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload

(in new terminal)
cd jobready-pro
cd frontend
npm run dev

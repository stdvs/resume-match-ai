# Resume Match AI

An AI-powered resume tailoring tool that analyses your resume against a job description and tells you exactly what to improve before you apply.

## Features
- Match score out of 100 with a breakdown by keywords, skills, experience and ATS readiness
- Matching skills and missing keywords, ranked by priority
- Before/after bullet-point rewrites
- One-click tailored resume and cover letter generation
- Re-score loop to track improvement after edits
- Dynamic glassmorphism UI that changes colour with your score

## How it works
User → UI → Gemini API → Structured JSON analysis → Dashboard

## Responsible AI
The model is instructed never to invent experience, skills or achievements. It only rephrases and reorders what is already in the resume.

## Tech stack
Google AI Studio (Build), Gemini API, React, CSS glassmorphism


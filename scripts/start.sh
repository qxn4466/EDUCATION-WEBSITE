#!/bin/bash

echo "Starting Education Website..."

# Start backend
echo "Starting Backend Server..."
cd ~/education-website/backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Start frontend
echo "Starting Frontend Server..."
cd ~/education-website/frontend
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Backend running at: http://localhost:8000"
echo "✅ Frontend running at: http://localhost:3000"
echo "✅ API Docs at: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to press Ctrl+C
wait $BACKEND_PID $FRONTEND_PID
EOF

chmod +x scripts/start.sh
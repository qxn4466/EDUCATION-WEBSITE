from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import router
from app.core.config import settings
from app.database import engine, Base

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.APP_NAME, debug=settings.DEBUG)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://vidyaclasses.in.net", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(router, prefix="/api/v1", tags=["enquiries"])

@app.get("/")
async def root():
    return {
        "message": "Education Website API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# 👇 Add this at the very bottom
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))
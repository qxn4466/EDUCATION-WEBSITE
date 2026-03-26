from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = "postgresql://avinash:avinash123@/education_db"
    
    # Email
    RESEND_API_KEY: str = "re_your_resend_api_key_here"
    ADMIN_EMAIL: str = "admin@example.com"
    
    # App
    APP_NAME: str = "Education Website"
    DEBUG: bool = True
    SECRET_KEY: str = "your-secret-key-here-change-this-for-production"
    
    # CORS
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000"]
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
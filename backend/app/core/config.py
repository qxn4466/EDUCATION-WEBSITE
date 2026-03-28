from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = "postgresql://avinash:avinash123@/education_db"
    
    # Email - SMTP
    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    EMAIL_FROM: str = ""
    
    # Email - Resend (optional, keep for compatibility)
    RESEND_API_KEY: str = "re_e4ZJUh1K_CP39nuHd4XnTu8b5U7js34w4"
    ADMIN_EMAIL: str = "avinash.suregaonkar@gmail.com"

    # App                                                                   
    APP_NAME: str = "Education Website"
    DEBUG: bool = True
    SECRET_KEY: str = "fUkyK8-71vvOIxQbr2plsydSaCQybw3R1LTX9lYWLbY"

    # CORS
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000"]
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
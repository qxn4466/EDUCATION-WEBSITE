from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = "postgresql://postgres:postgres@localhost:5432/education_db"
    
    # Email - Resend (only)
    RESEND_API_KEY: str = "re_e4ZJUh1K_CP39nuHd4XnTu8b5U7js34w4"
    ADMIN_EMAIL: str = "vidyaclassesbgm@gmail.com"

    # Admin
    ADMIN_SECRET: str = "vidya@123"

    # App                                                                   
    APP_NAME: str = "Vidya Classes"
    DEBUG: bool = False
    SECRET_KEY: str = "fUkyK8-71vvOIxQbr2plsydSaCQybw3R1LTX9lYWLbY"

    # CORS
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://152.67.4.81:5000",
        "https://vidyaclasses.in.net",
        "http://localhost:3000"
    ]
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
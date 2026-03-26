from pydantic import BaseModel, Field, validator
from datetime import datetime
from typing import Optional

class StudentEnquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=15)
    class_subject: Optional[str] = Field(None, max_length=100)
    message: Optional[str] = Field(None, max_length=1000)
    
    @validator('phone')
    def validate_phone(cls, v):
        if not v.isdigit():
            raise ValueError('Phone number must contain only digits')
        return v

class StudentEnquiryResponse(BaseModel):
    id: int
    name: str
    phone: str
    class_subject: Optional[str]
    message: Optional[str]
    created_at: datetime
    is_processed: bool
    
    class Config:
        from_attributes = True

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=15)
    message: str = Field(..., min_length=10, max_length=1000)
    
    @validator('phone')
    def validate_phone(cls, v):
        if not v.isdigit():
            raise ValueError('Phone number must contain only digits')
        return v

class ContactResponse(BaseModel):
    id: int
    name: str
    phone: str
    message: str
    created_at: datetime
    is_processed: bool
    
    class Config:
        from_attributes = True
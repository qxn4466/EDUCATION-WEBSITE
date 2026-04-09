from pydantic import BaseModel, Field, validator
from datetime import datetime
from typing import Optional

class ReviewCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    rating: int = Field(..., ge=1, le=5)
    comment: str = Field(..., min_length=5, max_length=1000)
    
    @validator('name')
    def validate_name(cls, v):
        return v.strip()
    
    @validator('comment')
    def validate_comment(cls, v):
        return v.strip()

class ReviewResponse(BaseModel):
    id: int
    name: str
    rating: int
    comment: str
    created_at: datetime
    is_approved: bool
    
    class Config:
        from_attributes = True

class ReviewApproveResponse(BaseModel):
    id: int
    is_approved: bool
    message: str
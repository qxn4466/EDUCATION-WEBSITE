from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models.enquiry import StudentEnquiry, ContactSubmission
from app.schemas.enquiry import StudentEnquiryCreate, StudentEnquiryResponse, ContactCreate, ContactResponse
from app.services.email import send_enquiry_email, send_contact_email

router = APIRouter()

@router.post("/enquiries", response_model=StudentEnquiryResponse, status_code=status.HTTP_201_CREATED)
async def create_enquiry(enquiry: StudentEnquiryCreate, db: Session = Depends(get_db)):
    """Create a new student enquiry"""
    try:
        db_enquiry = StudentEnquiry(
            name=enquiry.name,
            phone=enquiry.phone,
            class_subject=enquiry.class_subject,
            message=enquiry.message
        )
        db.add(db_enquiry)
        db.commit()
        db.refresh(db_enquiry)
        
        enquiry_data = {
            "name": enquiry.name,
            "phone": enquiry.phone,
            "class_subject": enquiry.class_subject,
            "message": enquiry.message,
            "created_at": db_enquiry.created_at
        }
        
        await send_enquiry_email(enquiry_data)
        
        return db_enquiry
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
async def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    """Create a new contact form submission"""
    try:
        db_contact = ContactSubmission(
            name=contact.name,
            phone=contact.phone,
            message=contact.message
        )
        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)
        
        contact_data = {
            "name": contact.name,
            "phone": contact.phone,
            "message": contact.message,
            "created_at": db_contact.created_at
        }
        
        await send_contact_email(contact_data)
        
        return db_contact
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/enquiries", response_model=List[StudentEnquiryResponse])
async def get_enquiries(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """Get all student enquiries"""
    enquiries = db.query(StudentEnquiry).offset(skip).limit(limit).all()
    return enquiries

@router.get("/contacts", response_model=List[ContactResponse])
async def get_contacts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """Get all contact submissions"""
    contacts = db.query(ContactSubmission).offset(skip).limit(limit).all()
    return contacts
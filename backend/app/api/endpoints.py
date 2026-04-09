from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models.enquiry import StudentEnquiry, ContactSubmission
from app.schemas.enquiry import StudentEnquiryCreate, StudentEnquiryResponse, ContactCreate, ContactResponse
from app.services.email import send_enquiry_email, send_contact_email
from app.models.review import Review
from app.schemas.review import ReviewCreate, ReviewResponse, ReviewApproveResponse

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

@router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}



@router.post("/reviews", response_model=ReviewResponse, status_code=status.HTTP_201_CREATED)
async def submit_review(review: ReviewCreate, db: Session = Depends(get_db)):
    """Submit a new review (pending approval)"""
    try:
        db_review = Review(
            name=review.name,
            rating=review.rating,
            comment=review.comment
        )
        db.add(db_review)
        db.commit()
        db.refresh(db_review)
        return db_review
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/reviews", response_model=list[ReviewResponse])
async def get_approved_reviews(
    limit: int = 10, 
    skip: int = 0, 
    db: Session = Depends(get_db)
):
    """Get approved reviews for public display"""
    reviews = db.query(Review).filter(
        Review.is_approved == True
    ).order_by(Review.created_at.desc()).offset(skip).limit(limit).all()
    return reviews

@router.get("/admin/reviews", response_model=list[ReviewResponse])
async def get_pending_reviews(
    secret: str, 
    db: Session = Depends(get_db)
):
    """Admin: Get all pending reviews (requires secret)"""
    from app.core.config import settings
    if secret != settings.ADMIN_SECRET:
        raise HTTPException(status_code=403, detail="Invalid admin secret")
    
    reviews = db.query(Review).filter(
        Review.is_approved == False
    ).order_by(Review.created_at.desc()).all()
    return reviews

@router.put("/admin/reviews/{review_id}/approve", response_model=ReviewApproveResponse)
async def approve_review(
    review_id: int, 
    secret: str, 
    db: Session = Depends(get_db)
):
    """Admin: Approve a review (requires secret)"""
    from app.core.config import settings
    if secret != settings.ADMIN_SECRET:
        raise HTTPException(status_code=403, detail="Invalid admin secret")
    
    review = db.query(Review).filter(Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    
    review.is_approved = True
    db.commit()
    db.refresh(review)
    
    return ReviewApproveResponse(
        id=review.id,
        is_approved=review.is_approved,
        message="Review approved successfully"
    )

@router.delete("/admin/reviews/{review_id}")
async def delete_review(
    review_id: int, 
    secret: str, 
    db: Session = Depends(get_db)
):
    """Admin: Delete a review (requires secret)"""
    from app.core.config import settings
    if secret != settings.ADMIN_SECRET:
        raise HTTPException(status_code=403, detail="Invalid admin secret")
    
    review = db.query(Review).filter(Review.id == review_id).first()
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    
    db.delete(review)
    db.commit()
    
    return {"message": "Review deleted successfully"}
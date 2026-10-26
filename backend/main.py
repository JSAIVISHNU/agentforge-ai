from fastapi import FastAPI
from sqlalchemy import text

from database import engine

app = FastAPI(
    title="AgentForge AI API",
    description="Backend API for the AgentForge AI platform",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "AgentForge AI API",
    }


@app.get("/health/db")
def db_health_check():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        return {"status": "healthy", "database": "connected"}
    except Exception as exc:  # pragma: no cover
        return {"status": "unhealthy", "database": str(exc)}


@app.get("/")
def root():
    return {"message": "Welcome to AgentForge AI"}

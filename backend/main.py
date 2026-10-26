from fastapi import FastAPI

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


@app.get("/")
def root():
    return {"message": "Welcome to AgentForge AI"}

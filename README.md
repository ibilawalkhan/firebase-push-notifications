Step 1: Clone Repository
Clone the repository from the provided link.

Step 2: Install Dependencies
npm install and install nodemon separately

Step 3: Create .env File
Create a file named .env at the root of the project with the following content:
PORT=7000
CORS_ORIGIN=*

Step 4: Firebase Configuration
Place the attached firebase.config.json inside src/config/ directory.
This file contains Firebase service account credentials.
Example firebase.config.json Structure:
{
    "type": "service_account",
    "project_id": "pushnotifications-5d646",
    "private_key_id": "your-private-key-id",
    "private_key": "-----BEGIN PRIVATE KEY-----\\nMII...",
    "client_email": "firebase-adminsdk-fbsvc@pushnotifications-5d646.iam.gserviceaccount.com",
    "client_id": "100298329934687298662",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40pushnotifications-5d646.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

Step 5: Start the Service
Run the service using:
npm run dev


✅ API Endpoint Documentation
Endpoint
POST /api/v1/push-notification/send-notification

Request 
POST /api/v1/push-notification/send-notification
{
    "title": "Test Notification",
    "body": "This is a dry-run test notification",
    "token": "Put the token from the email attached"
}

Expected Output:
{
    "statusCode":200,
    "data":"projects/pushnotifications-5d646/messages/fake_message_id",
    "message":"Notification sent successfully",
    "success":true
}

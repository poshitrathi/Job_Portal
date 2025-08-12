# Job Portal Deployment Guide

## Overview
This guide will help you deploy your Job Portal application to production using Render.

## Prerequisites
- GitHub repository with your code
- MongoDB Atlas account (for production database)
- Cloudinary account (for image uploads)
- Gmail account with App Password (for email functionality)

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account or sign in
3. Create a new cluster
4. Create a database user with read/write permissions
5. Get your connection string
6. Replace `mongodb://127.0.0.1:27017` with your Atlas connection string

## Step 2: Deploy Backend to Render

1. Go to [Render](https://render.com) and sign up/sign in
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `job-portal-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variables:
   - `NODE_ENV`: `production`
   - `PORT`: `10000`
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET_KEY`: Generate a secure random string
   - `FRONTEND_URL`: Your frontend URL (will add after frontend deployment)
   - `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
   - `CLOUDINARY_API_SECRET`: Your Cloudinary API secret
   - `CLOUDINARY_API_KEY`: Your Cloudinary API key
   - `SMTP_MAIL`: Your Gmail address
   - `SMTP_PASSWORD`: Your Gmail App Password

6. Click "Create Web Service"
7. Wait for deployment to complete
8. Note your backend URL (e.g., `https://job-portal-backend.onrender.com`)

## Step 3: Deploy Frontend to Render

1. In Render, click "New +" and select "Static Site"
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: `job-portal-frontend`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`

4. Add Environment Variables:
   - `VITE_API_URL`: Your backend URL from Step 2

5. Click "Create Static Site"
6. Wait for deployment to complete
7. Note your frontend URL (e.g., `https://job-portal-frontend.onrender.com`)

## Step 4: Update Backend Frontend URL

1. Go back to your backend service in Render
2. Update the `FRONTEND_URL` environment variable with your frontend URL
3. Redeploy the backend service

## Step 5: Test Your Deployment

1. Visit your frontend URL
2. Test user registration/login
3. Test job posting functionality
4. Test email functionality
5. Test image uploads

## Environment Variables Reference

### Backend (.env)
```env
PORT=10000
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jobportal
FRONTEND_URL=https://your-frontend-domain.onrender.com
JWT_SECRET_KEY=your-secure-jwt-secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_API_KEY=your-api-key
SMTP_SERVICE=gmail
SMTP_MAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-domain.onrender.com
```

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Ensure `FRONTEND_URL` is set correctly in backend
2. **Database Connection**: Check MongoDB Atlas connection string and network access
3. **Email Issues**: Verify Gmail App Password is correct
4. **Image Upload**: Ensure Cloudinary credentials are correct

### Logs:
- Check Render service logs for any errors
- Verify environment variables are set correctly
- Ensure all required services are running

## Security Notes

1. **Never commit `.env` files to Git**
2. **Use strong, unique JWT secrets**
3. **Enable MongoDB Atlas network security**
4. **Use environment variables for all sensitive data**
5. **Regularly update dependencies**

## Cost Optimization

- Render free tier: 750 hours/month for backend
- Static site hosting is free
- MongoDB Atlas: 512MB free tier
- Cloudinary: 25GB free tier

## Next Steps

After successful deployment:
1. Set up custom domain (optional)
2. Configure SSL certificates
3. Set up monitoring and logging
4. Implement CI/CD pipeline
5. Set up backup strategies 
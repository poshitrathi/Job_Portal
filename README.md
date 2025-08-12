# 🚀 Job Portal - Full Stack Application

A modern, feature-rich job portal built with React, Node.js, and MongoDB. Connect job seekers with employers through an intuitive platform with real-time features.

## 🌐 Live Demo

- **Frontend Application**: [https://job-portal-7nn8.onrender.com](https://job-portal-7nn8.onrender.com)
- **Backend API**: [https://job-portal-backend-qjth.onrender.com](https://job-portal-backend-qjth.onrender.com)
- **API Health Check**: [https://job-portal-backend-qjth.onrender.com/health](https://job-portal-backend-qjth.onrender.com/health)

> **Note**: The application is deployed on Render's free tier, so it may take a few moments to wake up on first access.

## ✨ Features

### 🔐 User Management
- **User Registration & Authentication** - Secure JWT-based authentication
- **Role-Based Access Control** - Separate interfaces for Job Seekers and Employers
- **Profile Management** - Update personal information and preferences
- **Password Management** - Secure password updates

### 💼 Job Management
- **Job Posting** - Employers can create detailed job listings
- **Job Search & Filtering** - Advanced search by location, niche, and keywords
- **Job Applications** - Job seekers can apply with resumes and cover letters
- **Application Tracking** - Monitor application status and responses

### 📧 Communication
- **Email Notifications** - Automated email system for job updates
- **Newsletter System** - Cron-based automated email campaigns
- **Real-time Updates** - Instant notifications for important events

### 🖼️ File Management
- **Resume Uploads** - Cloudinary integration for document storage
- **Profile Pictures** - Image upload and management
- **Secure File Handling** - Protected file access and storage

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and functional components
- **Redux Toolkit** - State management with simplified Redux
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API communication
- **React Toastify** - User notification system

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing and security
- **Multer** - File upload handling
- **Nodemailer** - Email functionality
- **Node-cron** - Automated task scheduling

### Infrastructure
- **Render** - Cloud hosting platform
- **MongoDB Atlas** - Cloud database service
- **Cloudinary** - Cloud image and file management

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/poshitrathi/Job_Portal.git
   cd Job_Portal
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create `backend/config/config.env`:
   ```env
   PORT=4000
   MONGO_URI=mongodb://127.0.0.1:27017/jobportal
   FRONTEND_URL=http://localhost:5173
   JWT_SECRET_KEY=your-secret-key
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

5. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

6. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:4000

## 🌐 Production Deployment

### Backend Deployment (Render)

1. **Create Render Account**
   - Sign up at [render.com](https://render.com)

2. **Deploy Backend Service**
   - Connect your GitHub repository
   - Select "Web Service"
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Environment Variables**
   ```
   NODE_ENV=production
   PORT=10000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jobportal
   JWT_SECRET_KEY=your-secure-jwt-secret
   FRONTEND_URL=https://your-frontend-domain.onrender.com
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_SECRET=your-api-secret
   CLOUDINARY_API_KEY=your-api-key
   SMTP_MAIL=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

### Frontend Deployment (Render)

1. **Deploy Static Site**
   - Select "Static Site"
   - Build Command: `cd frontend && npm install && npm run build`
   - Publish Directory: `frontend/dist`

2. **Environment Variables**
   ```
   VITE_API_URL=https://your-backend-domain.onrender.com
   ```

## 📁 Project Structure

```
Job_Portal/
├── backend/                 # Backend server
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── automation/         # Cron jobs and automation
│   ├── app.js             # Express app configuration
│   └── server.js          # Server entry point
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store and slices
│   │   ├── config/         # Configuration files
│   │   └── App.jsx         # Main app component
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── DEPLOYMENT.md           # Detailed deployment guide
└── README.md               # This file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/logout` - User logout
- `GET /api/v1/user/getuser` - Get user profile
- `PUT /api/v1/user/update/profile` - Update profile
- `PUT /api/v1/user/update/password` - Update password

### Jobs
- `GET /api/v1/job/getall` - Get all jobs with filters
- `GET /api/v1/job/get/:id` - Get specific job
- `POST /api/v1/job/post` - Create new job
- `GET /api/v1/job/getmyjobs` - Get employer's jobs
- `DELETE /api/v1/job/delete/:id` - Delete job

### Applications
- `POST /api/v1/application/post/:jobId` - Submit application
- `GET /api/v1/application/employer/getall` - Get employer applications
- `GET /api/v1/application/jobseeker/getall` - Get job seeker applications
- `DELETE /api/v1/application/delete/:id` - Delete application

## 🔐 User Roles

### Job Seeker
- Browse and search jobs
- Submit job applications
- Manage profile and resume
- Track application status

### Employer
- Post job listings
- Review applications
- Manage job postings
- Send notifications

## 🚨 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt encryption for passwords
- **CORS Protection** - Cross-origin resource sharing security
- **Input Validation** - Data sanitization and validation
- **File Upload Security** - Secure file handling and storage

## 📧 Email Features

- **SMTP Integration** - Gmail SMTP for notifications
- **Automated Emails** - Cron-based newsletter system
- **Application Notifications** - Real-time email updates
- **Customizable Templates** - Professional email formatting

## 🎯 Key Features

### Real-time Updates
- Instant application notifications
- Real-time job status updates
- Live email notifications

### Advanced Search
- Location-based filtering
- Niche-specific job matching
- Keyword search functionality

### Responsive Design
- Mobile-first approach
- Cross-browser compatibility
- Modern UI/UX design

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check MongoDB URI in environment variables
   - Verify MongoDB service is running
   - Check network connectivity

2. **Authentication Issues**
   - Verify JWT secret key
   - Check cookie settings
   - Ensure CORS configuration

3. **File Upload Failures**
   - Verify Cloudinary credentials
   - Check file size limits
   - Ensure proper file formats

### Debug Mode

Enable debug logging by checking backend console output:
```
🔍 Request logging
📧 Headers information
🍪 Cookie details
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Poshit Rathi**
- GitHub: [@poshitrathi](https://github.com/poshitrathi)
- Email: poshitrathi03@gmail.com

## 🙏 Acknowledgments

- MongoDB Atlas for cloud database hosting
- Render for cloud application hosting
- Cloudinary for file management services
- React and Node.js communities for excellent documentation

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/poshitrathi/Job_Portal/issues) page
2. Review the [DEPLOYMENT.md](DEPLOYMENT.md) guide
3. Contact the author at poshitrathi03@gmail.com

---

⭐ **Star this repository if you find it helpful!** 
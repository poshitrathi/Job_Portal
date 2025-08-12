import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connection } from "./database/connection.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import jobRouter from "./routes/jobRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import { newsLetterCron } from "./automation/newsLetterCron.js";

console.log("Starting to import modules...");
console.log("Express imported successfully");
console.log("Dotenv imported successfully");
console.log("CORS imported successfully");
console.log("Database connection imported successfully");
console.log("Cookie parser imported successfully");
console.log("Error middleware imported successfully");
console.log("File upload imported successfully");
console.log("User router imported successfully");
console.log("Job router imported successfully");
console.log("Application router imported successfully");
console.log("Newsletter cron imported successfully");

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposedHeaders: ["Set-Cookie"],
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`🔍 ${req.method} ${req.path}`);
  console.log('📧 Headers:', req.headers);
  console.log('🍪 Cookies:', req.cookies);
  next();
});

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Job Portal Backend is running!", status: "OK" });
});

app.get("/health", (req, res) => {
  res.json({ message: "Health check passed", status: "OK" });
}); 

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);

console.log("About to mount routes...");

try {
  app.use("/api/v1/user", userRouter);
  console.log("✅ User routes mounted at /api/v1/user");
} catch (error) {
  console.error("❌ Failed to mount user routes:", error);
}

try {
  app.use("/api/v1/job", jobRouter);
  console.log("✅ Job routes mounted at /api/v1/job");
} catch (error) {
  console.error("❌ Failed to mount job routes:", error);
}

try {
  app.use("/api/v1/application", applicationRouter);
  console.log("✅ Application routes mounted at /api/v1/application");
} catch (error) {
  console.error("❌ Failed to mount application routes:", error);
}

console.log("🎯 All routes mounted successfully");

newsLetterCron()
connection();
app.use(errorMiddleware);

export default app;
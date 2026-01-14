# Pure Pic.ai – AI Background Image Remover (Frontend)

**Motto**: “Pure Images, Zero Distractions. Powered by AI.”

**Overview**:  
Pure Pic.ai is a modern **AI-powered background image remover frontend application** built using **React + Vite**.  
The platform enables users to upload images, remove backgrounds instantly, manage usage through a **credit-based system**, and securely purchase credits using **Razorpay**.  
User authentication, authorization, and session handling are managed using **Clerk Authentication**.

---
## LLD with Flowchart
![LLD of Pure Pic.ai](https://drive.google.com/uc?export=view&id=1gZaVMQQ7OuMykTu-estRlsXZ4sKcmkv6)


---

## Pages & Features

### 1. Home Page
- Hero section with clear call-to-action
- Image upload section
- **How to Remove Background in Seconds?** guide
- **Stunning Quality** before/after comparison slider
- Credit plans preview
- Testimonials
- Multiple image upload entry points

---

### 2. Result Page
- Side-by-side comparison:
  - **Before Image**
  - **Background Removed Image**
- Actions available:
  - **Try Another Image**
  - **Download Result Image**

---

### 3. Buy Credits Page
Users can purchase credits securely using Razorpay.

1. **Basic Package – ₹499**
   - 100 credits 🪙  
   - Perfect for personal projects and quick edits  

2. **Premium Package – ₹899 (Most Popular)**
   - 300 credits 🪙  
   - Ideal for creators and businesses needing high-quality visuals  

3. **Ultimate Package – ₹1499**
   - 1000 credits 🪙  
   - Built for enterprises and power users  

---

### 4. Not Found Page
- Custom 404 page for invalid routes

---

## Authentication & User Management

Authentication is handled using **Clerk**, providing:
- Email & password login
- OAuth authentication
- Email verification using OTP
- Forgot password support
- Secure JWT-based session handling

User details are automatically synced with the backend after login.

---

## Credit Management System

- Each background removal consumes **1 credit**
- Credits are stored globally using **React Context API**
- Credits update instantly after:
  - Successful background removal
  - Successful payment

---

## Background Removal Flow

1. User uploads an image
2. Authentication is verified
3. Image is sent as `multipart/form-data`
4. Backend processes the image using AI
5. Background-removed image is returned
6. Result is displayed on the Result page
7. One credit is deducted

---

## Payment Integration

- Razorpay Checkout (Test Mode)
- Secure order creation & verification
- Credits added instantly after payment
- UI updates in real time

---

## State Management

Global state is managed using **React Context API**:
- User credits
- Uploaded image
- Result image
- Backend communication
- Auth-aware navigation

---

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Framer Motion
- React Hot Toast

### Authentication & Payments
- Clerk Authentication
- Razorpay Payment Gateway

---

## Conclusion

Pure Pic.ai Frontend is a production-ready, secure, and responsive application demonstrating real-world usage of authentication, payments, AI-based image processing, and modern UI/UX practices.
The project showcases clean architecture, efficient state management, and seamless backend integration.

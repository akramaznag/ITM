# ITM — IT Service Management Platform

## 📌 Overview

**ITM (IT Service Management Platform)** is a full-stack web application designed to manage IT support requests. The platform is inspired by tools like Jira and ServiceNow, providing a structured workflow for handling client issues related to IT products and services.

It enables clients to create support tickets, allows administrators to manage and assign these requests, and lets technicians handle and resolve issues efficiently.

---

## 🚀 Features

### 🔹 General

* Ticket/request management system
* Role-based access control
* Structured workflow for handling IT issues
* Client–technician interaction via scheduled calls/interventions
* Advanced search and filtering system

### 🔎 Search & Filtering

* Real-time search across requests
* Advanced filtering via dynamic dropdowns
* Admin can search and select clients or technicians by name
* Autocomplete-style filtering for faster data selection
* Efficient handling of large datasets

---

## 👥 Actors & Roles

### 🧑‍💼 Admin (Currently Implemented)

* Manage products (CRUD)
* Manage clients (CRUD)
* Manage technicians (CRUD)
* Manage requests (create, assign, update, delete)
* Assign requests to technicians
* Search and filter requests using advanced dropdown system

### 🛠️ Technician *(In Progress)*

* View assigned requests
* Update request status/details
* Close resolved requests
* Access client information related to assigned tickets

### 👤 Client *(In Progress)*

* Create an account
* Submit a support request (ticket)
* Schedule a call/appointment (intervention)
* Pay after issue resolution

---

## 🔄 Workflow

1. Client creates a ticket describing their issue
2. Admin reviews and assigns the request to a technician
3. Technician contacts the client and performs the intervention
4. Issue is resolved and the request is closed
5. Client completes payment

---

## 🧱 Tech Stack

* Frontend: React.js, Redux Toolkit, Redux Persist, Axios
* Backend: Node.js, Express.js
* Database: MySQL (via Prisma ORM)
* Authentication: JWT
* API: RESTful APIs
* API Testing: Postman

---

## ⚙️ Project Status

* ✅ Admin dashboard implemented
* 🚧 Technician interface in development
* 🚧 Client interface in development

---

## 📷 Screenshots

<img width="949" height="476" alt="image" src="https://github.com/user-attachments/assets/b8642bdf-29d9-4f71-afec-c78b89ac84b3" />
<img width="947" height="477" alt="image" src="https://github.com/user-attachments/assets/e19693de-e78d-4bc3-b005-00942e83dd63" />
<img width="959" height="474" alt="image" src="https://github.com/user-attachments/assets/64dac790-b7a9-4075-9e24-75093974d8fc" />
<img width="959" height="477" alt="image" src="https://github.com/user-attachments/assets/8be04f7e-86b1-4632-840a-2539dee76cd1" />
<img width="959" height="475" alt="image" src="https://github.com/user-attachments/assets/81512d47-643e-45e0-8d82-180aeed1f09a" />


---

## 📦 Installation

```bash id="k3x9pa"
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 📬 Contact
akramaznag96@gmail.com
www.linkedin.com/in/akram-aznag
06 74 33 78 72

For any questions or suggestions, feel free to reach out.

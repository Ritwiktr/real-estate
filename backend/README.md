# London Estate Agency – Backend API

Node.js (Express) + TypeScript + Prisma. Database: **PostgreSQL on Aiven**.

## Setup

```bash
npm install
cp .env.example .env   # then set DATABASE_URL to your Aiven connection string
npx prisma generate
```

## Database on Aiven

Tables are created on your **Aiven PostgreSQL** instance.

- **First-time setup:**  
  `NODE_TLS_REJECT_UNAUTHORIZED=0 npx prisma db push`  
  (Then run seed once.)

- **Seed (3 London properties):**  
  `NODE_TLS_REJECT_UNAUTHORIZED=0 npx prisma db seed`

If you see a TLS "bad certificate format" error, either:

- Run commands with `NODE_TLS_REJECT_UNAUTHORIZED=0` (dev only), or  
- Download the CA certificate from your Aiven project and configure your environment to use it.

## Run

```bash
# Development (with Aiven TLS workaround if needed)
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run dev
```

Server: **http://localhost:4000**

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/properties` | List properties (query: `type`, `minPrice`, `maxPrice`) |
| GET | `/api/properties/:slug` | Single property by slug |
| POST | `/api/inquire` | Submit inquiry (body: `property_id?`, `name`, `email`, `phone`, `message`, `type`) |
| POST | `/api/maintenance` | Submit maintenance request (body: `tenant_name`, `property_address`, `issue_type`, `description`) |

## Schema (Prisma)

- **Property** – type (SALE | RENT | HOLIDAY), status, price, address, bedrooms, bathrooms, area_sqft, features, images, is_featured.
- **Inquiry** – optional property_id, name, email, phone, message, type.
- **MaintenanceRequest** – tenant_name, property_address, issue_type, description, status.

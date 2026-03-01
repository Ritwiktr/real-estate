# Property Management Company Website

London-based property management: tenancy management, holiday lettings, landlord and tenant support. Next.js 14 frontend + Express + PostgreSQL backend.

## Structure

```
nextjs-app/
├── frontend/     # Next.js 14 (App Router), Tailwind, 17 pages
├── backend/      # Express API, Prisma, PostgreSQL
└── README.md
```

## Setup

### 1. Backend

```bash
cd backend
npm install
```

Create `.env` (copy from `.env.example`):

- `DATABASE_URL` – PostgreSQL connection string (e.g. `postgresql://user:password@localhost:5432/property_management`)
- `JWT_SECRET` – at least 16 characters

Run migrations and seed:

```bash
npx prisma migrate deploy    # or: npx prisma migrate dev
npx prisma db seed
```

Start the API:

```bash
npm run dev
```

Backend runs at **http://localhost:4000**. Health: http://localhost:4000/api/health

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at **http://localhost:3000**. All `/api/*` requests are proxied to the backend.

If you see "too many open files" or a 404 on `/`, run `ulimit -n 10240` in your terminal and try `npm run dev` again.

## Run both

1. Terminal 1: `cd backend && npm run dev`
2. Terminal 2: `cd frontend && npm run dev`
3. Open http://localhost:3000

## Pages (17)

| Route | Page |
|-------|------|
| `/` | Home (hero, Get In Touch form, featured listings, why choose us, areas) |
| `/about` | About Us |
| `/services` | Services overview |
| `/services/tenant-placement` | Tenant Placement and Screening |
| `/services/maintenance-inspections` | Property Maintenance and Inspections |
| `/services/financial-management` | Financial Management and Reporting |
| `/properties` | Property Listings (filters, grid) |
| `/properties/[id]` | Property detail + maintenance request form |
| `/owners` | Owners / Landlords |
| `/tenants` | Tenants |
| `/maintenance-request` | Maintenance Request form |
| `/blog` | Blog |
| `/blog/[slug]` | Blog post |
| `/testimonials` | Testimonials + submit form |
| `/faqs` | FAQs |
| `/slavery-statement` | Slavery and Human Trafficking Statement |
| `/contact` | Contact Us (enquiry form) |
| `/login` | Portal Login (Owners / Tenants) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

## API overview

- **Auth:** `POST /api/auth/login`, `POST /api/auth/register`, `GET /api/auth/me`
- **Properties:** `GET /api/properties`, `GET /api/properties/:id`
- **Areas:** `GET /api/areas`
- **Enquiries:** `POST /api/enquiries`
- **Maintenance:** `POST /api/maintenance-requests`
- **Blog:** `GET /api/blog`, `GET /api/blog/:slug`
- **Testimonials:** `GET /api/testimonials`, `POST /api/testimonials`
- **Favorites:** `GET/POST/DELETE /api/users/me/favorites` (authenticated)

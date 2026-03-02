/** Set NEXT_PUBLIC_API_BASE in production when frontend and backend are on different origins. */
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";

export type User = { id: string; email: string; name: string | null; role: string };
export type Property = {
  id: string;
  title: string;
  description: string | null;
  address: string;
  city: string;
  postCode: string;
  listingType: "RENTAL" | "HOLIDAY_LET";
  beds: number;
  baths: number;
  areaSqFt: number;
  pricePerMonth: string | number;
  isFeatured: boolean;
  images?: { id: string; url: string; order: number }[];
  area?: { id: string; name: string; slug: string } | null;
};
export type Area = { id: string; name: string; slug: string; imageUrl: string | null; description: string | null };
export type BlogPost = { id: string; title: string; slug: string; excerpt: string | null; publishedAt: string | null; author: string | null };
export type Testimonial = { id: string; authorName: string; role: string; content: string; rating: number | null };
export type EnquirySummary = { id: string; name: string; email: string; subject: string | null; source: string; createdAt: string };
export type MaintenanceSummary = {
  id: string;
  tenantName: string;
  tenantEmail: string;
  propertyAddressOrRef: string;
  issueCategory: string;
  urgency: string;
  status: string;
  createdAt: string;
};

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export async function api<T>(
  path: string,
  options: RequestInit & { params?: Record<string, string | number | undefined> } = {}
): Promise<T> {
  const { params, ...init } = options;
  const cleaned: Record<string, string> = {};
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== "") cleaned[k] = String(v);
    }
  }
  const url = Object.keys(cleaned).length ? `${API_BASE}${path}?${new URLSearchParams(cleaned)}` : `${API_BASE}${path}`;
  const token = getToken();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(init.headers as object),
  };
  if (token) (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  const res = await fetch(url, { ...init, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || res.statusText || "Request failed");
  return data as T;
}

export const authApi = {
  login: (email: string, password: string) =>
    api<{ user: User; token: string }>("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  register: (email: string, password: string, name?: string) =>
    api<{ user: User; token: string }>("/api/auth/register", { method: "POST", body: JSON.stringify({ email, password, name }) }),
  me: () => api<User>("/api/auth/me"),
};

export const propertiesApi = {
  list: (params?: { page?: number; limit?: number; search?: string; listingType?: string; areaId?: string; minPrice?: string; maxPrice?: string; beds?: string; featured?: string }) =>
    api<{ items: Property[]; total: number; page: number; limit: number }>("/api/properties", { params: params as Record<string, string> }),
  get: (id: string) => api<Property>(`/api/properties/${id}`),
};

export const areasApi = {
  list: () => api<Area[]>("/api/areas"),
};

export const enquiriesApi = {
  submit: (body: { name: string; email: string; phone?: string; subject?: string; message: string; consent: boolean }) =>
    api<{ id: string }>("/api/enquiries", { method: "POST", body: JSON.stringify(body) }),
};

export const maintenanceApi = {
  submit: (body: { tenantName: string; tenantEmail: string; propertyAddressOrRef: string; issueCategory: string; description: string; urgency?: string }) =>
    api<{ id: string }>("/api/maintenance-requests", { method: "POST", body: JSON.stringify(body) }),
};

export const blogApi = {
  list: (params?: { page?: number; limit?: number }) =>
    api<{ items: BlogPost[]; total: number }>("/api/blog", { params: params as Record<string, string> }),
  get: (slug: string) => api<BlogPost & { body: string }>(`/api/blog/${slug}`),
};

export const testimonialsApi = {
  list: () => api<Testimonial[]>("/api/testimonials"),
  submit: (body: { authorName: string; role: string; content: string; rating?: number }) =>
    api<{ id: string }>("/api/testimonials", { method: "POST", body: JSON.stringify(body) }),
};

export const favoritesApi = {
  list: () => api<Property[]>("/api/users/me/favorites"),
  add: (propertyId: string) => api<{ message: string }>(`/api/users/me/favorites/${propertyId}`, { method: "POST" }),
  remove: (propertyId: string) => api<{ message: string }>(`/api/users/me/favorites/${propertyId}`, { method: "DELETE" }),
};

export const adminApi = {
  listEnquiries: (limit = 5) =>
    api<{ items: EnquirySummary[] }>("/api/enquiries", { params: { limit } }),
  listMaintenanceRequests: (limit = 5) =>
    api<{ items: MaintenanceSummary[] }>("/api/maintenance-requests", { params: { limit } }),
};

import { Router } from "express";
import { z } from "zod";
import * as enquiryService from "../services/enquiryService.js";

const router = Router();

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  consent: z.boolean().refine((v) => v === true, "Consent is required"),
});

router.post("/", async (req, res, next) => {
  try {
    const body = enquirySchema.parse(req.body);
    const enquiry = await enquiryService.createEnquiry(body);
    res.status(201).json({ id: enquiry.id, message: "Enquiry submitted successfully" });
  } catch (e) {
    if (e.name === "ZodError") {
      const msg = e.errors?.[0]?.message || "Validation failed";
      return res.status(400).json({ error: msg, code: "VALIDATION_ERROR" });
    }
    next(e);
  }
});

export default router;

import { Router } from "express";
import { z } from "zod";
import * as testimonialService from "../services/testimonialService.js";

const router = Router();

const submitSchema = z.object({
  authorName: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  content: z.string().min(1, "Content is required"),
  rating: z.number().min(1).max(5).optional(),
});

router.get("/", async (_req, res, next) => {
  try {
    const list = await testimonialService.listApproved();
    res.json(list);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = submitSchema.parse(req.body);
    const testimonial = await testimonialService.createTestimonial(body);
    res.status(201).json({ id: testimonial.id, message: "Thank you. Your testimonial will be reviewed." });
  } catch (e) {
    if (e.name === "ZodError") {
      const msg = e.errors?.[0]?.message || "Validation failed";
      return res.status(400).json({ error: msg, code: "VALIDATION_ERROR" });
    }
    next(e);
  }
});

export default router;

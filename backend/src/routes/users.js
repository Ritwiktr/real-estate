import { Router } from "express";
import { authMiddleware } from "../middleware/auth.js";
import * as favoritesService from "../services/favoritesService.js";

const router = Router();

router.get("/me/favorites", authMiddleware, async (req, res, next) => {
  try {
    const list = await favoritesService.listFavorites(req.user.id);
    res.json(list);
  } catch (e) {
    next(e);
  }
});

router.post("/me/favorites/:propertyId", authMiddleware, async (req, res, next) => {
  try {
    await favoritesService.addFavorite(req.user.id, req.params.propertyId);
    res.status(201).json({ message: "Added to favorites" });
  } catch (e) {
    next(e);
  }
});

router.delete("/me/favorites/:propertyId", authMiddleware, async (req, res, next) => {
  try {
    await favoritesService.removeFavorite(req.user.id, req.params.propertyId);
    res.json({ message: "Removed from favorites" });
  } catch (e) {
    next(e);
  }
});

export default router;

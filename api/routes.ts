import { Express, Request, Response } from "express";

import {
  createLocationHandler,
  deleteLocationByIdHandler,
  getLocationByIdHandler,
  getLocationsHandler,
  updateLocationByIdHandler,
} from "./controller/location.controller";
import {
  createUserHandler,
  deleteUserByIdHandler,
  getUsersHandler,
  updateUserByIdHandler,
} from "./controller/user.controller";

export async function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("⚡️ RusalangitGIS API is Running");
  });

  // TODO: CRUD User
  app.get("/api/v1/users", getUsersHandler);
  app.get("/api/v1/user/:id", getUsersHandler);
  app.post("/api/v1/user", createUserHandler);
  app.put("/api/v1/user/:id", updateUserByIdHandler);
  app.delete("/api/v1/user/:id", deleteUserByIdHandler);

  // TODO: CRUD Location
  app.get("/api/v1/locations", getLocationsHandler);
  app.get("/api/v1/location/:id", getLocationByIdHandler);
  app.post("/api/v1/location", createLocationHandler);
  app.put("/api/v1/location/:id", updateLocationByIdHandler);
  app.delete("/api/v1/location/:id", deleteLocationByIdHandler);
}

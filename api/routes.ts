import { Express, Request, Response } from "express";

import {
  createLocationHandler,
  deleteLocationByIdHandler,
  getLocationByIdHandler,
  getLocationsDetailByUserIdHandler,
  getLocationsDetailHandler,
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

  // TODO: Login

  // TODO: CRUD User
  app.get("/api/v1/user", getUsersHandler);
  app.get("/api/v1/user/:id", getUsersHandler);
  app.post("/api/v1/user", createUserHandler);
  app.put("/api/v1/user/:id", updateUserByIdHandler);
  app.delete("/api/v1/user/:id", deleteUserByIdHandler);

  // TODO: CRUD Location
  app.get("/api/v1/location", getLocationsHandler);
  app.get("/api/v1/location-detail", getLocationsDetailHandler);
  app.get("/api/v1/location/:id", getLocationByIdHandler);
  app.get("/api/v1/location-detail/:id", getLocationsDetailByUserIdHandler);
  app.post("/api/v1/location", createLocationHandler);
  app.put("/api/v1/location/:id", updateLocationByIdHandler);
  app.delete("/api/v1/location/:id", deleteLocationByIdHandler);
}

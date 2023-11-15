import bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as locationService from "../service/location.service";

export async function getLocationsHandler(req: Request, res: Response) {
  try {
    const datas = await locationService.getAllLocations();
    res.status(200).json({
      status: 200,
      message: "Successfully GET Locations",
      data: datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function getLocationByIdHandler(req: Request, res: Response) {
  const { location_id } = req.params;

  try {
    const datas = await locationService.getLocationById(location_id);
    res.status(201).json({
      status: 201,
      message: "Successfully GET Location by ID",
      data: datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function createLocationHandler(req: Request, res: Response) {
  const { user_id, location_name, location_desc, latitude, longitude } =
    req.body;

  try {
    if (
      !user_id ||
      !location_name ||
      !location_desc ||
      !latitude ||
      !longitude
    ) {
      return res.status(400).json({
        status: 400,
        message: "Missing required parameters",
      });
    }

    await locationService.createLocation(
      user_id,
      location_name,
      location_desc,
      latitude,
      longitude,
    );
    res.status(201).json({
      status: 201,
      message: "Successfully POST Location",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function updateLocationByIdHandler(req: Request, res: Response) {
  const { location_id } = req.params;
  const { user_id, location_name, location_desc, latitude, longitude } =
    req.body;

  try {
    const datas = await locationService.updateLocationById(
      location_id,
      user_id,
      location_name,
      location_desc,
      latitude,
      longitude,
    );
    res.status(201).json({
      status: 201,
      message: "Successfully PUT Location by ID",
      data: datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function deleteLocationByIdHandler(req: Request, res: Response) {
  const { location_id } = req.params;

  try {
    const datas = await locationService.deleteLocationById(location_id);
    res.status(201).json({
      status: 201,
      message: "Successfully DELETE Location by ID",
      data: datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

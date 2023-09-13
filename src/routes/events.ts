import type { Events } from "@prisma/client";
import { Request, Response } from "express";

import getUpcomingEvents from "../util/getUpcomingEvents";

async function eventRoute(req: Request, res: Response) {
  let events: Events[];
  try {
    events = await getUpcomingEvents();
    if (!events) {
      return res.status(404).json({ message: "No upcoming events found" });
    } else {
      return res.status(200).json(events);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default eventRoute;

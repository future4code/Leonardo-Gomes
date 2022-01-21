import app from "./app"

import { createClasses } from "./endpoints/createClasses";


app.post("/classes", createClasses)

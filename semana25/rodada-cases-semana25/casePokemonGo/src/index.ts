import { Request, Response } from "express";
import {app} from "./controller/app";

import { generationPokemonCount } from "./endpoints/generationPokemonCount";
import { generationSearch } from "./endpoints/genarationSearch";
import { searchName } from "./endpoints/searchName";
import { searchTypes } from "./endpoints/searchTypes";
import { searchSpecific } from "./endpoints/searchSpecific";
import { searchStatTotal } from "./endpoints/searchStatTotal";


app.get("/pokemon/count", generationPokemonCount)
app.get("/pokemon/:generation", generationSearch)
app.get("/pokemon/name", searchName)
app.get("/pokemon/types", searchTypes)
app.get("/pokemon/specificType", searchSpecific)
app.get("/pokemon/statTotal", searchStatTotal)



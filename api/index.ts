import express, { Express, Request, Response } from "express";

import cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json()); 
const port = 1738;

/*
  const baseUrl = "https://americas.api.riotgames.com";
  const endPoint = "riot/account/v1/accounts/by-riot-id";
*/

const hobbies = ["programming", "vide3o games"];

export type Data = {
    id: number;
    name: string;
    age: number;
    hobbies: string[];
}

const data: Data = {
    id: 1,
    name: "Campbell",
    age: 23,
    hobbies: hobbies,
}

app.post("/", (req: Request, res: Response) => {
    console.log('req.body', req.body);
    res.send(data);
});



app.listen(port, () => { console.log(`api is listening on http://localhost:${port}/`) });
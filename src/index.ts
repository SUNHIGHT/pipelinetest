import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "Study Log API is running"
  });
});

app.get("/logs", (_req: Request, res: Response) => {
  res.status(200).json([
    {
      id: 1,
      title: "AWS Lambda basics",
      hours: 2
    },
    {
      id: 2,
      title: "Docker practice",
      hours: 1.5
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
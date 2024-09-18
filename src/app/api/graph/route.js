import { NextResponse } from "next/server";
import fs from "fs/promises"; // Use fs/promises for async operations

const filePath = "./data/graph.json";

export const GET = async () => {
  const fileData = await fs.readFile(filePath, "utf-8");
  return NextResponse.json(JSON.parse(fileData));
};

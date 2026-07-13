import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

type PreorderPayload = {
  color: string;
  size: string;
  name: string;
  email: string;
  product: string;
  productId: string;
  locale: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PreorderPayload;

    if (!body.name?.trim() || !body.email?.trim() || !body.size || !body.color) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const entry = {
      ...body,
      createdAt: new Date().toISOString(),
    };

    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });

    const file = path.join(dir, "preorders.jsonl");
    await writeFile(file, `${JSON.stringify(entry)}\n`, { flag: "a" });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

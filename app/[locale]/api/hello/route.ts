// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: any) {
  const name = await req
  return NextResponse.json({ message: 'get' })
}

export async function POST(req: any) {
  const body = await req.json();
  const name = body;
  return NextResponse.json(name);
}
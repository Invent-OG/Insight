// app/api/hello/route.js

export async function GET() {
  return new Response("Hello, world!", {
    status: 200,
  });
}

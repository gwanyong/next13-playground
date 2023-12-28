// app/pages/api/hello/route.js

// eslint-disable-next-line @typescript-eslint/require-await, @typescript-eslint/no-unused-vars
export async function GET(request: any) {
  // GET 요청에 대한 응답
  return new Response(JSON.stringify({ message: 'Hello, GET Request!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST() {
  const webhookUrl =
    "https://hook.us1.make.com/x6pq9ex8ooc72138jxnrvfo76amewsft";

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello World" }),
  });

  if (!res.ok) {
    const errorData = await res.text();
    return new Response(errorData, { status: res.status });
  }

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

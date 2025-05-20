// import Image from "next/image";
const token =
  "MTU2ZjQ1ODktMjMzZS00YzZhLTk3NzItZGMxNjdlZDRjN2Q5OTVlZDFmMzktNzYy_PF84_254fbc18-dec9-45c0-9f09-40ba5d1f2c06";

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let data: any[] = [] as any[];
  const getMeetings = async () => {
    const response = await fetch(
      "https://webexapis.com/v1/meetings?meetingType=meetingSeries&max=100",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    data = await response.json();
    console.log(data);
  };
  getMeetings();

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

import { Button } from "../components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>
      <Button variant="destructive">Test Button</Button>
    </div>
  );
}

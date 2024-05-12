import Registration from "@/components/Registration";
import Userlist from "@/components/Userlist";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Registration />
      <Userlist />
    </main>
  );
}

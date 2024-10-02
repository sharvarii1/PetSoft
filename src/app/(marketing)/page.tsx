import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="Petsoft software preview "
        width={519}
        height={472}
      />

      <div>
        <Logo />
        <h1 className="font-semibold text-5xl max-w-[500px] my-6">
          Manage your <span className="font-extrabold">Pet daycare</span> with
          ease.
        </h1>
        <p className="text-2xl max-w-[540px]">
          Use petsoft to easily keep track of pets under your care. Get lifetime
          access for $299.
        </p>
        <div className="space-x-4 mt-12">
          <Button asChild>
            <Link href="/signup">Get started</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

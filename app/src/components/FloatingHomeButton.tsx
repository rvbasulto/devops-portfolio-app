import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function FloatingHomeButton() {
  return (
    <Link
      href="/"
      className="fixed bottom-[100px] right-6 z-50 bg-[#0D2E1B] text-white p-3 rounded-full shadow-lg hover:bg-[#C9F7C3] hover:text-black transition"
      aria-label="Go to homepage"
    >
      <HomeIcon className="w-6 h-6" />
    </Link>
  );
}
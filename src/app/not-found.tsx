// app/not-found.tsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/404.jpg"
        alt="404 Not Found"
        fill
        priority
        className="object-contain"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4">
   
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg 
                     hover:bg-primary/80 transition text-base md:text-lg"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

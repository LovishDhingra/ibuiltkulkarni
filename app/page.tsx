import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
      <p className="text-lg text-gray-600 mb-8">Built with Next.js and Tailwind CSS</p>
    </div>
  );
}
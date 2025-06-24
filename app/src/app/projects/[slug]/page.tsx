// /project/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { devopsProjects } from "@/constants";
import Link from "next/link";
//import FloatingHomeButton from "@/components/FloatingHomeButton";

// ✅ This must NOT be async unless you're using fetch
export async function generateStaticParams() {
  return devopsProjects.map((project) => ({
    slug: project.slug,
  }));
}


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = devopsProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4  py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white hover:text-[#C9F7C3] transition"
      >
        ← Back to Home
      </Link>
      <h1 className="text-white text-3xl font-bold mt-16 mb-4 text-center">{project.title}</h1>
     

      <div className="relative w-full h-[300px] my-16 rounded-lg overflow-hidden">
        <Image
          src={project.foregroundImage}
          alt={project.title}
          fill
          className="object-contain"
        />
      </div>

       {/* Full Description */}
      {project.fullDescription && (
        <div className="prose prose-invert max-w-none text-[#D6F9E1] prose-ul:list-disc prose-ul:list-inside prose-li:mb-2 prose-li:text-[#D6F9E1] prose-a:text-[#C9F7C3] prose-a:hover:text-[#C9F7C3]">
          <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
        </div>
      )}
    </div>
  );
}

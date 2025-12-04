import DownloadCVButton from "@/components/shared/download-cv";
import Link from "next/link";

type HeroProps = {
	name?: string;
	title?: string;
	description?: string;
	ctaText?: string;
	ctaHref?: string;
};

export default function HeroSection({
	name = "Nicolás Omar Luna",
	title = "Desarrollador Frontend SSR",
	description = "Construyo experiencias web accesibles, rápidas y modernas.",
	ctaText = "Contáctame",
	ctaHref = "/contact",
}: HeroProps) {
	return (
		<section className="w-full bg-slate-900 py-20">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<div className="grid gap-8 md:grid-cols-1 md:items-center">
					<div>
						<p className="text-sm font-medium text-sky-400">Hola, me llamo</p>
						<h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
							{name}
						</h1>
						<h2 className="mt-2 text-2xl font-semibold text-slate-300">{title}</h2>
						<p className="mt-6 max-w-xl text-lg text-slate-300">{description}</p>

						<div className="mt-8 flex gap-4">
							<Link
								href={ctaHref}
								className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500"
							>
								{ctaText}
							</Link>

							<Link
								href="/projects"
								className="inline-flex items-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
							>
								Ver proyectos
							</Link>

                            <DownloadCVButton />

						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

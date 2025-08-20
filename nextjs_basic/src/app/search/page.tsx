import { getBlogsByCity } from "../../lib/db";

interface SearchPageProps {
	searchParams?: { q?: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const city = searchParams?.q || "";
	const blogs = await getBlogsByCity(city);

	return (
		<main className="max-w-2xl mx-auto py-8">
			<h2 className="text-2xl font-bold mb-4 text-yellow-700">Suchergebnisse für: <span className="text-green-700">{city}</span></h2>
			{blogs.length === 0 ? (
				<div className="text-center text-red-500 font-semibold mt-8">Kein Ergebnis gefunden für diese Stadt.</div>
			) : (
				<ul className="space-y-4">
					{blogs.map(blog => (
						<li key={blog.id} className="bg-yellow-100 rounded-lg p-4 shadow">
							<span className="font-bold text-yellow-800">{blog.title}</span> – <span className="text-green-700">{blog.city}</span>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}

import Link from "next/link";
import { getBlogsByCity } from "@/actions/blog";

type SearchPageProps = {
    searchParams?: {
        q?: string;
    };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const city = searchParams?.q || "";
    const blogs = await getBlogsByCity(city);

    return (
        <main className="max-w-2xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-8 text-green-800">
                Beiträge aus: <span className="text-yellow-700">{city}</span>
            </h2>
            {blogs.length === 0 ? (
                <div className="text-center text-red-500 font-semibold mt-8">
                    Keine Beiträge für diese Stadt gefunden.
                </div>
            ) : (
                <ul className="space-y-4">
                    {blogs.map(blog => (
                        <li key={blog._id.toString()} className="bg-yellow-100 rounded-lg p-4 shadow">
                            {/* Blogtitel verlinken */}
                            <Link
                                href={`/blog/${blog._id}`}
                                className="font-bold text-yellow-800 hover:underline text-lg"
                            >
                                {blog.title}
                            </Link>
                            <div className="text-gray-700 text-sm mt-1">
                                {blog.content?.slice(0, 120)}...
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                von {blog.author?.username || "Unbekannt"}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}


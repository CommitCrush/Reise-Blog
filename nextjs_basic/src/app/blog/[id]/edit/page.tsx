export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Blog Post</h1>
      <p className="text-gray-600">Edit your blog post here.</p>
    </div>
  );
}
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Reise Blog</h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover amazing travel stories and share your own adventures around the world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Share Your Journey</h3>
          <p className="text-gray-600 mb-4">Create beautiful travel blog posts and inspire others with your adventures.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Explore Stories</h3>
          <p className="text-gray-600 mb-4">Read inspiring travel stories from fellow adventurers around the globe.</p>
        </div>
      </div>
    </div>
  );
}

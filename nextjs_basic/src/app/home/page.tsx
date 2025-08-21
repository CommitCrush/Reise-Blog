export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Reise Blog
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing travel destinations and share your adventures with fellow travelers. 
          Create beautiful blog posts about your journeys and inspire others to explore the world.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Share Your Story</h3>
            <p className="text-gray-600">Create and publish your travel experiences with our easy-to-use blog editor.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Discover Places</h3>
            <p className="text-gray-600">Explore travel stories from around the world and find your next destination.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Connect with Travelers</h3>
            <p className="text-gray-600">Join a community of passionate travelers and share tips and experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AllPostsMain() {
  return (
    <main className="flex flex-col flex-1 gap-y-6">
      <div className="h-96"></div>

      <div className="bg-green-500 h-screen">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Green Square</h2>
          <p className="text-lg">
            This is some content to give height to the second row.
            The height will be determined by the content inside.
          </p>
        </div>
      </div>
    </main>
  );
}


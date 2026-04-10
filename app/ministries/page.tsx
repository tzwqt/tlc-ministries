export default function Ministries() {
    const items = ["Youth", "Men", "Women", "Outreach"];
  
    return (
      <div className="p-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Ministries</h1>
  
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {items.map((m) => (
            <div key={m} className="border p-6 rounded-xl">
              <h2 className="text-xl font-semibold">{m} Ministry</h2>
              <p className="text-gray-600 mt-2">
                A place to grow spiritually and serve others.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
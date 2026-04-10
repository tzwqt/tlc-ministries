export default function Contact() {
    return (
      <div className="p-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Contact Us</h1>
  
        <p className="mt-4 text-gray-600">
          Email: tlc.ministries.38@gmail.com
        </p>
  
        <form className="mt-8 space-y-4">
          <input className="w-full border p-3" placeholder="Name" />
          <input className="w-full border p-3" placeholder="Email" />
          <textarea className="w-full border p-3" placeholder="Message" />
          <button className="bg-black text-white px-6 py-3 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    );
  }
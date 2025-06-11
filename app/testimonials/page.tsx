"use client";

import { useTestimonials } from "@/lib/queries/testimonials";

export default function TestimonialsPage() {
  const { data, isLoading, error } = useTestimonials();

  if (isLoading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error loading testimonials.</p>;

  return (
    <div className="relative min-h-screen">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover -z-10"
        style={{
          backgroundImage: "url('assets/country/japan.png')", // Change to your image path
        }}
        aria-hidden="true"
      />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>

        <div className="space-y-6">
          {data?.testimonials.length === 0 && <p>No testimonials found.</p>}
          {data?.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 transition-transform hover:scale-105"
            >
              {t.imageUrl && (
                <img
                  src={t.imageUrl}
                  alt={t.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto md:mx-0"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  {t.name}{" "}
                  <span className="text-gray-500 text-sm">({t.role})</span>
                </h3>
                <p className="mt-2 text-gray-700">{t.content}</p>
                {t.youtubeUrl && (
                  <div className="mt-4">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <iframe
                        src={convertToEmbedUrl(t.youtubeUrl)}
                        title={`YouTube video of ${t.name}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper to convert YouTube URL to embed format
function convertToEmbedUrl(url: string): string {
  try {
    const videoId = extractVideoId(url);
    if (!videoId) return "";
    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return "";
  }
}

function extractVideoId(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

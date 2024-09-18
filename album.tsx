import Image from 'next/image'

export default function PhotoGallery() {
  const photos = [
    { src: '/placeholder.svg?height=400&width=600', alt: 'Photo 1' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Photo 2' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Photo 3' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Photo 4' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Photo 5' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Photo 6' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Beautiful Moments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export function AudioBoy() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 to-teal-200 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-2 text-center">Boy Audio Collection</h1>
      <p className="text-gray-600 text-center mb-8">100 unique boy audio samples</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
          <div key={num} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{num}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Boy Audio #{num}</h3>
                <p className="text-sm text-gray-500">boy{num}.mp3</p>
              </div>
            </div>
            <audio 
              controls 
              className="w-full rounded-lg"
              src={`500-boys/boy${num}.mp3`}
              preload="none"
            >
              Your browser does not support the audio element.
            </audio>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>MP3</span>
              <span>Sample #{num}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
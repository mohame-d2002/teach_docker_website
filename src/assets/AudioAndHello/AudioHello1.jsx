
export function GifAndHello1() {
    

  return (
    <>
    <div className="grid grid-cols-1 gap-8 p-8 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
        {/* Item 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-lg font-semibold text-gray-800 mb-3">This is gif of raining: <img src='gifs/gif1.gif' className="inline-block w-96 h-96 ml-2 rounded-lg" /> this is its hello audio <audio src='hello/hello1.mp3' controls className="inline-block ml-2 h-8" /></p>
        </div>
    </div>
</>
      ) 
}
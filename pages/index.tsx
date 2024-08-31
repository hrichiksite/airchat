import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// taken help from ai
export default function Home() {
  return( 
    <>   
<div className="flex flex-col h-screen bg-gradient-to-br from-purple-400 to-blue-500"> 
{/* Header Section */} 
<header className="bg-white shadow-md"> 
<div className="container mx-auto py-4 flex justify-between items-center"> 
  <h1 className="text-3xl font-bold text-pink-600 pr-4">AirChat</h1> 
</div> 
</header> 
{/* Chat Container */} 
<main className="flex-1 overflow-auto p-6"> 
<div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col"> 
  <div className="overflow-y-auto flex-1"> 
    {/* Messages */} 
  </div> 
  <footer className="bg-gradient-to-r from-green-400 to-yellow-400 p-4 border-t"> 
    <div className="flex"> 
      <input type="text" className="flex-1 p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Type your message..." / > 
      <button className="ml-2 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-200">Send</button> 
    </div> 
  </footer> 
</div> 
</main> 
</div>  </>)
}

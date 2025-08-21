"use client"

import { Github, Linkedin, Youtube, Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/clebertsabin",
      color: "hover:bg-gray-900 hover:text-white", // GitHub black
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#", // Add your LinkedIn URL
      color: "hover:bg-blue-600 hover:text-white", // LinkedIn blue
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@C_San_TV",
      color: "hover:bg-red-600 hover:text-white", // YouTube red
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      url: "https://x.com/SabinGanza",
      color: "hover:bg-black hover:text-white", // X/Twitter black
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ganxaclebert?igsh=ZmFqeWxzeXo0NXhn",
      color: "hover:bg-pink-600 hover:text-white", // Instagram pink
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=100091669609963",
      color: "hover:bg-blue-600 hover:text-white", // Facebook blue
    },
  ]

  const handleSocialClick = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank")
    }
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">Ganza Clebert Sabin</h3>
            <p className="text-slate-300">Information Systems Graduate | Digital Innovator | Content Creator</p>
          </div>

          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onClick={() => handleSocialClick(social.url)}
                className={`p-3 rounded-full transition-all duration-200 border border-slate-600 bg-slate-800 text-slate-300 ${social.color} ${social.url === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={social.url === "#"}
                title={social.name}
              >
                <social.icon className="h-5 w-5" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-700 text-center text-slate-400">
            <p>&copy; 2025 Ganza Clebert Sabin. All rights reserved.</p>
            <p className="text-sm mt-2 text-slate-500">"Always god is in my life"</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

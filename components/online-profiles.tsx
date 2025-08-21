"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Youtube, Twitter, Instagram, Facebook } from "lucide-react"

export function OnlineProfiles() {
  const profiles = [
    {
      name: "GitHub",
      description: "Code repositories and open source contributions",
      icon: Github,
      url: "https://github.com/clebertsabin",
      color: "hover:bg-gray-100",
    },
    {
      name: "LinkedIn",
      description: "Professional network and career updates",
      icon: Linkedin,
      url: "#", // Add your LinkedIn URL
      color: "hover:bg-blue-50",
    },
    {
      name: "Kaggle",
      description: "Data science competitions and datasets",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336" />
        </svg>
      ),
      url: "#", // Add your Kaggle URL
      color: "hover:bg-cyan-50",
    },
    {
      name: "Zindi",
      description: "African data science competitions",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      url: "#", // Add your Zindi URL
      color: "hover:bg-orange-50",
    },
    {
      name: "HuggingFace",
      description: "AI/ML models and datasets",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm0 17c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z" />
        </svg>
      ),
      url: "#", // Add your HuggingFace URL
      color: "hover:bg-yellow-50",
    },
    {
      name: "Behance",
      description: "Creative portfolio and design work",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
      ),
      url: "#", // Add your Behance URL
      color: "hover:bg-blue-50",
    },
    {
      name: "C&S TV Official",
      description: "Educational documentaries and content",
      icon: Youtube,
      url: "https://www.youtube.com/@C_San_TV",
      color: "hover:bg-red-50",
    },
    {
      name: "Living2Day",
      description: "Health awareness and lifestyle content",
      icon: Youtube,
      url: "#", // Add your Living2Day YouTube URL
      color: "hover:bg-red-50",
    },
    {
      name: "Twitter/X",
      description: "Thoughts and professional updates",
      icon: Twitter,
      url: "https://x.com/SabinGanza",
      color: "hover:bg-blue-50",
    },
    {
      name: "Instagram",
      description: "Visual content and behind-the-scenes",
      icon: Instagram,
      url: "https://www.instagram.com/ganxaclebert?igsh=ZmFqeWxzeXo0NXhn",
      color: "hover:bg-pink-50",
    },
    {
      name: "Facebook",
      description: "Community engagement and updates",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=100091669609963",
      color: "hover:bg-blue-50",
    },
  ]

  const handleProfileClick = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank")
    }
  }

  return (
    <section id="profiles" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Online Profiles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with me across various platforms and explore my work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {profiles.map((profile, index) => (
            <Card key={index} className={`cursor-pointer transition-all hover:shadow-md ${profile.color}`}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <profile.icon className="h-5 w-5" />
                  {profile.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{profile.description}</p>
                <Button
                  onClick={() => handleProfileClick(profile.url)}
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled={profile.url === "#"}
                >
                  {profile.url === "#" ? "Coming Soon" : "Visit Profile"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

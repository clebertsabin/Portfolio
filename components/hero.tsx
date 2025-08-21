"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Phone, MessageCircle } from "lucide-react"

export function Hero() {
  const handleCall = () => {
    window.open("tel:+250726270739", "_self")
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/250782635805", "_blank")
  }

  const handleVideoIntro = () => {
    window.open("https://www.youtube.com/watch?v=YZO_dcs1MN8", "_blank")
  }

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Ganza Clebert Sabin
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Information Systems Graduate | Digital Innovator | Content Creator
              </p>
              <p className="text-lg text-slate-600 font-medium">"Always god is in my life"</p>
              <p className="text-muted-foreground">📍 Kigali, Rwanda</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleVideoIntro}
                size="lg"
                className="gap-2 bg-red-600 hover:bg-red-700 text-white border-0"
              >
                <Play className="h-5 w-5" />
                Watch Intro Video
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent hover:bg-slate-50"
              >
                <Phone className="h-5 w-5" />
                Call Me
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="gap-2 bg-green-600 hover:bg-green-700 text-white border-0"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="p-4 sm:p-6 lg:p-8 bg-slate-50/50 border-slate-200">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 relative rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src="/clebert-profile.jpg"
                  alt="Ganza Clebert Sabin - Professional Headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

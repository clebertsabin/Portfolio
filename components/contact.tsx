"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Handle HTTP errors properly
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }))
        console.error("API Error:", errorData)
        toast({
          title: "Error sending message",
          description: errorData.error || "Please try again or contact me directly via email.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Network or parsing error:", error)
      toast({
        title: "Error sending message",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCallClick = (e: React.MouseEvent) => {
    console.log("[v0] Call button clicked")
    // Let the default behavior proceed
  }

  const handleEmailClick = (e: React.MouseEvent) => {
    console.log("[v0] Email button clicked")
    // Let the default behavior proceed
  }

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    console.log("[v0] WhatsApp button clicked")
    // Let the default behavior proceed
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-600" />
                  <span>Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-600" />
                  <span>clebertsabin@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-slate-600" />
                  <span>+250 726 270 739</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <span>+250 782 635 805</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="tel:+250726270739"
                onClick={handleCallClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors no-underline cursor-pointer"
                role="button"
                aria-label="Call +250 726 270 739"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/250782635805?text=Hello%20Clebert,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition-colors no-underline cursor-pointer"
                role="button"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="mailto:clebertsabin@gmail.com?subject=Contact%20from%20Portfolio%20Website"
                onClick={handleEmailClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-700 text-white font-medium transition-colors no-underline cursor-pointer"
                role="button"
                aria-label="Send email to clebertsabin@gmail.com"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

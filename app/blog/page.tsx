"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  // Sample blog posts - in a real app, these would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Smart Cities in Rwanda",
      excerpt:
        "Exploring how technology can transform urban living in Kigali and beyond, with insights from my Smart City Citizen Engagement System project.",
      date: "2025-01-15",
      readTime: "5 min read",
      tags: ["Smart Cities", "Technology", "Rwanda", "Urban Development"],
      content: "Coming soon...",
    },
    {
      id: 2,
      title: "Building Effective Information Systems",
      excerpt:
        "Lessons learned from developing the Mission and Leave Management System and other enterprise solutions.",
      date: "2025-01-10",
      readTime: "7 min read",
      tags: ["Information Systems", "Software Development", "Project Management"],
      content: "Coming soon...",
    },
    {
      id: 3,
      title: "Digital Innovation in Healthcare",
      excerpt:
        "Reflections on the LiveLong Pharmacy Project and the potential for technology to improve healthcare delivery.",
      date: "2025-01-05",
      readTime: "6 min read",
      tags: ["Healthcare", "Digital Innovation", "Technology"],
      content: "Coming soon...",
    },
    {
      id: 4,
      title: "Content Creation and Community Impact",
      excerpt:
        "How C&S TV Official and Living2Day channels are contributing to education and health awareness in our community.",
      date: "2024-12-28",
      readTime: "4 min read",
      tags: ["Content Creation", "Community", "Education", "Health"],
      content: "Coming soon...",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Reflection Journal & Blog</h1>
          <p className="text-lg text-muted-foreground">
            Ideas, reflections, and innovations in IT and beyond. A space for sharing thoughts on technology, society,
            and digital transformation.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-2xl hover:text-primary cursor-pointer">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8">
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                New posts are added regularly. Follow me on social media or check back soon for more insights and
                reflections.
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={() => window.open("https://x.com/SabinGanza", "_blank")}>Follow on X/Twitter</Button>
                <Button variant="outline" onClick={() => window.open("https://www.youtube.com/@C_San_TV", "_blank")}>
                  Subscribe on YouTube
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

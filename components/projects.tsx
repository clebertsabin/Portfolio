"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Youtube } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Mission & Leave Management System",
      description:
        "JavaScript-based solution to streamline employee mission requests and leave applications for faster and transparent approval processes. My final year project at University of Rwanda.",
      role: "Full-Stack Developer & System Designer",
      technologies: ["JavaScript", "Node.js", "Database Design", "System Analysis"],
      githubUrl: "https://github.com/clebertsabin/Mission-Leave_system",
      type: "github",
    },
    {
      title: "Citizen Reporting System for Rwanda",
      description:
        "A comprehensive platform enabling citizens to report community issues directly to relevant authorities, promoting transparency and civic engagement.",
      role: "Lead Developer & System Architect",
      technologies: ["Web Development", "Database Design", "User Experience"],
      githubUrl: "https://github.com/clebertsabin",
      type: "github",
    },
    {
      title: "Smart City Citizen Engagement System (Kigali)",
      description:
        "Digital platform focused on Kigali's smart city initiatives, enabling citizen participation in urban development and service delivery.",
      role: "System Developer & Urban Tech Specialist",
      technologies: ["Smart City Tech", "Citizen Engagement", "Urban Planning"],
      githubUrl: "https://github.com/clebertsabin",
      type: "github",
    },
    {
      title: "E-commerce Shopping Cart System",
      description:
        "Complete e-commerce solution with shopping cart functionality, payment integration, and inventory management capabilities.",
      role: "Full-Stack E-commerce Developer",
      technologies: ["E-commerce", "Payment Systems", "Inventory Management"],
      githubUrl: "https://github.com/clebertsabin",
      type: "github",
    },
    {
      title: "Cake Business Idea (Huye District)",
      description:
        "Business development project for establishing a cake business in Huye District, including market analysis and operational planning.",
      role: "Business Analyst & Project Manager",
      technologies: ["Business Planning", "Market Analysis", "Operations"],
      githubUrl: "https://github.com/clebertsabin",
      type: "github",
    },
    {
      title: "LiveLong Pharmacy Project (Kigali)",
      description:
        "Digital solution for pharmacy management in Kigali, focusing on inventory tracking and customer service optimization.",
      role: "Healthcare IT Developer",
      technologies: ["Healthcare IT", "Inventory Systems", "Customer Management"],
      githubUrl: "https://github.com/clebertsabin",
      type: "github",
    },
    {
      title: "C&S TV Official - YouTube Documentaries",
      description:
        "Educational content creation focusing on documentaries and informative videos covering various topics of social importance.",
      role: "Content Creator & Video Producer",
      technologies: ["Video Production", "Content Strategy", "Educational Media"],
      githubUrl: "https://www.youtube.com/@C_San_TV",
      type: "youtube",
    },
    {
      title: "Living2Day - Health Awareness Content",
      description:
        "Health-focused YouTube channel creating awareness content about wellness, lifestyle, and health education for the community.",
      role: "Health Content Creator & Educator",
      technologies: ["Health Education", "Content Creation", "Community Outreach"],
      githubUrl: "https://www.youtube.com/@Living2Day",
      type: "youtube",
    },
  ]

  const handleProjectLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects & Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects, business initiatives, and content creation work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Role:</p>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleProjectLink(project.githubUrl)}
                    className="w-full gap-2"
                    variant="outline"
                  >
                    {project.type === "youtube" ? (
                      <>
                        <Youtube className="h-4 w-4" />
                        View Channel
                      </>
                    ) : (
                      <>
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

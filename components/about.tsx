import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Tv, Globe } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Information Systems Graduate from University of Rwanda",
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-stack developer with expertise in JavaScript and system design",
    },
    {
      icon: Tv,
      title: "Content Creation",
      description: "YouTube content creator with C&S TV Official and Living2Day channels",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Building solutions that bridge technology and society",
    },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building systems that improve efficiency and bridge the gap between technology and society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-8">
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Hi, I'm <strong>Ganza Clebert Sabin</strong>, an Information Systems graduate from the University of
              Rwanda, based in <strong>Kigali</strong>. My studies equipped me with strong skills in{" "}
              <strong>system analysis, database design, software development, and project management</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              For my <strong>final year project</strong>, I developed the{" "}
              <strong>Mission and Leave Management System</strong>, a JavaScript-based solution to streamline employee
              mission requests and leave applications for faster and transparent approval processes.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I gained practical experience in <strong>IT and networking</strong> through internships, working with
              routers, antennas, and enterprise systems. Parallel to my technical journey, I've built a background in{" "}
              <strong>digital media and communication</strong>—working as a story writer, radio presenter, and content
              creator.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Digital Solutions & Content:</h3>
              <ul className="space-y-2 text-lg">
                <li>
                  • <strong>Citizen Reporting System for Rwanda</strong> – a platform for community issue reporting
                </li>
                <li>
                  • <strong>Smart City Citizen Engagement System</strong> (focused on Kigali)
                </li>
                <li>
                  • <strong>E-commerce Shopping Cart System</strong>
                </li>
                <li>
                  • <strong>YouTube Documentaries & Health Awareness Content</strong> via my channels:{" "}
                  <strong>C&S TV Official</strong> and <strong>Living2Day</strong>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              I'm passionate about building systems that improve efficiency and{" "}
              <strong>bridge the gap between technology and society</strong>. My aim is to contribute to impactful
              projects in <strong>Information Systems, data-driven solutions, and smart city innovations</strong>, while
              growing as a digital entrepreneur.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

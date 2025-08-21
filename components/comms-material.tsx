"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Mail } from "lucide-react"

export function CommsMaterial() {
  const handleDownloadCV = () => {
    // This would typically link to your actual CV file
    alert("CV download will be available soon. Please contact me directly for my latest CV.")
  }

  const handleDownloadCoverLetter = () => {
    // This would typically link to your actual cover letter file
    alert("Cover letter download will be available soon. Please contact me directly for my cover letter.")
  }

  const handleEmailContact = () => {
    window.open("mailto:clebertsabin@gmail.com?subject=Professional Inquiry&body=Hello Ganza Clebert Sabin,", "_self")
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Materials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my professional documents or get in touch directly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Curriculum Vitae</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Comprehensive overview of my education, experience, and skills.
              </p>
              <Button onClick={handleDownloadCV} className="w-full gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Cover Letter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">Personalized introduction highlighting my passion and goals.</p>
              <Button onClick={handleDownloadCoverLetter} variant="outline" className="w-full gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Download Cover Letter
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Direct Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">Reach out directly for opportunities and collaborations.</p>
              <Button onClick={handleEmailContact} variant="secondary" className="w-full gap-2">
                <Mail className="h-4 w-4" />
                Email Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

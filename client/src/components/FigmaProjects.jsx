import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const figmaProjects = [
  {
    title: "Coding Gita Website Clone",
    description: "A detailed clone design of the Coding Gita website interface, focusing on educational content presentation.",
    figmaLink: "https://www.figma.com/proto/Jk8TMDqnYNJAvnGwbQMnZl/Untitled?node-id=1-349&t=iLFtjAj1EeqvNWLc-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
  },
  {
    title: "Instagram Clone Design",
    description: "A modern redesign of Instagram's interface with focus on user experience and visual hierarchy.",
    figmaLink: "https://www.figma.com/design/qhWlioGq4wGc1xypWUqrOV/Untitled?node-id=0-1&p=f&t=ZXAEGqUkrxYMTQiF-0"
  },
  {
    title: "Amazon Homepage Design",
    description: "A replica of Amazon's homepage with improved visual elements and user interface components.",
    figmaLink: "https://www.figma.com/design/gjDo82d5hxaveCbj1hDihH/Amazon-Website-Design-(Community)?node-id=0-1&p=f&t=AFvbrDV3hcr6VEKX-0"
  },
  {
    title: "Simple Calendar Design",
    description: "A clean and minimalist calendar interface focusing on ease of use and visual clarity.",
    figmaLink: "https://www.figma.com/design/RjOQH4AEgZiorbYA4mmqn0/Untitled?node-id=0-1&p=f&t=rYALmcP5GGcl43L0-0"
  },
  {
    title: "Trading App Homepage",
    description: "A modern trading application interface design with focus on data visualization and user interaction.",
    figmaLink: "https://www.figma.com/design/L2G8cr1RZ6C01zNcPkbZ45/Untitled?node-id=0-1&p=f&t=uqIF1egeZgVD8LRL-0"
  },
  {
    title: "CarZX",
    description: "An automotive platform interface design focusing on car browsing and comparison features.",
    figmaLink: "https://www.figma.com/proto/a3PyAzjFxAPu4ScAoupOi7/Untitled?node-id=1-3&starting-point-node-id=1%3A3"
  }
];

export default function FigmaProjects() {
  return (
    <section id="figma-projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Figma Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {figmaProjects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View in Figma
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

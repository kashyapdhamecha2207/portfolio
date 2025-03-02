import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out to me through any of these platforms:
                </p>

                <div className="flex justify-center gap-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover:bg-[#24292e] hover:text-white transition-colors" 
                    asChild
                  >
                    <a
                      href="https://github.com/kashyapdhamecha2207"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover:bg-[#0A66C2] hover:text-white transition-colors" 
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/kashyap07/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="hover:bg-black hover:text-white transition-colors" 
                    asChild
                  >
                    <a
                      href="https://x.com/sirdhamecha"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-primary hover:text-white transition-colors"
                    asChild
                  >
                    <a href="mailto:kashyap.dhamecha.cg@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  Email: kashyap.dhamecha.cg@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
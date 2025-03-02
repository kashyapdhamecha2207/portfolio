import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                  <ul className="space-y-2">
                    <li><strong>Name:</strong> Kashyap Dhamecha</li>
                    <li><strong>Age:</strong> 18 years</li>
                    <li><strong>Location:</strong> Gujarat, India</li>
                    <li><strong>Email:</strong> kashyap.dhamecha.cg@gmail.com</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Bio</h3>
                  <p className="text-muted-foreground">
                    I am a passionate first-year B.Tech student at Rai University with a keen interest in technology and innovation. 
                    Currently exploring various aspects of computer science and engineering to build a strong foundation 
                    for my future career in tech.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
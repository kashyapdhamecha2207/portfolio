import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                  <p className="text-muted-foreground mb-2">Computer Science and Engineering</p>
                  <p className="text-sm">Rai University - 2024 - Present</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                    <li>First Year Student</li>
                    <li>Currently studying core CS subjects</li>
                    <li>Active member of the College Coding Club</li>
                    <li>Semester 1 CGPA: 9.19</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Photography",
    image: "https://images.unsplash.com/photo-1532778489370-ffc5d2095091",
    description: "Capturing moments and exploring visual storytelling"
  },
  {
    title: "Reading",
    image: "https://images.unsplash.com/photo-1532778597765-a2a1c4dda1ec",
    description: "Enjoying both fiction and technical books"
  },
  {
    title: "Chess",
    image: "https://images.unsplash.com/photo-1612016369369-cb4c9f480d70",
    description: "Strategic thinking and mental exercise"
  },
  {
    title: "Music",
    image: "https://images.unsplash.com/photo-1612016520089-2a0258448153",
    description: "Playing guitar and composing songs"
  }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Hobbies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
    description: "Playing and following cricket matches, enjoying the spirit of the game"
  },
  {
    title: "Esports",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    description: "Competitive gaming and following esports tournaments"
  },
  {
    title: "Travelling",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    description: "Exploring new places and experiencing different cultures"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
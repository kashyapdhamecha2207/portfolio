import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1502945015378-0e284ca1a5be')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Kashyap Dhamecha
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            First Year B.Tech Student
          </p>
          <Button asChild>
            <a href="#about">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Ripple } from "@/components/magicui/ripple";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartPulse,
  Lightbulb,
  Lock,
  MessageSquareHeart,
  Waves,
  Star,
  Quote,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

export default function Home() {
  const emotions = [
    { value: 0, label: "😞 Down", color: "from-indigo-500/60" },
    { value: 25, label: "🙂 Content", color: "from-emerald-400/60" },
    { value: 50, label: "🧘‍♂️ Peaceful", color: "from-violet-400/60" },
    { value: 75, label: "😄 Happy", color: "from-yellow-400/70" },
    { value: 100, label: "🤩 Excited", color: "from-pink-400/70" },
  ];

  const features = [
    {
      icon: HeartPulse,
      title: "24/7 Support",
      description: "Always here to listen and support you, any time of day",
      color: "from-rose-500/20",
      delay: 0.2,
    },

    {
      icon: Lightbulb,
      title: "Smart Insights",
      description: "Pesonalized guidance powered by emotional intelligence",
      color: "from-amber-500/20",
      delay: 0.4,
    },

    {
      icon: Lock,
      title: "Private & Secure",
      description: "Your conversation are always confidential and encrypted",
      color: "from-emerald-500/20",
      delay: 0.6,
    },

    {
      icon: MessageSquareHeart,
      title: "Evidence-Based",
      description: "Therapeutic techniques backed by clinical research",
      color: "from-blue-500/20",
      delay: 0.8,
    },
  ];

  const reviews = [
    {
      name: "Emily Johnson",
      role: "Student",
      feedback:
        "Serenity has been a gentle companion for me during stressful days. It listens without judgment and always helps me find calm.",
      color: "from-pink-500/20",
      delay: 0.2,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      feedback:
        "The AI feels surprisingly empathetic. It helps me reflect on my emotions and gives me insights I didn’t realize I needed.",
      color: "from-violet-500/20",
      delay: 0.4,
    },
    {
      name: "Sophia Patel",
      role: "Designer",
      feedback:
        "I love how private and secure it feels. It’s comforting to have a safe space to express what I’m going through.",
      color: "from-emerald-500/20",
      delay: 0.6,
    },
    {
      name: "David Miller",
      role: "Entrepreneur",
      feedback:
        "This app is more than support — it feels like a real emotional partner guiding me through ups and downs.",
      color: "from-blue-500/20",
      delay: 0.8,
    },
  ];

  const [emotion, setEmotion] = useState(50);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentEmotion =
    emotions.find((em) => Math.abs(emotion - em.value) < 15) || emotions[2];

  return (
    <div className="flex flex-col font-semibold min-h-screen overflow-hidden">
      <section
        className="relative min-h-[90vh] 
      mt-16 flex flex-col items-center 
      justify-center py-12 px-4"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className={`absolute w-[500px] h-[500px] 
            rounded-full blur-3xl top-0 -left-20 
            transition-all duration-700 ease-in-out
            bg-gradient-to-r ${currentEmotion.color} to-transparent opacity-60`}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full
          bg-secondary/10 blur-3xl bottom-0 right-0 animate-pulse delay-700"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
        </div>

        <Ripple className="opacity-60" />

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative space-y-8 text-center"
        >
          <div
            className="inline-flex items-center gap-2
          rounded-full px-4 py-1.5 text-sm border 
          border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/40
          transition-all duration-300"
          >
            <Waves className="w-4 h-4 animate-wave text-primary" />
            <span className="relative text-foreground/90 dark:text-foreground">
              Your Personalized AI Agent Mental Health Buddy
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold 
           font-plus-jakarta -tracking-tight"
          >
            <span
              className="inline-block bg-gradient-to-r 
            from-primary via-primary/90 to-secondary bg-clip-text text-transparent
            [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] hover:to-primary transition-all 
            duration-300"
            >
              Step Into Calm,
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-b from-background to-foreground/90 bg-clip-text text-transparent">
              Step Into You
            </span>
          </h1>

          <p
            className="max-w-[600px] text-base md:text-lg text-muted-foreground 
          leading-relaxed tracking-wide mt-6"
          >
            Your journey to clarity starts here — with an AI companion that
            listens, understands, and helps you grow.
          </p>

          {/* Emotional slider */}
          <motion.div
            className="w-full max-w-[600px] mx-auto space-y-6 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="space-y-2 text-center">
              <p className="text-sm text-muted-foreground/80 font-medium">
                No matter what’s on your mind, we’re here to listen.
              </p>
              <div className="flex items-center justify-center gap-16">
                {emotions.map((em) => (
                  <div
                    key={em.value}
                    className={`transition-all duration-500 ease-out 
                    cursor-pointer hover:scale-105 ${
                      Math.abs(emotion - em.value) < 15
                        ? "opacity-100 scale-110"
                        : "opacity-50 scale-90"
                    }`}
                    onClick={() => setEmotion(em.value)}
                  >
                    <div className="text-2xl transform-gpu">
                      {em.label.split(" ")[0]} {/* Emoji */}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium">
                      {em.label.split(" ")[1]} {/* Text */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*Slider*/}
            <div className="relative px-2">
              <div
                className={`absolute inset-0 bg-gradient-to-r 
                ${currentEmotion.color} to-transparent blur-2xl -z-10 transition-all 
                duration-500`}
              />

              <Slider
                value={[emotion]}
                onValueChange={(value) => setEmotion(value[0])}
                min={0}
                max={100}
                step={1}
                className="py-4"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground animate-pulse">
                Move the slider to match your mood
              </p>
            </div>
          </motion.div>

          {/* Call to action button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center 
          items-center "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button
              size="lg"
              className=" relative group h-12 px-8 
            rounded-full bg-gradient-to-r from-primary via-primary/90 
            to-secondary hover:to-primary shadow-lg shadow-primary/20 
            transition-all duration-500 hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
            >
              <span className="relative z-10 font-medium flex items-center gap-2">
                Unlock Your Path
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 
                transition-transform duration-300"
                />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16 space-y-4 text-white">
            <h2
              className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-primary
            dark:text-primary/90"
            >
              How SERENITY Helps You
            </h2>
            <p
              className="text-foreground dark:text-foreground/95 max-w-2xl 
            mx-auto font-light text-lg"
            >
              Discover a gentler way to find support — with an AI that truly
              understands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Card
                  className="group relative overflow-hidden border 
                border-primary/10 hover:border-primary/20 
                transition-all duration-300 h-[200px] md:h-[220px] 
                bg-card/30 dark:bg-card/80 backdrop-blur-sm"
                >
                  {/* Gradient hover overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 
                  bg-gradient-to-br ${feature.color} to-transparent opacity-0 
                  group-hover:opacity-20 transition-opacity duration-500 
                  dark:group-hover:opacity-30`}
                  />

                  <CardHeader className="relative z-10 pb-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-xl bg-primary/10 dark:bg-primary/20 
                      group-hover:bg-primary/30 transition-colors"
                      >
                        <feature.icon className="w-5 h-5 text-primary dark:text-primary/90" />
                      </div>
                      <h3
                        className="font-semibold tracking-tight text-foreground/90 
                      dark:text-foreground"
                      >
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*User testimonial */}

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-16 space-y-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-primary dark:text-primary/90">
              What Our Users Say
            </h2>
            <p className="text-foreground dark:text-foreground/95 max-w-2xl mx-auto font-light text-lg">
              Real experiences from people finding peace with Serenity
            </p>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: review.delay, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  className="group relative overflow-hidden border 
                border-primary/10 hover:border-primary/20 
                transition-all duration-300 h-[260px] bg-card/30 dark:bg-card/80 
                backdrop-blur-sm p-5 flex flex-col justify-between"
                >
                  {/* Gradient overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 
                  bg-gradient-to-br ${review.color} to-transparent opacity-0 
                  group-hover:opacity-20 transition-opacity duration-500 
                  dark:group-hover:opacity-30`}
                  />

                  {/* Content */}
                  <CardHeader className="relative z-10 space-y-3 p-0">
                    <Quote className="w-6 h-6 text-primary/80" />
                    <p className="text-sm text-foreground/90 dark:text-foreground/80 leading-relaxed">
                      "{review.feedback}"
                    </p>
                  </CardHeader>

                  {/* Footer: name + stars */}
                  <div className="relative z-10 flex items-center justify-between pt-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {review.role}
                      </span>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

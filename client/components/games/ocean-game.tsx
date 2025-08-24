"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Waves, RefreshCcw, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

const SESSION_DURATION = 3 * 60; // 3 minutes

export default function OceanWaves() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(SESSION_DURATION);
  const [bubbles, setBubbles] = useState<
    { id: number; x: number; size: number }[]
  >([]);

  // Timer effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          setProgress(
            ((SESSION_DURATION - newTime) / SESSION_DURATION) * 100
          );
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle bubble creation
  const releaseBubble = () => {
    const id = Date.now();
    const x = Math.random() * 100; // percent
    const size = Math.random() * 20 + 10; // px
    setBubbles((prev) => [...prev, { id, x, size }]);
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id));
    }, 5000);
  };

  // Reset
  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setTimeLeft(SESSION_DURATION);
    setBubbles([]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[450px] space-y-6">
      <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
        <Waves className="w-6 h-6 text-blue-500" /> Ocean Waves
      </h2>
      <p className="text-muted-foreground text-sm">
        Match your calm with the rhythm of ocean waves 🌊
      </p>

      {/* Ocean Wave Animation */}
      <div
        className="relative w-full h-56 bg-gradient-to-t from-blue-400 to-blue-200 
        rounded-xl overflow-hidden flex items-end justify-center cursor-pointer"
        onClick={releaseBubble}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 w-full h-20 bg-blue-300 opacity-60 blur-lg"
        />

        {/* Floating bubbles */}
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: -200, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="absolute text-white"
            style={{ left: `${b.x}%`, fontSize: b.size }}
          >
            🫧
          </motion.div>
        ))}

        <span className="absolute bottom-2 text-xs text-white opacity-70">
          Tap to release bubbles
        </span>
      </div>

      {/* Progress + Controls */}
      <div className="w-64 space-y-4">
        <Progress value={progress} className="h-2" />

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{formatTime(timeLeft)}</span>
          <span>{formatTime(SESSION_DURATION)}</span>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleReset}
          >
            <RefreshCcw className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

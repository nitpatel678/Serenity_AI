"use client";

import { Progress } from "../ui/progress";
import { AnimatePresence, motion } from "framer-motion";
import { Wind } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

export default function BreathingGame() {
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [progress, setProgress] = useState(0);
  const [round, setRound] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const TOTAL_ROUNDS = 5;

  useEffect(() => {
    if (isComplete || isPaused) return;

    let timer: ReturnType<typeof setInterval>;

    if (phase === "inhale") {
      timer = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setPhase("hold");
            return 0;
          }
          return p + 2;
        });
      }, 100);
    } else if (phase === "hold") {
      timer = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setPhase("exhale");
            return 0;
          }
          return p + 4;
        });
      }, 100);
    } else {
      // exhale
      timer = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            if (round >= TOTAL_ROUNDS) {
              setIsComplete(true);
              return p;
            }
            setPhase("inhale");
            setRound((r) => r + 1);
            return 0;
          }
          return p + 2;
        });
      }, 100);
    }

    return () => clearInterval(timer);
  }, [phase, round, isComplete, isPaused]);

  const handleReset = () => {
    setPhase("inhale");
    setProgress(0);
    setRound(1);
    setIsComplete(false);
    setIsPaused(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[400px] space-y-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          className="text-center flex flex-col items-center space-y-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {/* Breathing Circle */}
          <div className="relative w-32 h-32 mx-auto">
            <motion.div
              animate={{
                scale:
                  phase === "inhale"
                    ? 1.5 // grow
                    : phase === "exhale"
                    ? 0.8 // shrink
                    : 1.2, // steady hold
              }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/10 rounded-full"
            ></motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Wind className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Breathing Text */}
          <h3 className="text-2xl font-semibold mt-6">
            {phase === "inhale"
              ? "Breathe In"
              : phase === "hold"
              ? "Hold"
              : "Breathe Out"}
          </h3>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="w-64">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Controls */}
      <div className="space-y-4 text-center">
        <div className="text-sm text-muted-foreground">
          Round {round} of {TOTAL_ROUNDS}
        </div>

        {isComplete ? (
          <div className="text-green-600 font-medium">
            Session Complete 🎉
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? "Resume" : "Pause"}
          </Button>
        )}

        <Button variant="outline" size="sm" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}

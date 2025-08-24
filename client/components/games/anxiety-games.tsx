"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Flower2,
  Wind,
  Leaf,
  Trees,
  Waves,
  Music2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BreathingGame from "./breathing-game";
import { ZenGarden } from "./zen-garden";
import { ForestGame } from "./forest-game";

type GameId = "breathing" | "waves" | "garden" | "forest";

interface Game {
  id: GameId;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  bgColor: string;
  duration: string;
}

const games: Game[] = [
  {
    id: "breathing",
    title: "Breathing Patterns",
    description: "Follow calming breathing exercise with visual guidance",
    icon: Wind,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    duration: "5 mins",
  },
  {
    id: "waves",
    title: "Ocean Waves",
    description: "Match your breath with gentle ocean waves",
    icon: Waves,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    duration: "8 mins",
  },
  {
    id: "garden",
    title: "Zen Garden",
    description: "Visualize a quiet garden to relax and slow your breath",
    icon: Flower2,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    duration: "6 mins",
  },
  {
    id: "forest",
    title: "Forest Walk",
    description: "Sync your breathing with a peaceful forest ambience",
    icon: Trees,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
    duration: "10 mins",
  },
];

interface AnxietyGamesProps {
  onGamePlayed?: (gameName: string, description: string) => Promise<void>;
}

export const AnxietyGames = ({ onGamePlayed }: AnxietyGamesProps) => {
  const [selectedGame, setSelectedGame] = useState<GameId | null>(null);
  const [showGame, setShowGame] = useState(false);

  const selectedGameData = useMemo(
    () => games.find((g) => g.id === selectedGame) || null,
    [selectedGame]
  );

  const handleGameStart = async (gameId: GameId) => {
    setSelectedGame(gameId);
    setShowGame(true);

    if (onGamePlayed) {
      try {
        const g = games.find((x) => x.id === gameId);
        await onGamePlayed(gameId, g?.description || "");
      } catch (error) {
        console.error("Error logging game activity:", error);
      }
    }
  };

  const handleDialogChange = (open: boolean) => {
    setShowGame(open);
    if (!open) {
      // optional: clear selection on close
      setSelectedGame(null);
    }
  };

  // Minimal placeholders so the switch compiles without errors
  const renderGame = () => {
    switch (selectedGame) {
      case "breathing":

        return <BreathingGame/> 
      case "garden":
        return <ZenGarden/>
      case "forest":
        return <ForestGame/>
      case "waves":
        return 
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="border-primary/10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-primary" aria-hidden="true" />
            Anxiety Relief Activities
          </CardTitle>
          <CardDescription>
            Interactive exercises to help reduce stress and anxiety
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game) => (
              <motion.div
                key={game.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  role="button"
                  aria-label={`Start ${game.title}`}
                  tabIndex={0}
                  className={`border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer ${
                    selectedGame === game.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleGameStart(game.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleGameStart(game.id);
                    }
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl ${game.color} ${game.bgColor}`}
                      >
                        <game.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{game.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {game.description}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <Music2 className="h-4 w-4" aria-hidden="true" />
                          <span className="text-sm text-muted-foreground">
                            {game.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={showGame} onOpenChange={setShowGame}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {games.find((g) => g.id === selectedGame)?.title}
            </DialogTitle>
          </DialogHeader>

          {renderGame()}
        </DialogContent>
      </Dialog>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";

export default function HeroSection() {
  const [stats, setStats] = useState({ serverCount: 0, memberCount: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoaded(true);
      });
  }, []);

  const serverCount = useCounter(0, loaded ? stats.serverCount : 0, 2000);
  const memberCount = useCounter(0, loaded ? stats.memberCount : 0, 2000);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-900 to-green-700 px-6">
      <h1 className="text-5xl font-extrabold text-green-200 mb-6">
        Willkommen bei FrogBot
      </h1>
      <p className="text-xl mb-8"></p>
      <div className="flex gap-10 text-3xl font-bold text-green-300">
        <div>
          <span>{serverCount}</span>+ Server
        </div>
        <div>
          <span>{memberCount}</span>+ Mitglieder
        </div>
      </div>
    </section>
  );
}

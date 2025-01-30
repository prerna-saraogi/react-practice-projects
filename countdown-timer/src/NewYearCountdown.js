import React, { useEffect, useState } from "react";

function NewYearCountdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = nextYear - now;

    return {
      months: Math.floor(diff / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }
  const timeUnits = [
    { label: "Months", value: timeLeft.months },
    { label: "Days", value: timeLeft.days },
    { label: timeLeft.hours > 1 ? "Hours" : "Hour", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="countdown-grid">
      {timeUnits.map((unit) => (
        <div className="countdown-item" key={unit.label}>
          <div className="countdown-value">{unit.value}</div>
          <div className="countdown-label">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}

export default NewYearCountdown;

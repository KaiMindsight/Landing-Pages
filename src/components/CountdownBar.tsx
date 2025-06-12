import { useState, useEffect } from "react";

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to tomorrow at midnight
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(0, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-3 text-center text-white font-semibold" style={{ backgroundColor: '#d32f2f' }}>
      <div className="max-w-7xl mx-auto px-4">
        <span className="text-sm md:text-base">
          🔥 LIMITED TIME: 25% OFF ENDS IN {timeLeft.days} DAY{timeLeft.days !== 1 ? 'S' : ''} {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S
        </span>
      </div>
    </div>
  );
};

export default CountdownBar; 
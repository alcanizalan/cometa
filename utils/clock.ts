'use client';

import { useState, useEffect } from 'react';

export function getDigitalClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, []);

  if (!time) {
    return "00:00:00"
  }

  const [hours, minutes, seconds] = time.toLocaleTimeString().split(":");

  console.log(time);

  return [hours, minutes, seconds];
}

export function DigitalDate() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());

    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!date) {
    return "0000-00-00";
  }

  const [year, month, day] = date.toLocaleDateString().split("/");

  return [year, month, day];
}
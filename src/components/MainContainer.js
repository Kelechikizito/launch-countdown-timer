import { useState, useEffect } from "react";
import Timer from "./Timer";
import SocialMediaIcon from "./SocialMediaIcon";
import FacebookIcon from "../assets/images/icon-facebook.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

const MainContainer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const today = new Date(); // Get today's date

    // Get the date 8 days from now
    const lastDate = new Date(today);
    lastDate.setDate(today.getDate() + 9);

    // Countdown target date
    const countDownDate = lastDate.getTime();

    const countDownFunction = setInterval(() => {
      // Get current time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const calculatedDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const calculatedMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const calculatedSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Pad numbers with leading zeros if needed
      setDays(String(calculatedDays).padStart(2, "0"));
      setHours(String(calculatedHours).padStart(2, "0"));
      setMinutes(String(calculatedMinutes).padStart(2, "0"));
      setSeconds(String(calculatedSeconds).padStart(2, "0"));

      // Clear the interval when countdown is finished
      if (distance < 0) {
        clearInterval(countDownFunction);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countDownFunction);
  }, []);

  return (
    <div className="flex flex-col gap-14 z-40">
      <div>
        <h1 className="text-white tracking-[6px]">
          WE'RE LAUNCHING SOON
        </h1>
      </div>

      <div className="flex justify-between gap-4 scale-[0.85] sm:transform-none sm:gap-8">
        <Timer title="Days" countDown={days} />
        <Timer title="Hours" countDown={hours} />
        <Timer title="Minutes" countDown={minutes} />
        <Timer title="Seconds" countDown={seconds} />
      </div>

      <div className="flex justify-center gap-8">
        <SocialMediaIcon imageSrc={FacebookIcon} />
        <SocialMediaIcon imageSrc={PinterestIcon} />
        <SocialMediaIcon imageSrc={InstagramIcon} />
      </div>
    </div>
  );
};

export default MainContainer;

"use client";

import TriggerButton from "./components/button/button.jsx";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full h-screen bg-green-300">
          <TriggerButton></TriggerButton>
        </div>
      </div>
    </>
  );
}

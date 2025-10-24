// app/components/LottiePlayer.tsx
"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottiePlayer() {
  return (
    <DotLottieReact
      src="https://lottie.host/84b3c977-da50-456b-b049-e303ae23c652/QDpua8A7YJ.lottie"
      loop
      autoplay
      style={{ width: 1000, height: 650 }}
    />
  );
}

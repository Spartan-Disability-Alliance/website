import { ImageResponse } from "next/og";
import OpengraphBanner from "../components/molecules/opengraphBanner";

export const alt = "About Spartan Disability Alliance";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpengraphImage() {
  return new ImageResponse(<OpengraphBanner>About</OpengraphBanner>, {
    ...size,
  });
}

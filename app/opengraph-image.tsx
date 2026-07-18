import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const imageBuffer = await readFile(path.join(process.cwd(), "public/images/hero.jpg"));
  const imageSrc = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt=""
          width={size.width}
          height={size.height}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(31,45,39,0.92) 10%, rgba(31,45,39,0.35) 55%, rgba(31,45,39,0.05) 100%)",
          }}
        />
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#ce9456", textTransform: "uppercase", position: "relative" }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 72, color: "#F5F2ED", marginTop: 20, position: "relative" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(245,242,237,0.8)", marginTop: 16, position: "relative" }}>
          Seu refúgio na serra — {site.city}
        </div>
      </div>
    ),
    { ...size },
  );
}

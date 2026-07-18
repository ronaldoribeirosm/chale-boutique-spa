import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1F2D27",
          borderRadius: 4,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B87333" strokeWidth={2}>
          <path d="m3 19 6-10 4 6 2-3 6 7Z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

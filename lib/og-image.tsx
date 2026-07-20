import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B1E33",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "420px",
            height: "100%",
            background: "#d4af37",
            clipPath: "polygon(60% 0, 100% 0, 100% 100%, 20% 100%)",
          }}
        />
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#d4af37", textTransform: "uppercase", fontWeight: 700 }}>
          {company.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            maxWidth: 760,
            lineHeight: 1.15,
          }}
        >
          {company.tagline}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}

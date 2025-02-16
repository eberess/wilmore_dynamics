import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #1a73e8, #8ab4f8)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 32,
          }}
        >
          {/* Logo SVG */}
          <svg 
            width="120" 
            height="120" 
            viewBox="0 -960 960 960" 
            fill="white"
          >
            <path d="m345.46-600.23 106.69-176.08q5.23-8.46 12.5-11.81 7.27-3.34 15.35-3.34t15.35 3.34q7.27 3.35 12.5 11.81l106.69 176.08q5.23 8.08 5.23 16.96 0 8.89-4.23 16.35-4.23 7.46-11.39 11.8-7.15 4.35-16.69 4.35H372.54q-9.63 0-16.85-4.44-7.22-4.44-11.23-11.71-4.23-7.22-4.23-16.03 0-8.82 5.23-17.28Zm354.72 489.46q-62.1 0-105.76-43.47-43.65-43.47-43.65-105.58 0-62.1 43.47-105.76 43.47-43.65 105.58-43.65 62.1 0 105.76 43.47 43.65 43.47 43.65 105.58 0 62.1-43.47 105.76-43.47 43.65-105.58 43.65ZM150.77-163.1v-194q0-13.75 9.29-22.94 9.3-9.19 23.04-9.19h194q13.75 0 22.94 9.29 9.19 9.3 9.19 23.04v194q0 13.75-9.29 22.94-9.3 9.19-23.04 9.19h-194q-13.75 0-22.94-9.29-9.19-9.3-9.19-23.04Z"/>
          </svg>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 32,
                color: 'white',
                opacity: 0.9,
                fontWeight: 500,
              }}
            >
              Wilmore Dynamics
            </span>
            <h1
              style={{
                fontSize: 72,
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                lineHeight: 1.2,
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              Open Source
              <span
                style={{
                  fontSize: 72,
                  opacity: 0.9,
                }}
              >
                Store
              </span>
            </h1>
          </div>
        </div>
      </div>
    ),
    size,
  );
} 
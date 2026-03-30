"use client";

import { useState } from "react";
import { tokens } from "@/app/constants";

const platforms = ["All Platforms", "Web", "iOS App", "Android App"] as const;
type Platform = (typeof platforms)[number];

export function PlatformTabs() {
  const [active, setActive] = useState<Platform>("All Platforms");

  const show = (p: Platform) => active === "All Platforms" || active === p;

  return (
    <>
      <style>{`
        .platform-tabs {
          display: flex;
          gap: 4px;
          padding: 4px;
          background: ${tokens.surface};
          border-radius: 12px;
          margin-bottom: 40px;
          overflow-x: auto;
        }
        .platform-tab {
          flex: 1;
          padding: 10px 16px;
          border-radius: 8px;
          border: none;
          background: transparent;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: ${tokens.mid};
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .platform-tab:hover { color: ${tokens.text}; }
        .platform-tab[data-active="true"] {
          background: ${tokens.white};
          color: ${tokens.text};
          font-weight: 500;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        @media (max-width: 480px) {
          .platform-tab { font-size: 10px; padding: 8px 10px; }
        }
      `}</style>

      <div className="platform-tabs" role="tablist" aria-label="Platform privacy details">
        {platforms.map((p) => (
          <button
            key={p}
            role="tab"
            aria-selected={active === p}
            className="platform-tab"
            data-active={active === p}
            onClick={() => setActive(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="policy-section">
        <h2>What We Collect</h2>

        {show("Web") && (
          <>
            <h3>On the Web</h3>
            <ul>
              <li><strong>Waitlist information</strong> — name, email address, and consent status when you join the waitlist</li>
              <li><strong>No cookies or tracking</strong> — the website does not use cookies, analytics, or third-party tracking scripts</li>
            </ul>
          </>
        )}

        {show("iOS App") && (
          <>
            <h3>In the iOS App</h3>
            <ul>
              <li><strong>Health data</strong> — heart rate, blood oxygen saturation (SpO2), and step count from your SamaWritten wearable via Bluetooth Low Energy</li>
              <li><strong>Account information</strong> — email address or authentication provider identity (Apple ID, Google) when you create or link an account</li>
              <li><strong>Apple Health integration</strong> — with your permission, health data is written to Apple Health (HealthKit)</li>
              <li><strong>Device information</strong> — wearable device identifier for pairing and data association</li>
            </ul>
          </>
        )}

        {show("Android App") && (
          <>
            <h3>In the Android App</h3>
            <ul>
              <li><strong>Health data</strong> — heart rate, blood oxygen saturation (SpO2), and step count from your SamaWritten wearable via Bluetooth Low Energy</li>
              <li><strong>Account information</strong> — email address or authentication provider identity (Google) when you create or link an account</li>
              <li><strong>Health Connect integration</strong> — with your permission, health data is written to Google Health Connect</li>
              <li><strong>Device information</strong> — wearable device identifier for pairing and data association</li>
            </ul>
          </>
        )}
      </div>

      <div className="policy-section">
        <h2>How We Use Your Data</h2>

        {show("Web") && (
          <>
            <h3>On the Web</h3>
            <p>
              Your waitlist information is used solely to notify you about SamaWritten availability,
              updates, and priority access. We do not use it for marketing to third parties.
            </p>
          </>
        )}

        {show("iOS App") && (
          <>
            <h3>In the iOS App</h3>
            <p>
              Your health data is used to display real-time readings, generate trend charts and health
              insights, trigger health alerts, and sync data to Apple Health. Account information is
              used for authentication and optional cloud backup of your health history.
            </p>
          </>
        )}

        {show("Android App") && (
          <>
            <h3>In the Android App</h3>
            <p>
              Your health data is used to display real-time readings, generate trend charts and health
              insights, trigger health alerts, and sync data to Health Connect. Account information is
              used for authentication and optional cloud backup of your health history.
            </p>
          </>
        )}
      </div>

      <div className="policy-section">
        <h2>Permissions We Request</h2>

        {show("iOS App") && (
          <>
            <h3>iOS Permissions</h3>
            <ul>
              <li><strong>Bluetooth</strong> — to connect to your wearable and receive health data in real time</li>
              <li><strong>HealthKit (read & write)</strong> — to sync heart rate, SpO2, and step data with Apple Health</li>
              <li><strong>Notifications</strong> — to alert you about critical health events and low device battery</li>
              <li><strong>Background processing</strong> — to maintain the Bluetooth connection and sync data while the app is in the background</li>
            </ul>
          </>
        )}

        {show("Android App") && (
          <>
            <h3>Android Permissions</h3>
            <ul>
              <li><strong>Bluetooth Scan & Connect</strong> — to find and communicate with your wearable (not used for location tracking)</li>
              <li><strong>Health Connect</strong> — to read and write heart rate, SpO2, and step data</li>
              <li><strong>Notifications</strong> — to alert you about critical health events</li>
              <li><strong>Foreground Service</strong> — to keep the Bluetooth connection alive for continuous monitoring</li>
              <li><strong>Location (Android 11 and below only)</strong> — required by the Android OS for Bluetooth scanning on older devices; SamaWritten does not track your location</li>
            </ul>
          </>
        )}

        {show("Web") && (
          <>
            <h3>Web Permissions</h3>
            <p>The website does not request any device permissions. No location, camera, microphone, or notification access is required.</p>
          </>
        )}
      </div>
    </>
  );
}

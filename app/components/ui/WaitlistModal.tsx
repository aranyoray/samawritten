"use client";

import React, { useState } from "react";
import { useWaitlist } from "../../context/WaitlistContext";
import { tokens } from "@/app/constants";
import { Mono } from "./Typography";

export function WaitlistModal() {
  const { isModalOpen, closeModal } = useWaitlist();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && agreed) {
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, consent: agreed }),
        });

        if (res.ok) {
          setSubmitted(true);
          setTimeout(() => {
            closeModal();
            setSubmitted(false);
            setName("");
            setEmail("");
            setAgreed(false);
          }, 5000);
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } catch (err) {
        console.error(err);
        alert("Failed to join waitlist. Please check your connection.");
      }
    }
  };

  const nameFirst = name.split(' ')[0] || 'there';

  return (
    <div 
      className="modal-overlay"
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)",
        padding: 24,
      }}
      onClick={closeModal}
    >
      <style>{`
        @keyframes modalEnter {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes timerProgress {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 126; } /* 2 * PI * 20 ~= 126 */
        }
        .modal-content {
          animation: modalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
      
      <div 
        className="modal-content"
        style={{
          width: "100%", maxWidth: 440,
          background: tokens.white,
          borderRadius: 24,
          padding: 40,
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          position: "relative",
          textAlign: "center"
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={closeModal}
          style={{
            position: "absolute", top: 20, right: 20,
            background: tokens.surface, border: "none",
            width: 32, height: 32, borderRadius: "50%",
            cursor: "pointer", color: tokens.mid, fontSize: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s", zIndex: 10
          }}
          onMouseEnter={e => e.currentTarget.style.background = tokens.border}
          onMouseLeave={e => e.currentTarget.style.background = tokens.surface}
        >✕</button>

        {!submitted ? (
          <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <img 
                src="/SamaWritten-Logo.png" 
                alt="SamaWritten Logo" 
                style={{ height: 24, width: "auto" }} 
              />
              <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.045em", color: tokens.black, display: "flex", alignItems: "baseline" }}>
                SamaWritten
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: tokens.accent, marginLeft: 2, display: "inline-block" }} />
              </div>
            </div>
            
            <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.04em", marginBottom: 12 }}>
              Priority Access
            </h2>
            <p style={{ color: tokens.mid, fontSize: 14, lineHeight: 1.6, marginBottom: 28 }}>
              Join the waitlist to be among the first to experience SamaWritten.
              Be first in line when we launch.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input 
                type="text" 
                required
                placeholder="Full Name" 
                value={name}
                onChange={e => setName(e.target.value)}
                style={{
                  padding: "14px 18px", borderRadius: 12, border: `1px solid ${tokens.border}`,
                  fontSize: 14, background: tokens.surface, color: tokens.black,
                  outline: "none", transition: "border-color 0.2s"
                }}
                onFocus={e => e.target.style.borderColor = tokens.accent}
                onBlur={e => e.target.style.borderColor = tokens.border}
              />
              <input 
                type="email" 
                required
                placeholder="Email Address" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  padding: "14px 18px", borderRadius: 12, border: `1px solid ${tokens.border}`,
                  fontSize: 14, background: tokens.surface, color: tokens.black,
                  outline: "none", transition: "border-color 0.2s"
                }}
                onFocus={e => e.target.style.borderColor = tokens.accent}
                onBlur={e => e.target.style.borderColor = tokens.border}
              />
              
              <label style={{ 
                display: "flex", alignItems: "flex-start", gap: 10, textAlign: "left", 
                cursor: "pointer", marginTop: 4, marginBottom: 8 
              }}>
                <input 
                  type="checkbox" 
                  required
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  style={{ width: 16, height: 16, marginTop: 2, accentColor: tokens.black }}
                />
                <span style={{ fontSize: 13, color: tokens.mid, lineHeight: 1.4 }}>
                  I agree to be contacted via email regarding SamaWritten updates and priority access.
                  Read our <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: tokens.accent, textDecoration: "none", borderBottom: `1px solid ${tokens.accent}` }} onClick={e => e.stopPropagation()}>Privacy Policy</a>.
                </span>
              </label>

              <button 
                type="submit"
                style={{
                  padding: "16px", borderRadius: 12, background: tokens.black,
                  color: tokens.white, fontWeight: 500, border: "none",
                  cursor: "pointer", fontSize: 15, transition: "opacity 0.2s",
                  opacity: agreed ? 1 : 0.4
                }}
                disabled={!agreed}
                onMouseEnter={e => agreed && (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => agreed && (e.currentTarget.style.opacity = "1")}
              >Join Waitlist</button>
            </form>
            
            <Mono style={{ fontSize: 9.5, color: tokens.dim, marginTop: 24, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Secure & Private · No Spam
            </Mono>
          </>
        ) : (
          <div style={{ padding: "10px 0" }}>
            <div style={{ position: "relative", width: 60, height: 60, margin: "0 auto 24px" }}>
              <svg width="60" height="60" viewBox="0 0 50 50">
                <circle 
                  cx="25" cy="25" r="20" 
                  fill="none" stroke={tokens.surface} strokeWidth="3" 
                />
                <circle 
                  cx="25" cy="25" r="20" 
                  fill="none" stroke={tokens.accent} strokeWidth="3" 
                  strokeDasharray="126" 
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  style={{ animation: "timerProgress 5s linear forwards" }}
                />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                🎉
              </div>
            </div>
            
            <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.04em", marginBottom: 12 }}>
              Successfully submitted!
            </h2>
            <p style={{ color: tokens.mid, fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
              You're on the list, {nameFirst}.<br />
              We'll notify you soon at {email}.
            </p>
            <div style={{ fontSize: 11, color: tokens.dim, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Closing in 5 seconds...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

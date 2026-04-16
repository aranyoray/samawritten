// Design tokens
export const tokens = {
  white: "#FFFFFF",
  offWhite: "#F7F7F5",
  surface: "#F1F1EE",
  border: "#E4E4E0",
  black: "#000000",
  text: "#0F0F0F",
  mid: "#525250",
  dim: "#9A9A93",
  accent: "#1A6BFF",
  green: "#00C48C",
  red: "#FF3B3B",
  orange: "#FF8800",
  purple: "#7C3AED",
};

// Global CSS
export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;600;700&family=DM+Mono:wght@300;400&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { font-family:'Sora',sans-serif; background:#fff; color:#0F0F0F; overflow-x:hidden; }

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(20px); }
    to { opacity:1; transform:translateY(0); }
  }
  @keyframes blink {
    0%,100% { opacity:1; transform:scale(1); }
    50% { opacity:0.5; transform:scale(1.5); }
  }
  @keyframes sdot {
    0% { top:5px; opacity:1; }
    80% { top:22px; opacity:0; }
    100% { top:5px; opacity:0; }
  }
  @keyframes ecgLine {
    0% { stroke-dashoffset: 600; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes pulse3 {
    0%,100% { transform:scale(1); opacity:1; }
    50% { transform:scale(1.08); opacity:0.85; }
  }

  .reveal {
    opacity:1;
    transform:translateY(0);
  }
  .reveal.reveal-pending {
    opacity:0;
    transform:translateY(24px);
    transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                transform 0.85s cubic-bezier(0.16,1,0.3,1);
  }
  .reveal.d1.reveal-pending { transition-delay:0.08s; }
  .reveal.d2.reveal-pending { transition-delay:0.16s; }
  .reveal.d3.reveal-pending { transition-delay:0.24s; }
  .reveal.d4.reveal-pending { transition-delay:0.32s; }
  .reveal.reveal-pending.visible { opacity:1; transform:translateY(0); }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior:auto; }
    .reveal,
    .reveal.reveal-pending,
    .reveal.reveal-pending.visible {
      opacity:1 !important;
      transform:none !important;
      transition:none !important;
    }
  }
`;

export const PROBLEM_STATS = [
  { num: "5", unit: "", label: "On-wrist sensing modalities" },
  { num: "20", unit: "+", label: "Cardiac conditions monitored" },
  { num: "30", unit: "s", label: "Emergency confirmation window" },
  { num: "24", unit: "/7", label: "Passive monitoring coverage" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    num: "01 - Always sensing",
    title: "Five sensors, around the clock",
    body: "Five sensors sample your heart rhythm, blood oxygen, blood pressure, skin conductance, and movement - continuously, silently, around the clock. No button presses. No phone required.",
  },
  {
    num: "02 - AI understands",
    title: "On-device machine learning",
    body: "On-device ML fuses all five signals to detect arrhythmias in real time, spot early signs of heart failure decompensation, and predict cardiac events up to 6.5 days before they happen.",
  },
  {
    num: "03 - Gets you help",
    title: "Calls for help from your wrist",
    body: "When SamaWritten detects a crisis, it vibrates to confirm. No response in 30 seconds? It calls your emergency contacts and sends your GPS location and ECG data directly over cellular.",
  },
];

export const LEFT_FEATURES = [
  { tag: "Display", name: "Blood Pressure", desc: "PPG + BioZ fusion. <3.3 mmHg MAE. Continuous, cuffless. Clinically validated." },
  { tag: "Display", name: "Heart Rate", desc: "+/-1 BPM accuracy. Real-time tachycardia and bradycardia detection with instant alerts." },
];

export const RIGHT_FEATURES = [
  { tag: "Display", name: "SpO2 / RR", desc: "Multi-wavelength PPG. Blood oxygen +/-2%. Continuous respiratory rate estimation." },
  { tag: "Display", name: "Emergency SOS", desc: "30-second confirmation. Auto-calls loved ones and emergency services with GPS and ECG over LTE." },
];

export const SENSORS = [
  { icon: "PPG", name: "Multi-lambda PPG", spec: "530 / 660 / 940nm - 8ch", detail: "HR +/-1 BPM - SpO2 +/-2% - pulse wave velocity - BP estimation" },
  { icon: "ECG", name: "Single-Lead ECG", spec: "250Hz - Lead I equivalent", detail: "95% AF sensitivity - QTc - PVC detection - 30-sec on-demand" },
  { icon: "BIOZ", name: "Bioimpedance", spec: "50kHz - 120dB SNR - <1uA", detail: "Body composition - fluid status - cuffless BP contribution" },
  { icon: "EDA", name: "EDA / GSR", spec: "0.01uS resolution - tonic + phasic", detail: "Autonomic dysfunction - stress index - +12% AI specificity" },
  { icon: "IMU", name: "6-Axis IMU", spec: "BMI270 - <0.4g fall threshold", detail: "Fall detection - 4-stage sleep - activity - AF AUC +4.3%" },
  { icon: "TEMP", name: "NTC Thermistor", spec: "+/-0.1C - continuous", detail: "Circadian rhythm - infection detection - microvascular tone" },
];

export const CONDITION_TIERS = [
  {
    label: "Launch",
    sub: "Production-ready, regulator-precedented",
    color: tokens.green,
    bg: "rgba(0,196,140,0.1)",
    bd: "rgba(0,196,140,0.25)",
    items: ["Atrial Fibrillation", "Tachycardia", "Bradycardia", "Sleep Apnea", "Autonomic Dysfunction", "HRV Disorders"],
  },
  {
    label: "Year 1-2",
    sub: "In validation, strong clinical evidence",
    color: tokens.accent,
    bg: "rgba(26,107,255,0.08)",
    bd: "rgba(26,107,255,0.2)",
    items: ["Heart Failure Decompensation", "Cuffless Blood Pressure", "Long QT Syndrome", "PVC Detection", "SVT / VT Classification", "Myocardial Ischemia", "CAD Risk Scoring", "Stroke Risk"],
  },
  {
    label: "Year 3+",
    sub: "Early research",
    color: tokens.orange,
    bg: "rgba(255,136,0,0.08)",
    bd: "rgba(255,136,0,0.2)",
    items: ["Cardiac Arrest Prediction", "Pulmonary Hypertension", "HF Fluid Overload", "Cardiomyopathy"],
  },
  {
    label: "Frontier",
    sub: "Requires novel biosensors",
    color: tokens.purple,
    bg: "rgba(124,58,237,0.07)",
    bd: "rgba(124,58,237,0.2)",
    items: ["Troponin-T (sweat)", "BNP (sweat)", "Valvular Disease", "Peripheral Artery Disease"],
  },
];

export const CELLULAR_SCENARIOS = [
  { num: "02", title: "False alarm?", body: "30-second confirmation window before escalating. One touch to dismiss. No panic." },
  { num: "03", title: "No cell coverage?", body: "Data queues locally and syncs when coverage returns. Not a single heartbeat is lost." },
  { num: "04", title: "Battery low?", body: "Emergency-only mode preserves help-calling capability down to 5% battery." },
  { num: "05", title: "Subscription lapsed?", body: "Emergency calls always work - regardless of subscription status. No exceptions." },
  { num: "06", title: "Traveling internationally?", body: "Built-in eSIM roaming keeps your heart guardian connected across supported markets." },
];

export const SCIENCE_STATS = [
  { num: "6.5", unit: "d", label: "Advance warning of heart failure hospitalization", src: "LINK-HF - Circulation: Heart Failure" },
  { num: "38", unit: "%", label: "Reduction in HF rehospitalization with wearable-guided therapy", src: "BMAD-TX - JACC 2024" },
  { num: "30", unit: "min", label: "AF onset prediction before transition from sinus rhythm", src: "WARN model - predictive arrhythmia research" },
];

export const VALIDATION_PRIMARY = [
  { num: "-0.31", unit: "%", label: "SpO2 mean bias vs reference oximetry", src: "Bland-Altman - N=175" },
  { num: "0.91", unit: "r", label: "Haemoglobin correlation vs venous CBC", src: "Laboratory reference analysis" },
  { num: "88.6", unit: "%", label: "Anaemia screening sensitivity", src: "AUC = 0.92" },
  { num: "0.98", unit: "r", label: "Heart rate correlation vs reference ECG", src: "Clinical comparator" },
];

export const VALIDATION_SECONDARY = [
  { num: "5", unit: "sensors", label: "Multi-wavelength PPG sensor array" },
  { num: "89", unit: "mW", label: "Total power draw - battery-free, USB-powered" },
  { num: "96.2", unit: "%", label: "Signal quality acceptance rate on first or second attempt" },
];

export const PRICING_PLANS = [
  {
    tier: "Essential",
    price: "9.99",
    tagline: "For individuals who want peace of mind.",
    features: ["LTE-M cellular connectivity", "Emergency auto-call (loved ones + EMS)", "Caregiver push alerts", "Weekly PDF health reports", "7-day data history", "OTA firmware updates"],
    featured: false,
    cta: "Select Essential",
    href: "#cta",
  },
  {
    tier: "Clinical",
    price: "19.99",
    tagline: "For patients, caregivers and remote monitoring.",
    features: ["Everything in Essential", "AI cardiac predictions (6.5-day HF warning)", "Doctor portal + FHIR export", "90-day data history", "Priority alert escalation", "Reimbursement-ready remote monitoring workflows"],
    featured: true,
    cta: "Select Clinical",
    href: "#cta",
  },
  {
    tier: "Hospital",
    price: null,
    tagline: "B2B - Provider-ready - EHR integrated.",
    features: ["Everything in Clinical", "EHR integration with major clinical systems", "Clinical dashboard + cohort view", "30-day readmission risk scoring", "Unlimited data retention", "Dedicated account team"],
    featured: false,
    cta: "Contact Sales",
    href: "mailto:sanjay@samawritten.com",
  },
];

export const MARKET_NUMBERS = [
  { val: "19.8", em: "M", label: "Annual cardiovascular deaths globally" },
  { val: "64", em: "M", label: "People living with heart failure worldwide" },
  { val: "20", em: "+", label: "Cardiac conditions monitored" },
  { val: "24", em: "/7", label: "Passive on-wrist monitoring" },
];

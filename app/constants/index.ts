// ── DESIGN TOKENS ────────────────────────────────────────────────
export const tokens = {
  white:    "#FFFFFF",
  offWhite: "#F7F7F5",
  surface:  "#F1F1EE",
  border:   "#E4E4E0",
  black:    "#000000",
  text:     "#0F0F0F",
  mid:      "#525250",
  dim:      "#9A9A93",
  accent:   "#1A6BFF",
  green:    "#00C48C",
  red:      "#FF3B3B",
  orange:   "#FF8800",
  purple:   "#7C3AED",
};

// ── GLOBAL CSS ────────────────────────────────────────────────────
export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;600;700&family=DM+Mono:wght@300;400&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { font-family:'Sora',sans-serif; background:#fff; color:#0F0F0F; overflow-x:hidden; }

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes blink {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.5; transform:scale(1.5); }
  }
  @keyframes sdot {
    0%   { top:5px;  opacity:1; }
    80%  { top:22px; opacity:0; }
    100% { top:5px;  opacity:0; }
  }
  @keyframes ecgLine {
    0%   { stroke-dashoffset: 600; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes pulse3 {
    0%,100% { transform:scale(1);   opacity:1; }
    50%      { transform:scale(1.08); opacity:0.85; }
  }

  .reveal {
    opacity:0;
    transform:translateY(24px);
    transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                transform 0.85s cubic-bezier(0.16,1,0.3,1);
  }
  .reveal.d1 { transition-delay:0.08s; }
  .reveal.d2 { transition-delay:0.16s; }
  .reveal.d3 { transition-delay:0.24s; }
  .reveal.d4 { transition-delay:0.32s; }
  .reveal.visible { opacity:1; transform:translateY(0); }
`;

// ── DATA CONSTANTS ────────────────────────────────────────────────


export const PROBLEM_STATS = [
  { num:"6.2",   unit:"M",   label:"Americans with heart failure" },
  { num:"$30.7", unit:"B",   label:"Annual treatment cost" },
  { num:"23",    unit:"%",   label:"Readmitted within 30 days" },
  { num:"8",     unit:"min", label:"Avg EMS response time" },
];

export const HOW_IT_WORKS_STEPS = [
  { num:"01 — Always sensing", title:"Five sensors, around the clock",
    body:"Five sensors sample your heart rhythm, blood oxygen, blood pressure, skin conductance, and movement — continuously, silently, around the clock. No button presses. No phone required." },
  { num:"02 — AI understands", title:"On-device machine learning",
    body:"On-device ML fuses all five signals to detect arrhythmias in real time, spot early signs of heart failure decompensation, and predict cardiac events up to 6.5 days before they happen." },
  { num:"03 — Gets you help", title:"Calls for help from your wrist",
    body:"When SamaWritten detects a crisis, it vibrates to confirm. No response in 30 seconds? It calls your emergency contacts and sends your GPS location + ECG data directly over cellular." },
];

export const LEFT_FEATURES = [
  { tag:"Display",  name:"Blood Pressure", desc:"PPG + BioZ fusion. <3.3 mmHg MAE. Continuous, cuffless. Clinically validated." },
  { tag:"Display",  name:"Heart Rate",     desc:"±1 BPM accuracy. Real-time tachycardia and bradycardia detection with instant alerts." },
];

export const RIGHT_FEATURES = [
  { tag:"Display",  name:"SpO₂ / RR",      desc:"Multi-wavelength PPG. Blood oxygen ±2%. Continuous respiratory rate estimation." },
  { tag:"Display",  name:"Emergency SOS",  desc:"30-second confirmation. Auto-calls loved ones + EMS with GPS + ECG over LTE." },
];

export const SENSORS = [
  { icon:"💚", name:"Multi-λ PPG",     spec:"530 / 660 / 940nm · 8ch",    detail:"HR ±1 BPM · SpO₂ ±2% · pulse wave velocity · BP estimation" },
  { icon:"⚡", name:"Single-Lead ECG", spec:"250Hz · Lead I equivalent",   detail:"95% AF sensitivity · QTc · PVC detection · 30-sec on-demand" },
  { icon:"🌊", name:"Bioimpedance",    spec:"50kHz · 120dB SNR · <1μA",    detail:"Body composition · fluid status · cuffless BP contribution" },
  { icon:"🧠", name:"EDA / GSR",       spec:"0.01μS res · tonic+phasic",   detail:"Autonomic dysfunction · stress index · +12% AI specificity" },
  { icon:"📡", name:"6-Axis IMU",      spec:"BMI270 · <0.4g fall thresh",  detail:"Fall detection · 4-stage sleep · activity · AF AUC +4.3%" },
  { icon:"🌡️", name:"NTC Thermistor",  spec:"±0.1°C · continuous",         detail:"Circadian rhythm · infection detection · microvascular tone" },
];

export const CONDITION_TIERS = [
  { label:"Launch",   sub:"Production-ready, FDA-precedented",        color:tokens.green,  bg:"rgba(0,196,140,0.1)",  bd:"rgba(0,196,140,0.25)",
    items:["Atrial Fibrillation","Tachycardia","Bradycardia","Sleep Apnea","Autonomic Dysfunction","HRV Disorders"] },
  { label:"Year 1–2", sub:"In validation, strong clinical evidence",  color:tokens.accent, bg:"rgba(26,107,255,0.08)",bd:"rgba(26,107,255,0.2)",
    items:["Heart Failure Decompensation","Cuffless Blood Pressure","Long QT Syndrome","PVC Detection","SVT / VT Classification","Myocardial Ischemia","CAD Risk Scoring","Stroke Risk"] },
  { label:"Year 3+",  sub:"Early research",                           color:tokens.orange, bg:"rgba(255,136,0,0.08)", bd:"rgba(255,136,0,0.2)",
    items:["Cardiac Arrest Prediction","Pulmonary Hypertension","HF Fluid Overload","Cardiomyopathy"] },
  { label:"Frontier", sub:"Requires novel biosensors",                color:tokens.purple, bg:"rgba(124,58,237,0.07)",bd:"rgba(124,58,237,0.2)",
    items:["Troponin-T (sweat)","BNP (sweat)","Valvular Disease","Peripheral Artery Disease"] },
];

export const CELLULAR_SCENARIOS = [
  { num:"02", title:"False alarm?",          body:"30-second confirmation window before escalating. One touch to dismiss. No panic." },
  { num:"03", title:"No cell coverage?",     body:"Data queues locally and syncs when coverage returns. Not a single heartbeat is lost." },
  { num:"04", title:"Battery low?",          body:"Emergency-only mode preserves help-calling capability down to 5% battery." },
  { num:"05", title:"Subscription lapsed?",  body:"Emergency calls always work — regardless of subscription status. No exceptions." },
  { num:"06", title:"Traveling abroad?",     body:"Built-in eSIM roams across 200+ countries. Your heart guardian travels with you." },
];

export const SCIENCE_STATS = [
  { num:"6.5", unit:"d",   label:"Advance warning of heart failure hospitalization",          src:"LINK-HF · Circulation: Heart Failure" },
  { num:"38",  unit:"%",   label:"Reduction in HF rehospitalization with wearable-guided therapy", src:"BMAD-TX · JACC 2024" },
  { num:"30",  unit:"min", label:"AF onset prediction before transition from sinus rhythm",    src:"WARN model · Univ. of Luxembourg" },
];

export const VALIDATION_PRIMARY = [
  { num:"−0.31", unit:"%",  label:"SpO₂ mean bias vs Masimo Radical-7",      src:"Bland–Altman · N=175" },
  { num:"0.91",  unit:"r",  label:"Haemoglobin correlation vs venous CBC",   src:"Sysmex XN-1000 reference" },
  { num:"88.6",  unit:"%",  label:"Anaemia screening sensitivity",           src:"AUC = 0.92" },
  { num:"0.98",  unit:"r",  label:"Heart rate correlation vs 12-lead ECG",   src:"Schiller AT-102 reference" },
];

export const VALIDATION_SECONDARY = [
  { num:"5",     unit:"sensors", label:"Multi-wavelength PPG sensor array" },
  { num:"89",    unit:"mW",   label:"Total power draw — battery-free, USB-powered" },
  { num:"96.2",  unit:"%",    label:"Signal quality acceptance rate on first/second attempt" },
];

export const PRICING_PLANS = [
  { tier:"Essential", price:"9.99",  tagline:"For individuals who want peace of mind.",
    features:["LTE-M cellular connectivity","Emergency auto-call (loved ones + EMS)","Caregiver push alerts","Weekly PDF health reports","7-day data history","OTA firmware updates"],
    featured:false, cta:"Select Essential", href:"#cta" },
  { tier:"Clinical",  price:"19.99", tagline:"For patients, caregivers and remote monitoring.",
    features:["Everything in Essential","AI cardiac predictions (6.5-day HF warning)","Doctor portal + FHIR export","90-day data history","Priority alert escalation","RPM-ready data (CMS reimbursable)"],
    featured:true,  cta:"Select Clinical",  href:"#cta" },
  { tier:"Hospital",  price:null,    tagline:"B2B · RPM reimbursable · EHR integrated.",
    features:["Everything in Clinical","EHR integration (Epic, Cerner)","Clinical dashboard + cohort view","30-day readmission risk scoring","Unlimited data retention","Dedicated account team"],
    featured:false, cta:"Contact Sales",    href:"mailto:sanjay@samawritten.com" },
];

export const MARKET_NUMBERS = [
  { val:"$30.7", em:"B",    label:"Annual HF treatment cost (US)" },
  { val:"6.2",   em:"M",    label:"Americans with heart failure" },
  { val:"23",    em:"%",    label:"30-day readmission rate" },
  { val:"CMS",   em:"RPM",  label:"Reimbursement-eligible clinical tool" },
];

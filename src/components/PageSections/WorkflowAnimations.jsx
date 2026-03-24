import { useEffect, useRef, useState } from "react";

const STEP_ICONS = {
  data: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  meetings: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  transcription: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
  summary: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  docs: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>,
  tasks: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  email: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  growth: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
};

const STEPS = [
  { key: "data", label: "Own Your Data", detail: "Deploy on your own storage - S3, Azure, or self-hosted. You control every byte.", color: "#f97316", bgColor: "bg-orange-50", borderColor: "border-orange-200", textColor: "text-orange-600", ringColor: "ring-orange-200" },
  { key: "meetings", label: "Meetings", detail: "Run meetings with integrated scheduling, booking links, and calendar sync.", color: "#3b82f6", bgColor: "bg-blue-50", borderColor: "border-blue-200", textColor: "text-blue-600", ringColor: "ring-blue-200" },
  { key: "transcription", label: "Transcriptions", detail: "Every meeting automatically transcribed - searchable and stored in your storage.", color: "#8b5cf6", bgColor: "bg-violet-50", borderColor: "border-violet-200", textColor: "text-violet-600", ringColor: "ring-violet-200" },
  { key: "summary", label: "Summaries", detail: "AI generates concise summaries with key decisions and action items highlighted.", color: "#06b6d4", bgColor: "bg-cyan-50", borderColor: "border-cyan-200", textColor: "text-cyan-600", ringColor: "ring-cyan-200" },
  { key: "docs", label: "Documents", detail: "Meeting notes flow into shared docs - proposals, reports, and briefs auto-created.", color: "#10b981", bgColor: "bg-emerald-50", borderColor: "border-emerald-200", textColor: "text-emerald-600", ringColor: "ring-emerald-200" },
  { key: "tasks", label: "Tasks", detail: "Action items become trackable tasks - assigned, deadlined, and followed up.", color: "#ec4899", bgColor: "bg-pink-50", borderColor: "border-pink-200", textColor: "text-pink-600", ringColor: "ring-pink-200" },
  { key: "email", label: "Emails", detail: "Follow-ups, updates, and client comms sent automatically from your own domain.", color: "#f59e0b", bgColor: "bg-amber-50", borderColor: "border-amber-200", textColor: "text-amber-600", ringColor: "ring-amber-200" },
  { key: "growth", label: "Business Growth", detail: "Smoother workflows, faster follow-ups, happier clients. Your infrastructure, your advantage.", color: "#22c55e", bgColor: "bg-green-50", borderColor: "border-green-200", textColor: "text-green-600", ringColor: "ring-green-200" },
];

const STEP_MAP = STEPS.reduce((acc, step) => ({ ...acc, [step.key]: step }), {});
const BRANCH_KEYS = ["docs", "tasks", "email"];
const WORKFLOW_LANES = [
  { key: "documentation", label: "Documentation Lane", color: "#10b981", steps: ["data", "meetings", "transcription", "summary", "docs", "growth"] },
  { key: "execution", label: "Execution Lane", color: "#ec4899", steps: ["data", "meetings", "transcription", "summary", "tasks", "growth"] },
  { key: "communication", label: "Communication Lane", color: "#f59e0b", steps: ["data", "meetings", "transcription", "summary", "email", "growth"] },
];

function StageConnector({ active }) {
  return (
    <div className="hidden xl:flex items-center justify-center w-12 shrink-0">
      <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
        <path d="M2 6h30m0 0l-4-4m4 4l-4 4" stroke={active ? "#f97316" : "#d1d5db"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.35s ease" }} />
      </svg>
    </div>
  );
}

function StepCard({ step, isActive, isDone, onClick, showIndex, indexLabel }) {
  return (
    <button onClick={onClick} className={`relative flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer w-full min-w-[170px] max-w-[220px] min-h-[148px] shrink-0 ${isActive ? `${step.bgColor} ${step.borderColor} shadow-md ring-4 ${step.ringColor} scale-105` : isDone ? `bg-white ${step.borderColor} border-opacity-60 shadow-sm` : "bg-gray-50 border-gray-200"}`}>
      {showIndex ? <div className={`absolute top-2 right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-all duration-400 ${isDone ? "bg-green-500 text-white" : isActive ? `bg-white border-2 ${step.borderColor} ${step.textColor}` : "bg-gray-200 text-gray-500"}`}>{isDone ? "?" : indexLabel}</div> : null}
      <div className={`mb-2 transition-colors duration-400 ${isActive ? step.textColor : isDone ? `${step.textColor} opacity-70` : "text-gray-400"}`}>{STEP_ICONS[step.key]}</div>
      <span className={`text-xs font-semibold leading-tight transition-colors duration-400 ${isActive ? step.textColor : isDone ? "text-gray-700" : "text-gray-400"}`}>{step.label}</span>
    </button>
  );
}

function DetailPanel({ step, lane, stepPosition }) {
  return (
    <div className={`rounded-2xl border-2 ${step.borderColor} ${step.bgColor} p-8 md:p-10 transition-all duration-500`}>
      <div className="flex items-start gap-5">
        <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${step.textColor} bg-white shadow-sm border ${step.borderColor}`}>{STEP_ICONS[step.key]}</div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-xl md:text-2xl font-bold ${step.textColor} mb-2`}>{step.label}</h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{step.detail}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Workflow progress</span>
        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${((stepPosition + 1) / lane.steps.length) * 100}%`, backgroundColor: step.color }} />
        </div>
        <span className="text-xs font-semibold" style={{ color: step.color }}>{stepPosition + 1}/{lane.steps.length}</span>
      </div>
    </div>
  );
}

export default function WorkflowAnimations() {
  const [activeLane, setActiveLane] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(intervalRef.current);
      return () => {};
    }
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveStep((currentStep) => {
        const laneLength = WORKFLOW_LANES[activeLane].steps.length;
        if (currentStep >= laneLength - 1) {
          setActiveLane((lane) => (lane + 1) % WORKFLOW_LANES.length);
          return 0;
        }
        return currentStep + 1;
      });
    }, 2200);
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, activeLane]);

  const handleSelect = (laneIndex, stepIndex) => {
    setActiveLane(laneIndex);
    setActiveStep(stepIndex);
    setIsPlaying(false);
    clearInterval(intervalRef.current);
  };

  const currentLane = WORKFLOW_LANES[activeLane];
  const currentStepKey = currentLane.steps[activeStep];
  const currentStep = STEP_MAP[currentStepKey];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-5 text-sm font-semibold text-orange-700">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            Own your data - get smoother workflows
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">See how your business runs better<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">on infrastructure you own</span></h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">From meetings to follow-ups, every step stays on your storage, under your control, growing your business.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {WORKFLOW_LANES.map((lane, laneIndex) => (
            <button key={lane.key} onClick={() => handleSelect(laneIndex, 0)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${activeLane === laneIndex ? "text-white border-transparent shadow-sm" : "text-gray-600 border-gray-200 bg-white hover:border-gray-300"}`} style={activeLane === laneIndex ? { backgroundColor: lane.color } : undefined}>
              {lane.label}
            </button>
          ))}
        </div>

        <div className="mb-10 overflow-x-auto pb-3">
          <div className="min-w-[1160px] xl:min-w-0 flex items-center justify-center">
            <StepCard step={STEP_MAP.data} isActive={currentStepKey === "data"} isDone={currentLane.steps.indexOf("data") < activeStep} onClick={() => handleSelect(activeLane, currentLane.steps.indexOf("data"))} showIndex indexLabel={1} />
            <StageConnector active={activeStep > 0} />
            <StepCard step={STEP_MAP.meetings} isActive={currentStepKey === "meetings"} isDone={currentLane.steps.indexOf("meetings") < activeStep} onClick={() => handleSelect(activeLane, currentLane.steps.indexOf("meetings"))} showIndex indexLabel={2} />
            <StageConnector active={activeStep > 1} />
            <StepCard step={STEP_MAP.transcription} isActive={currentStepKey === "transcription"} isDone={currentLane.steps.indexOf("transcription") < activeStep} onClick={() => handleSelect(activeLane, currentLane.steps.indexOf("transcription"))} showIndex indexLabel={3} />
            <StageConnector active={activeStep > 2} />
            <StepCard step={STEP_MAP.summary} isActive={currentStepKey === "summary"} isDone={currentLane.steps.indexOf("summary") < activeStep} onClick={() => handleSelect(activeLane, currentLane.steps.indexOf("summary"))} showIndex indexLabel={4} />
            <StageConnector active={activeStep > 3} />
            <div className="flex flex-col gap-3 mr-6">
              {BRANCH_KEYS.map((key, idx) => {
                const stepIndex = currentLane.steps.indexOf(key);
                const isInLane = stepIndex !== -1;
                return <StepCard key={key} step={STEP_MAP[key]} isActive={currentStepKey === key} isDone={isInLane && stepIndex < activeStep} onClick={() => isInLane && handleSelect(activeLane, stepIndex)} showIndex={isInLane} indexLabel={idx + 5} />;
              })}
            </div>
            <StageConnector active={activeStep > 4} />
            <StepCard step={STEP_MAP.growth} isActive={currentStepKey === "growth"} isDone={currentLane.steps.indexOf("growth") < activeStep} onClick={() => handleSelect(activeLane, currentLane.steps.indexOf("growth"))} showIndex indexLabel={6} />
          </div>
        </div>

        <DetailPanel step={currentStep} lane={currentLane} stepPosition={activeStep} />

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <button onClick={() => setIsPlaying((p) => !p)} className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors">
            <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-[10px]">{isPlaying ? "||" : ">"}</span>
            <span>{isPlaying ? "Pause" : "Play"} auto-advance</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span>Active lane: <strong className="text-gray-700">{currentLane.label}</strong> - every step runs on your storage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react'
import Pulse from './ui/Pulse'

export default function WakaTimePopup() {
  const [hostname, setHostname] = useState('Browser Google IDE')
  const [apiKey, setApiKey] = useState('')
  const [msg, setMsg] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleSave = () => {
    if (!apiKey) {
      setMsg('Please enter an API key.')
      return
    }
    setIsActive(true)
    setMsg('API key saved!')
  }

  return (
    <div className="island-shell feature-card rise-in rounded-2xl p-6 w-[500px] font-sans p-4 bg-[var(--bg-base)] !opacity-85 select-none cursor-default pointer-events-none z-25 shadow-lg border border-[var(--sea-ink-soft)]">
      <div className="flex justify-center mb-3">
        <img src="/WakatimeIcon.svg" alt="WakaTime Logo" className="w-8 h-8" />
      </div>

      <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--sea-ink)] mb-3">
        <Pulse />
        WakaTime Google App Script
      </h3>

      <label className="text-xs text-[var(--sea-ink)] mb-1 block">
        Machine Name <i className="text-[var(--sea-ink-soft)]">optional</i>
      </label>
      <input
        className="w-full px-2 py-1.5 mb-3 text-xs border border-[var(--chip-line)] rounded bg-[var(--foam)] text-[var(--sea-ink)] placeholder:text-[var(--sand)] outline-none focus:ring-[3px] focus:ring-[var(--lagoon)]/50 focus:border-[var(--lagoon)] transition-all"
        type="text"
        placeholder="Name to identify this machine"
        value={hostname}
        onChange={(e) => setHostname(e.target.value)}
      />

      <label className="text-xs text-[var(--sea-ink)] mb-1 block">
        Wakatime API Key
      </label>
      <input
        className="w-full px-2 py-1.5 mb-3 text-xs border border-[var(--chip-line)] rounded bg-[var(--foam)] text-[var(--sea-ink)] placeholder:text-[var(--sand)] outline-none focus:ring-[3px] focus:ring-[var(--lagoon)]/50 focus:border-[var(--lagoon)] transition-all"
        type="password"
        placeholder="Paste your API Key here..."
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="w-full bg-[var(--sea-ink)] hover:bg-[var(--sea-ink-soft)] text-[var(--foam)] text-sm font-bold py-2 rounded cursor-pointer transition-all"
      >
        Save API key
      </button>

      <p className="text-[11px] text-center mt-2 text-green-500 min-h-[15px]">
        {msg}
      </p>
    </div>
  )
}

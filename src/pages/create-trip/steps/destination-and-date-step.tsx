import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  openGuestsInput: () => void
  closeGuestsInput: () => void

}

export function DestinationAndDateStep({ isGuestsInputOpen, openGuestsInput, closeGuestsInput }: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" disabled={isGuestsInputOpen}/>
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" disabled={isGuestsInputOpen}/>
      </div>

      <div className="w-px h-6 bg-zinc-700"></div>

      {isGuestsInputOpen ? (
        <button className="bg-zinc-800 rounded-lg py-2 px-5 flex gap-2 font-semibold text-zinc-200 items-center hover:bg-zinc-700 transition" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5 text-zinc-200" />
        </button>
      ) : (
        <button className="bg-lime-300 rounded-lg py-2 px-5 flex gap-2 font-semibold text-lime-950 items-center hover:bg-lime-400 transition" onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </button>
      )}
    </div>
  )
}
import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva do Airbnb
            </span>
            <a href="#" className="block text-xs font-medium text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva do Airbnb
            </span>
            <a href="#" className="block text-xs font-medium text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>
      </div>
      
      <button className="bg-zinc-800 rounded-lg h-11 px-5 flex gap-2 font-semibold text-zinc-200 items-center hover:bg-zinc-700 transition w-full justify-center">
        <Plus className="size-5 text-zinc-200" />
        Cadastrar novo link
      </button>
    </div>
  )
}
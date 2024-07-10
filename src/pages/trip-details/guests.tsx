import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Bruna Porato
            </span>
            <span className="block text-sm font-medium text-zinc-400 truncate">
              brunaporato@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block text-sm font-medium text-zinc-400 truncate">
              lacy.stiedemann@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
      </div>
      
      <button className="bg-zinc-800 rounded-lg h-11 px-5 flex gap-2 font-semibold text-zinc-200 items-center hover:bg-zinc-700 transition w-full justify-center">
        <UserCog className="size-5 text-zinc-200" />
        Gerenciar convidados
      </button>
    </div>
  )
}
import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  openGuestsModal: () => void
  openConfirmTripModal: () => void
}

export function InviteGuestsStep({ emailsToInvite, openGuestsModal, openConfirmTripModal }: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button type="button" className="flex items-center gap-2 flex-1 text-left" onClick={openGuestsModal}>
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-lg flex-1 text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-lg flex-1 text-zinc-400">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <button
        className="bg-lime-300 rounded-lg py-2 px-5 flex gap-2 font-semibold text-lime-950 items-center hover:bg-lime-400 transition" onClick={openConfirmTripModal}
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-lime-950" />
      </button>
    </div>
  )
}
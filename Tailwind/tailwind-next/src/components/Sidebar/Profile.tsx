import { LogOut } from "lucide-react"

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 ">
      <img
        src="https://github.com/savionascimentodev.png"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Savio Nascimento
        </span>
        <span className="truncate text-sm text-zinc-500">
          savionascimentodev@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto p-2 hover:bg-zinc-200 rounded-md"
      >
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}

import { cn } from "@/utils/helpers"

// Checkbox Skeleton
export const CheckboxSkeleton = () => (
  <div className="flex flex-col sm:max-w-[300px] animate-pulse">
    {/* TODO: Add animated loading text... */}
    <div className="pl-2 text-sm font-bold leading-7">Demeanour 0 / 3</div>
    <div
      className={cn(
        "grid grid-cols-2 gap-2 h-full max-h-[112px] p-2 rounded-md",
        "bg-gradient-to-r from-neutral-500 to-neutral-600 md:max-h-none"
      )}
    >
      <div className="rounded-md h-[23px] md:h-[27px] bg-neutral-400/60 "></div>
      <div className="rounded-md h-[23px] md:h-[27px] bg-neutral-400/60 "></div>
      <div className="rounded-md h-[23px] md:h-[27px] bg-neutral-400/60 "></div>
      <div className="rounded-md h-[23px] md:h-[27px] bg-neutral-400/60 "></div>
      <div className="rounded-md h-[23px] md:h-[27px] bg-neutral-400/60 "></div>
      <div className="rounded-md h-[23px] md:h-[27px] bg-neutral-400/60 "></div>
    </div>
  </div>
)

// Stats Skeleton
const StatLabel = ({ label }: { label: string }) => (
  <div className="flex items-center p-2 pr-3 transition-colors rounded-lg select-none justify-self-start">
    <div className="bg-transparent border rounded-full w-7 h-7 border-neutral-300"></div>
    <span className="relative pl-2 text-sm font-semibold tracking-tight capitalize">
      {label}
      <span className="absolute -right-2 font-bold text-[10px] -top-[15px]">
        ...
      </span>
    </span>
  </div>
)

export const StatsSkeleton = () => (
  <div
    className={cn(
      "bg-gradient-to-r from-neutral-500 to-neutral-600 rounded-lg border shadow-sm",
      "overflow-hidden min-w-[300px] animate-pulse"
    )}
  >
    <div className="p-2 px-4">
      <p className="text-lg font-bold">Stats</p>
      <p className="text-xs text-neutral-300">
        Add +1 to <span className="underline">one</span> stat
      </p>
    </div>

    <div
      className={cn(
        "grid grid-cols-2 p-4 border-t bg-gradient-to-r from-neutral-400/80",
        "to-neutral-500 border-t-neutral-600 gap-x-6 gap-y-1"
      )}
    >
      <StatLabel label="Creativity" />
      <StatLabel label="Harmony" />
      <StatLabel label="Focus" />
      <StatLabel label="Passion" />
    </div>
  </div>
)

// Balance Skeleton
export const BalanceSkeleton = () => (
  <div className="overflow-hidden border rounded-lg h-fit animate-pulse bg-gradient-to-r from-neutral-500 to-neutral-600">
    <div className="flex justify-between px-4 py-2">
      <div>
        <h1 className="text-lg font-bold">Balance</h1>
        <p className="text-xs text-neutral-300">Shift Once (Optional)</p>
      </div>
      <div className="pt-1 my-auto text-sm capitalize text-neutral-300">
        Neutral
      </div>
    </div>

    <div className="px-4 py-4 border-t bg-gradient-to-r from-neutral-400/80 to-neutral-500 border-neutral-600">
      <div className="flex flex-col">
        <div className="flex justify-between pb-3">
          <span className="text-xs font-bold">...</span>
          <span className="text-xs font-bold">...</span>
        </div>
        <div className="relative w-full h-2 rounded-full bg-neutral-300">
          <div
            className={cn(
              "absolute bottom-0 left-1/2 w-5 h-5 bg-neutral-400 border-2 border-neutral-300",
              "translate-y-[6px] -translate-x-1/2 rounded-full"
            )}
          />
        </div>
      </div>
    </div>
  </div>
)

// Connections Skeleton
export const ConnectionsSkeleton = () => (
  <div className="overflow-hidden border rounded-lg shadow-sm md:col-span-2 animate-pulse ">
    <div className="px-4 py-2 bg-gradient-to-r from-neutral-500 to-neutral-600">
      <p className="text-lg font-bold">Connections</p>
      <p className="text-xs">
        Who do you, or don&apos;t you, have a connection with?
      </p>
    </div>

    <div className="flex flex-col gap-4 p-[16px] border-t bg-neutral-400 border-neutral-600">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="rounded-md h-[20px] md:h-[24px] bg-neutral-300/60 w-[150px]"></div>
          <div className="rounded-md h-[20px] md:h-[24px] bg-neutral-300/60 flex-1"></div>
        </div>
        <div className="md:hidden rounded-md h-[20px] md:h-[24px] bg-neutral-300/60 max-w-full w-1/3"></div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="rounded-md h-[20px] md:h-[24px] bg-neutral-300/60 w-[150px]"></div>
          <div className="rounded-md h-[20px] md:h-[24px] bg-neutral-300/60 flex-1"></div>
        </div>
        <div className="md:hidden rounded-md h-[20px] md:h-[24px] bg-neutral-300/60 max-w-full w-3/4"></div>
      </div>
    </div>
  </div>
)

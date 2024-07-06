import {
  BurningPassion,
  Dodging,
  EyeTarget,
  LightBulb,
  ShieldReflect,
  SwordClash,
  WingedEmblem,
} from "@/assets/svgs/game-icons"
import { Stance } from "@/types/api"
import {
  ADVANCE_AND_ATTACK,
  DEFEND_AND_MANEUVER,
  EVADE_AND_OBSERVE,
} from "./constants"

const SVG_SIZES = {
  sm: "[&_svg]:size-4",
  md: "[&_svg]:size-6",
  lg: "[&_svg]:size-8",
}

// ---- Stance & Stat Icon Mappings ---- //
export const STANCE_ICONS = {
  [ADVANCE_AND_ATTACK]: <SwordClash className={SVG_SIZES["sm"]} />,
  [DEFEND_AND_MANEUVER]: <ShieldReflect className={SVG_SIZES["sm"]} />,
  [EVADE_AND_OBSERVE]: <Dodging className={SVG_SIZES["sm"]} />,
}

export const STAT_ICONS = {
  [ADVANCE_AND_ATTACK]: [
    <BurningPassion key="passion" className={SVG_SIZES["sm"]} />,
  ],
  [DEFEND_AND_MANEUVER]: [
    <EyeTarget key="focus" className={SVG_SIZES["sm"]} />,
  ],
  [EVADE_AND_OBSERVE]: [
    <LightBulb key="creativity" className={SVG_SIZES["sm"]} />,
    <WingedEmblem key="harmony" className={SVG_SIZES["sm"]} />,
  ],
}

// ---- Styled Stance Badge ---- //
// eslint-disable-next-line no-unused-vars
type BadgeStyles = { [k in Stance]: string }

const BADGE_STYLES = {
  [ADVANCE_AND_ATTACK]: "[&_path]:fill-red-400",
  [DEFEND_AND_MANEUVER]: "[&_path]:fill-amber-400",
  [EVADE_AND_OBSERVE]: "[&_path]:fill-neutral-200",
} satisfies BadgeStyles

export const ColoredStanceIcon = ({
  stance,
  size = "sm",
}: {
  stance: Stance
  size?: "sm" | "md" | "lg"
}) => (
  <div className={`${SVG_SIZES[size]} ${BADGE_STYLES[stance]}`}>
    {STANCE_ICONS[stance]}
  </div>
)

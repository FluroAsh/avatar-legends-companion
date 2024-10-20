import { cn } from "@/utils/helpers"

// Courtesy of https://game-icons.net

const defaultStyles = "size-8 fill-white"

export const LightBulb = ({
  className,
  ...props
}: { className?: string } & React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    className={cn(defaultStyles, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <g>
      <path
        d="M247 18.656c-80.965 0-146.875 65.02-146.875 145.625 0 45.63 15.758 67 33.313 94.845 11.706 18.57 23.767 39.91 30.53 70.563h165.095c6.728-31.387 18.91-53.12 30.718-71.875 17.58-27.92 33.314-48.912 33.314-93.532 0-80.66-65.127-145.624-146.094-145.624zm-99.78 127.906L170.437 167 210 201.813l31.188-34.125 6.78-7.438 6.907 7.344 30.75 32.72 39.97-33.47 22.686-19-7.655 28.594L304.75 310.28l-18.063-4.842 28.22-105.25-24.032 20.125-6.78 5.656-6.033-6.44-29.906-31.78-30.562 33.438-6.188 6.78-6.875-6.062-23.25-20.437 27.94 104.218-18.064 4.812-35.937-134.063-8-29.875zm22.593 201.813V389.5L315 348.375H169.812zm153.593 17.063l-153.594 43.53v29.438l153.594-43.5v-29.47zm0 48.875L203.97 448.156h119.436v-33.844zm-132.562 52.53v20.533h113.282v-20.53h-113.28z"
        fill-opacity="1"
      />
    </g>
  </svg>
)

export const WingedEmblem = ({
  className,
  ...props
}: { className?: string } & React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    className={cn(defaultStyles, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <g>
      <path
        d="M36.844 26.188c-7.642 55.355 77.047 132.044 145.125 170C135.185 183.3 67.505 158.733 20.155 128.78c10.17 48.74 83.738 82.165 152.03 107.376-56.094-.93-104.776-7.642-162.25-25.53 20.11 39.824 95.964 59.89 162.533 67.468-40.172 8.212-83.4 8.65-127.19 3.062 27.2 25.9 75.004 35.054 124.876 31.125 15.11-1.19 25.764 11.643 33.063 28.97-16.1 14.04-26.314 34.665-26.314 57.625 0 42.143 34.357 76.5 76.5 76.5s76.5-34.357 76.5-76.5c0-21.61-9.045-41.16-23.53-55.094 7.313-18.595 18.25-32.747 34.093-31.5 49.87 3.93 97.708-5.225 124.905-31.124-43.79 5.588-87.016 5.15-127.188-3.062 66.57-7.578 142.425-27.644 162.532-67.47-57.474 17.89-106.156 24.603-162.25 25.532C406.76 210.946 480.33 177.52 490.5 128.78c-47.35 29.953-115.03 54.522-161.813 67.407 68.078-37.955 152.767-114.644 145.125-170C416.836 88.028 362.51 139.09 291.22 166.5c-25.236 9.703-24.56 30.48-8.25 50.156 20.692 24.965 17.825 67.663-8.658 108.625-6.647-1.893-13.664-2.905-20.906-2.905-6.053 0-11.94.724-17.594 2.063-25.986-40.708-28.71-82.986-8.156-107.782 16.308-19.675 17.017-40.453-8.22-50.156C148.15 139.09 93.823 88.028 36.845 26.187zm211.78 315.093l-13.155 40.845-39.69 12.125c2.214-28.29 24.578-50.68 52.845-52.97zm10.126.033c27.825 2.52 49.785 24.555 52.22 52.406L270.81 380.81l-12.062-39.5zm52.22 62.937c-2.517 27.602-24.238 49.42-51.783 52.125l12.938-40.25 38.844-11.875zm-115.095.03l40.906 13.158 11.97 39.03c-28.064-2.21-50.31-24.227-52.875-52.187z"
        fill-opacity="1"
      />
    </g>
  </svg>
)

export const EyeTarget = ({
  className,
  ...props
}: { className?: string } & React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    className={cn(defaultStyles, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <g>
      <path
        d="M256 105c-60.25 0-124.749 38.39-167.945 77.66-34.931 31.756-58.722 62.36-66.88 73.34 8.158 10.98 31.949 41.584 66.88 73.34C131.25 368.61 195.75 407 256 407s124.749-38.39 167.945-77.66c34.931-31.756 58.722-62.36 66.88-73.34-8.158-10.98-31.949-41.584-66.88-73.34C380.75 143.39 316.25 105 256 105zm0 23a128 128 0 0 1 63.486 16.969A48 48 0 0 0 288 190a48 48 0 0 0 .023.453A72.362 72.362 0 0 0 265 183.576V160h-18v23.576c-33.034 4.095-59.33 30.39-63.424 63.424H160v18h23.576c4.095 33.034 30.39 59.33 63.424 63.424V352h18v-23.576c33.034-4.095 59.33-30.39 63.424-63.424H352v-18h-23.576a72.33 72.33 0 0 0-1.98-10.014A48 48 0 0 0 336 238a48 48 0 0 0 41.023-23.195A128 128 0 0 1 384 256a128 128 0 0 1-128 128 128 128 0 0 1-128-128 128 128 0 0 1 128-128zm-9 73.738V224h18v-22.262c23.237 3.792 41.47 22.025 45.262 45.262H288v18h22.262c-3.792 23.237-22.025 41.47-45.262 45.262V288h-18v22.262c-23.237-3.792-41.47-22.025-45.262-45.262H224v-18h-22.262c3.792-23.237 22.025-41.47 45.262-45.262z"
        fill-opacity="1"
      />
    </g>
  </svg>
)

export const BurningPassion = ({
  className,
  ...props
}: { className?: string } & React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    className={cn(defaultStyles, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <g>
      <path
        d="M19.844 18.75v2.72c64.27 50.956 95.31 115.847 89.437 179.25-10.604-55.003-41.756-104.8-89.436-138.907v23.53c55.244 45.177 82.41 114.314 72.97 185.25-.398 2.332-.76 4.664-1.064 7-.085.513-.16 1.02-.25 1.532h.063c-6.553 53.797 11.2 108.566 49.593 156.03 6.405 11.073 13.982 21.804 22.688 32.126C95.248 406.656 59.077 335.534 53.22 262.407c-11.112 83.002 15.11 163.21 90.686 230.22H188.5c.033.028.06.063.094.093h130.47c.032-.03.06-.065.092-.095h43.625c75.578-67.008 101.8-147.217 90.69-230.22-5.75 71.774-40.697 141.62-106.845 201.5 9.558-11.752 17.677-24.018 24.28-36.686 34.1-45.58 49.597-97.276 43.408-148.095-.004-.02.003-.042 0-.063-.405-3.31-.91-6.606-1.5-9.906-9.365-74.246 21.308-146.348 82.312-190.875V55.626c-52.75 34.073-87.21 86.497-98.53 144.844-5.85-64.208 26.103-129.92 92.124-181.126l-.47-.594h-28.063c-72.054 64.343-99.845 149.67-72.5 228.063 2.893 8.292 5.105 16.676 6.657 25.093.005.043.026.083.03.125.44 3.435.933 6.876 1.532 10.314h.03c2.304 19.373 1.12 38.894-3.405 58.156-.044-28.376-6.778-57.15-20.436-85.063-40.06-81.862-20.768-171.425 52.406-236.687h-31.03c-50.145 46.623-66.324 91.56-57.44 151.094-21.488-59.165-19.415-103.58 20.69-151.094H152c40.104 47.514 42.177 91.93 20.688 151.094 8.885-59.535-7.266-104.47-57.407-151.094H83.157c73.174 65.262 92.465 154.825 52.406 236.688-14.898 30.448-21.52 61.915-20.25 92.78-6.146-21.747-8.016-43.91-5.406-65.874.6-3.436 1.123-6.88 1.563-10.313 1.552-8.458 3.78-16.884 6.686-25.217 27.346-78.394-.446-163.72-72.5-228.063H19.844zm234.25 19.688c16.4 0 27.024 6.18 34.72 16.593 7.693 10.413 11.967 25.726 11.967 43 0 18.664-6.886 38.56-15.967 49.5l-10.125 12.22 15.593 2.938c12.522 2.353 21.72 8.774 29.44 19 7.718 10.225 13.572 24.36 17.686 40.687 7.522 29.843 9.135 66.52 9.375 99.344h-23.31l-.814-70.5-18.687.218.967 86.437-7.75 111.625c47.057-43.67 71.99-94.302 76.157-146.313 8.212 61.338-11.15 120.606-67 170.125H295.53v.22h-32.937V333.81h-18.687v139.72H212.624v-.22h-9.655c-55.852-49.52-75.244-108.787-67.032-170.125 4.13 51.56 28.66 101.776 74.937 145.188L203.78 345.72l2.595-94.126-18.688-.53-1.937 70.655h-24.375c.24-32.826 1.885-69.502 9.406-99.345 4.116-16.326 9.97-30.462 17.69-40.688 7.718-10.225 16.915-16.646 29.436-19l15.594-2.937-10.125-12.22c-9.083-10.94-15.97-30.835-15.97-49.5 0-17.274 4.276-32.587 11.97-43 7.694-10.41 18.32-16.593 34.72-16.593z"
        fill-opacity="1"
      />
    </g>
  </svg>
)

// ---- Stance SVG's ---- //
export const SwordClash = ({
  className,
  ...props
}: { className?: string } & React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    className={cn(defaultStyles, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <g>
      <path
        d="M311.313 25.625l-23 10.656-29.532 123.032 60.814-111.968-8.28-21.72zM59.625 50.03c11.448 76.937 48.43 141.423 100.188 195.75 14.133-9.564 28.405-19.384 42.718-29.405-22.156-27.314-37.85-56.204-43.593-86.28-34.214-26.492-67.613-53.376-99.312-80.064zm390.47.032C419.178 76.1 386.64 102.33 353.31 128.22c-10.333 58.234-58.087 112.074-118.218 158.624-65.433 50.654-146.56 92.934-215.28 121.406l-.002 32.78c93.65-34.132 195.55-81.378 276.875-146.592C375.72 231.06 435.014 151.375 450.095 50.063zm-236.158 9.344l-8.5 27.813 40.688 73.06-6.875-85.31-25.313-15.564zm114.688 87.813C223.39 227.47 112.257 302.862 19.812 355.905V388c65.917-27.914 142.58-68.51 203.844-115.938 49.83-38.574 88.822-81.513 104.97-124.843zm-144.563 2.155c7.35 18.89 19.03 37.68 34 56.063 7.03-4.98 14.056-10.03 21.094-15.094-18.444-13.456-36.863-27.12-55.094-40.97zM352.656 269.72c-9.573 9.472-19.58 18.588-29.906 27.405 54.914 37.294 117.228 69.156 171.906 92.156V358.19c-43.86-24.988-92.103-55.13-142-88.47zm-44.906 39.81c-11.65 9.32-23.696 18.253-36.03 26.845C342.046 381.51 421.05 416.15 494.655 442.75v-33.22c-58.858-24.223-127.1-58.727-186.906-100zm-58.625 52.033l-46.188 78.25 7.813 23.593 27.75-11.344 10.625-90.5zm15.844.812L316.343 467l36.47 10.28-3.533-31.967-84.31-82.938z"
        fill-opacity="1"
      />
    </g>
  </svg>
)

export const ShieldReflect = ({
  className,
  ...props
}: { className?: string } & React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    className={cn(defaultStyles, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <g>
      <path
        d="M19.36 19.457l-.38 27.84 267.127 154.75-58.703 19.916 57.602 19.36L142.12 383.546l-19.214-19.213-51.47 114.324 123.125-43.482-17.492-18.95 151.868-151.87 12.433 43.078 22.976-68.5 56.675-16.565-57.475-15.492-22.934-79.828-14.145 48.266-268.65-155.41-38.454-.446zM370.614 81.94c-4.53.02-9.035.12-13.51.302-3.275.134-6.528.32-9.76.547l31.25 108.786 104.05 28.045c6.204-39.085 8.902-80.275 9.18-120.075C456.37 88.82 415.098 82.257 375.15 81.95c-1.514-.012-3.027-.015-4.537-.01zm-36.87 2.1c-31.99 3.653-61.013 12.153-83.014 25.87l64.493 37.31 18.52-63.18zm148.18 139.997L378.958 254.13l-38.93 116.054-20.268-70.225-39.07 39.067c18.814 35.364 46.1 62.287 86.175 77.604 47.473-17.834 78.566-62.795 98.014-121.6 7.323-22.14 12.905-46.11 17.042-70.993z"
        fill-opacity="1"
      />
    </g>
  </svg>
)

export const Dodging = ({
  className,
  ...props
}: { className?: string } & React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    className={cn(defaultStyles, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <g>
      <path
        d="M396.082 17.326c-.166-.025-1.922.108-4.977.108-21.975 0-42.158 18.904-49.437 46.595l75.713 12.61-78.526 13.085c.564 16.248 5.55 30.99 13.062 42.367l54.39 9.603-41.277 7.29.484.607-15.91 2.47c-15.262 2.366-25.866 9.63-34.46 21.165-2.534 3.4-4.848 7.198-6.962 11.328l90.798 13.2-100.976 14.684c-.576 2.25-1.118 4.542-1.627 6.874-1.662 7.613-2.953 15.622-3.982 23.854l115.275 14.107-117.81 14.418c-.525 9.083-.84 18.236-1.022 27.31l114.07 16.407-113.304 16.3h40.826l2.144 32.532 82.026 11.38-80.54 11.173 2.512 38.14 75.582 10.897-74.158 10.69 2.938 44.59h96.306l11.875-159.403h43.983c-.228-36.033-1.914-77.32-10.137-111.194-4.462-18.384-10.84-34.42-19.314-46.063-8.472-11.642-18.583-18.958-32.248-21.53l-15.59-2.933 10.124-12.213c10.435-12.587 17.49-30.688 17.49-51.127 0-37.056-22.084-66.04-47.127-69.295l-.106-.013-.108-.016zm-53.535 5.055L16.785 45.968l304.93 22.082c3.073-17.672 10.43-33.57 20.832-45.67zm-22.402 62.114L16.783 106.46l312.28 22.612c-5.686-12.618-8.96-27.047-8.96-42.422 0-.722.027-1.437.042-2.156zm-2.612 60.688L16.783 166.96l269.96 19.546c3.583-8.906 7.975-17.144 13.415-24.445 4.868-6.532 10.676-12.254 17.375-16.878zm-37.79 63.228l-262.96 19.04L273.19 246.02c1.18-10.497 2.77-20.808 4.927-30.69.51-2.33 1.05-4.635 1.625-6.918zm-8.327 57.803L16.783 284.65l253.225 18.336c.18-12.057.585-24.438 1.408-36.773zm-1.562 60.605l-253.07 18.325 297.22 21.52-1.072-16.267H269.86v-9.343c0-4.62-.01-9.38-.006-14.235zm45.294 57.22L16.783 405.64l301.227 21.81-2.862-43.413zm3.97 60.202L16.782 466.13l305.233 22.102-2.9-43.992z"
        fill-opacity="1"
      />
    </g>
  </svg>
)
import InputCharacterDetails from "./InputCharacterDetails"
import SelectBadHabits from "./SelectBadHabits"

export default function StepTwo() {
  return (
    <div className="flex flex-col w-full gap-4 mt-4">
      <p>Step 2</p>
      <section className="flex justify-between bg-purple-600">
        <InputCharacterDetails />
        <SelectBadHabits />
      </section>
    </div>
  )
}

import { Input } from "../input"

export default async function CharacterName() {
  return (
    <Input
      type="text"
      placeholder="Character Name"
      // onChange={(e) => handleChange(e)}
    />
  )
}

import FormContainer from "../../form-container"

export default function StartingTechnique() {
  return (
    <FormContainer
      heading="Starting Technique"
      subheading="Something"
      rightNode={
        <div className="pt-1 my-auto text-sm font-bold capitalize text-neutral-300">
          Test
        </div>
      }
      className="min-w-[300px]"
    >
      <div>Some content</div>
    </FormContainer>
  )
}

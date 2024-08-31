import { useForm, SubmitHandler } from "react-hook-form";

interface NewPCFromFields {
  name: string;
  race: string;
  class: string;
  level: number;
  hp: number;
  ac: number;
  passivePerception: number;
  passiveInvestigation: number;
  passiveInsight: number;
}

const NewPCForm = () => {
  const { register, handleSubmit } = useForm<NewPCFromFields>();

  const onSubmit: SubmitHandler<NewPCFromFields> = (data) => {
    console.log("submit", data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Character Name *</label>
      <input
        type="text"
        id="name"
        {...(register("name"), { required: true })}
      />
      <label htmlFor="race">Race</label>
      <input type="text" id="race" {...register("race")} />
      <label htmlFor="class">Class</label>
      <input type="text" id="class" {...register("class")} />
      <label htmlFor="level">Level</label>
      <input type="text" id="level" {...register("level")} />
      <label htmlFor="hp">HP</label>
      <input type="number" id="hp" {...register("hp")} />
      <label htmlFor="ac">AC</label>
      <input type="number" id="ac" {...register("ac")} />
      <fieldset>
        <legend>Passive Skills</legend>
        <label htmlFor="passivePerception">Perception</label>
        <input
          type="number"
          id="passivePerception"
          {...register("passivePerception")}
        />
        <label htmlFor="passiveInvestigation">Investigation</label>
        <input
          type="number"
          id="passiveInvestigation"
          {...register("passiveInvestigation")}
        />
        <label htmlFor="passiveInsight">Insight</label>
        <input
          type="number"
          id="passiveInsight"
          {...register("passiveInsight")}
        />
      </fieldset>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewPCForm;

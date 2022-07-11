import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input, Button } from "./styles";

const Searcher = ({ consultingNewWeather, message }) => {
  const formSchema = yup.object().shape({
    place: yup.string().required("Please insert a place"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data.place);
    consultingNewWeather(data.place);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("place")} placeholder={message} />
        <Button type="submit">Buscar</Button>
      </Form>
    </>
  );
};
export default Searcher;

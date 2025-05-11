import { FormAuth } from "@screens/auth/types";
import { Control, FieldErrors, Path } from "react-hook-form";

export type PropsInput = {
  name: Path<FormAuth>;
  placeholder: string;
  control: Control<FormAuth, any, FormAuth>;
  errors?: FieldErrors<FormAuth>;
  value?: string;
};

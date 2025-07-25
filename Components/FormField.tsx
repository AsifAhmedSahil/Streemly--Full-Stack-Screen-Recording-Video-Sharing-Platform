import React from "react";

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  const InputToProps = ({ type }: { type: string }) => {
    if (type === "textarea") {
      return <textarea />;
    } else if (type === "select") {
      return <select />;
    } else {
      return <input />;
    }
  };
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <InputToProps type={as} />
    </div>
  );
};

export default FormField;

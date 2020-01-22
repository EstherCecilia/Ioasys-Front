import React from "react";
import { Field, reduxForm } from "redux-form";

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <div>
          <Field name="nome" component="input" type="text" placeholder="" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="Ninformado"
            />{" "}
            Não informar
          </label>
        </div>
      </div>
      <div>
        <label>Faculdade</label>
        <div>
          <Field
            name="faculdade"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label>Matricula</label>
        <div>
          <Field
            name="matricula"
            component="input"
            type="matricula"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label>Telefone</label>
        <div>
          <Field
            name="telefone"
            component="input"
            type="telefone"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="" />
        </div>
      </div>
      <div>
        <label>Senha</label>
        <div>
          <Field name="senha" component="input" type="senha" placeholder="" />
        </div>
      </div>{" "}
      <div>
        <label>Confirmar senha</label>
        <div>
          <Field
            name="confirmSenha"
            component="input"
            type="confirmSenha"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(Form);

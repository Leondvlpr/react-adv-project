import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/customForm.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido');
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, `Minimo de ${(rule as any).value} caracteres`);
        }
        if (rule.type === 'email') {
            schema = schema.email('El email no tiene una sintaxis correcta');
        }
    }
    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>DynamicFormPage</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {
                    (formik) => (
                        <Form noValidate>
                            {formJson.map(({ type, name, placeholder, label, options }) => {
                                if (type === "input" || type === "password" || type === "email") {
                                    return <MyTextInput
                                        key={name}
                                        type={type}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                    />
                                } else if (type === "select") {
                                    return (
                                        <MySelect
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map(({ id, label }) => (
                                                    <option key={id} value={label}>{label}</option>
                                                ))
                                            }
                                        </MySelect>
                                    )
                                }

                                return <span>Type: {type} no es soportado</span>
                            })}
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

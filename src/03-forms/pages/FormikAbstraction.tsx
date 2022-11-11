import { Formik, Field, Form, ErrorMessage } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput, MySelect, MyCheckBox } from '../components';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                    lastName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                    email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
                    terms: Yup.boolean().isTrue('Debe aceptar las condiciones'),
                    jobType: Yup.string().notOneOf(['it-jr'], 'Esta opción no es permitida').required('Requerido')
                })}
            >

                {
                    formik => (
                        <Form>
                            <MyTextInput
                                label='Frist Name'
                                name={'firstName'}
                                placeholder='Esteban'
                            />

                            <MyTextInput
                                label='Last Name'
                                name={'lastName'}
                                placeholder='Leon'
                            />

                            <MyTextInput
                                label='Email Address'
                                name={'email'}
                                placeholder='Correo'
                                type='email'
                            />

                            <MySelect label='Job Type' name={'jobType'}>
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>

                            <MyCheckBox label='Terms and conditions' name='terms' />

                            <button type='submit'>Submit</button>
                        </Form>
                    )}

            </Formik>
        </div>
    )
}

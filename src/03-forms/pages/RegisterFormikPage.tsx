import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register formik page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('La sintaxis del correo no es valida').required('Requerido'),
                        password1: Yup.string().min(6, 'Debe contener como minimo 6 caracteres').required('Requerido'),
                        password2: Yup.string().min(6, 'Debe contener como minimo 6 caracteres').oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales').required('Requerido')
                    })
                }
            >
                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput
                                label={'Name'}
                                name={'name'}
                                placeholder={'Name'}
                            />

                            <MyTextInput
                                label={'Email'}
                                name={'email'}
                                placeholder={'Email'}
                            />

                            <MyTextInput
                                label={'Password'}
                                name={'password1'}
                                placeholder={'Password'}
                            />

                            <MyTextInput
                                label={'Repeat password'}
                                name={'password2'}
                                placeholder={'Repeat password'}
                            />

                            <button type='submit'>Submit</button>
                            <button type='submit' onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

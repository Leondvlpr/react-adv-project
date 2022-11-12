import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage, DynamicFormPage } from "../03-forms/pages";
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register-formik-page" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamicForm-page" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Form Page</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="formik-components" element={<FormikComponents />} />
                    <Route path="formik-abstraction" element={<FormikAbstraction />} />
                    <Route path="register-formik-page" element={<RegisterFormikPage />} />
                    <Route path="dynamicForm-page" element={<DynamicFormPage />} />
                    <Route path="/*" element={<Navigate to="/register" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}

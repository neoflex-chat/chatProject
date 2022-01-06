import {
  useForm,
  useController,
} from 'react-hook-form'
import s from './Auth.module.scss'
import { authErrors } from '../../configs/authErrors'
import 'antd/dist/antd.css'
import { Input, Button } from 'antd'
import {
  SmileOutlined,
  UserOutlined,
  KeyOutlined,
    MailOutlined
} from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {useTitle} from "../../hooks/useTitle";
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
      .required('First Name is required')
      .min(authErrors.firstName.minLength, authErrors.firstName.minLengthError)
      .max(authErrors.firstName.maxLength, authErrors.firstName.maxLengthError),
  lastName: Yup.string()
      .required('Last name is required')
      .min(authErrors.lastName.minLength, authErrors.lastName.minLengthError)
      .max(authErrors.lastName.maxLength, authErrors.lastName.maxLengthError),
  login: Yup.string()
      .required('Login is required')
      .min(authErrors.login.minLength, authErrors.login.minLengthError)
      .max(authErrors.login.maxLength, authErrors.login.maxLengthError),
  password: Yup.string()
      .required('Password is required')
      .min(authErrors.password.minLength, authErrors.password.minLengthError)
      .max(authErrors.password.maxLength, authErrors.password.maxLengthError),
  confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  // dob: Yup.string()
  //   .required('Date is required')
  //   .matches(
  //     /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
  //     'Date of Birth must be a valid date in the format YYYY-MM-DD'
  //   ),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  // acceptTerms: Yup.bool().oneOf([true], 'Accept Ts & Cs is required'),
})
type FormValues = {
  firstName: string
  lastName: string
  login: string
  password: string
  confirmPassword: string
  email: string
  placeholder: string
}
const formOptions = { resolver: yupResolver(validationSchema) }

export const Auth = () => {
  useTitle('Register')





  const { control, handleSubmit, formState, reset } =
    useForm<FormValues>(formOptions)
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  })
  const { errors, isValid } = formState
  const { field: firstName } = useController({
    name: 'firstName',
    control: control,
  })
  const { field: lastName } = useController({
    name: 'lastName',
    control: control,
  })
  const { field: login } = useController({ name: 'login', control: control })
  const { field: email } = useController({ name: 'email', control: control })
  const { field: password } = useController({
    name: 'password',
    control: control,
  })
  const { field: confirmPassword } = useController({
    name: 'confirmPassword',
    control: control,
  })
  return (
    <div className={s.auth_container}>
      <form className={s.form_container} onSubmit={onSubmit}>
        <Input
          {...firstName}
          className={s.input}
          placeholder="First name"
          prefix={<UserOutlined />}
        />
        <div className={s.invalidFeedback}>{errors.firstName?.message}</div>
        <Input
          {...lastName}
          className={s.input}
          placeholder="Last name"
          prefix={<UserOutlined />}
        />
        <div className={s.invalidFeedback}>{errors.lastName?.message}</div>
        <Input
          {...login}
          className={s.input}
          placeholder={'Login'}
          prefix={<SmileOutlined />}
        />
        <div className={s.invalidFeedback}>{errors.login?.message}</div>
        <Input.Password
          {...password}
          className={s.input}
          placeholder="Password"
          prefix={<KeyOutlined />}
        />
        <div className={s.invalidFeedback}>{errors.password?.message}</div>
        <Input.Password
          {...confirmPassword}
          className={s.input}
          placeholder="Repeat password"
          prefix={<KeyOutlined />}
        />
        <div className={s.invalidFeedback}>
          {errors.confirmPassword?.message}
        </div>
        <Input {...email} className={s.input} placeholder={'E-mail'} prefix={<MailOutlined/>} />
        <div className={s.invalidFeedback}>{errors.email?.message}</div>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </form>
    </div>
  )
}
/*
<input {...register("firstName", {
    required: true, minLength: firstName.minLength, maxLength: firstName.maxLength
})} placeholder={'First name'} autoComplete="none" />
{[
    errors.firstName?.type === 'required' && 'First name is required',
    errors.firstName?.type === 'minLength' && lastName.minLengthError, ,
    errors.firstName?.type === 'maxLength' && firstName.maxLengthError
]}
<input {...register("lastName", {
    required: true,
    minLength: lastName.minLength,
    maxLength: lastName.maxLength
})} placeholder="Last name" autoComplete="none"/>
{[
    errors.lastName?.type === 'required' && <p>Last name is required</p>,
    errors.lastName?.type === 'minLength' && lastName.minLengthError,
    errors.lastName?.type === 'maxLength' && lastName.maxLengthError
]}
<input {...register("login", {
    required: true,
    minLength: login.minLength,
    maxLength: login.maxLength
})} placeholder="Login" autoComplete="none"/>
{[
    errors.login?.type === 'required' && 'Login is required',
    errors.login?.type === 'minLength' && login.minLengthError,
    errors.login?.type === 'maxLength' && login.maxLengthError
]}
<input type="date" {...register("birthDate", {
    required: true,
    // valueAsDate: true
})}/>
{[
    errors.birthDate?.type === 'required' && 'Birth date is required',
    // errors.birthDate?.type === 'valueAsDate' && 'ne data'
]}
<input type="submit"/>*/

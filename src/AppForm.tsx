import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import './App.css'

interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

const schema = yup.object({
  name: yup.string()
    .min(2, 'Deve conter no minimo 2 caracteres')
    .max(10, 'Deve ter no máximo 10 caracteres')
    .required('Nome é obrigatório'),
  email: yup.string()
    .email('Deve ser no formato de e-mail')
    .required('E-mail é obrigatório'),
  password: yup.string()
    .required('A senha é obrigatória')
}).required();

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterData>({
    resolver: yupResolver(schema)
  });

  console.log('Aplicação sendo renderizada')

  console.log(errors);

  function registerUser(data: IRegisterData) {
    console.log(data)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(registerUser)} noValidate>
        <div>
          <input 
            type="text"
            {...register('name')}
          />
          {errors.name?.message}
        </div>
      
        <div>

          <input 
            type="email" 
            {...register('email')}
          />
          {errors.email?.message}
        </div>

        <div>
          <input 
            type="password" 
            {...register('password')}
          />
          {errors.password?.message}
        </div>
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default App

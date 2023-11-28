import './hook-form-page.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useAppSelector } from '../../hooks/redux';
import { appSelector } from '../../store/reducers/app-slice';
import { FormInput } from '../../types';
import { schema } from '../../utils/schemes';

export const HookFormPage: FC = () => {
  const { countries } = useAppSelector(appSelector);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormInput>({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-field">
        <label>Name</label>
        <input {...register('name')} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div className="input-field">
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="input-group">
        <div className="input-field input-field_large">
          <label>Password</label>
          <input {...register('password')} />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <div className="input-field input-field_large">
          <label>Repeat password</label>
          <input {...register('confirmPassword')} />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>
      <div className="input-group">
        <div className="input-field">
          <label>Age</label>
          <input {...register('age')} />
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>
        <div className="input-field">
          <label>Country</label>
          <select className="input_select" {...register('country')}>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="error">{errors.country.message}</p>}
        </div>
        <div className="input-field">
          <label>Gender</label>
          <div className="input-group">
            <div className="input_radio">
              <label>Male</label>
              <input type="radio" {...register('gender')} value="Male" />
            </div>
            <div className="input_radio">
              <label>Female</label>
              <input type="radio" {...register('gender')} value="Female" />
            </div>
          </div>

          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>
      </div>
      <div className="input-field">
        <label>Image</label>
        <label className="input-file">
          <input type="file" {...register('image')} accept=".jpeg, .png" />
          <span className="input-file-btn">Выберите файл</span>
        </label>
        {errors.image && <p className="error">{errors.image.message}</p>}
      </div>
      <div className="input-field input-field_left">
        <label>T&C </label>
        <input
          className="input_checkbox"
          type="checkbox"
          {...register('tandc')}
        />
        {errors.tandc && <p className="error">{errors.tandc.message}</p>}
      </div>
      <input
        type="submit"
        className="input_submit"
        disabled={!isDirty || !isValid}
        value={'Submit'}
      />
    </form>
  );
};

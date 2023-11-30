import { FC, useRef, useState } from 'react';
import { ValidationError } from 'yup';

import { useAppSelector } from '../../hooks/redux';
import { appSelector } from '../../store/reducers/app-slice';
import { schema } from '../../utils/schemes';

export const UncontrolledFormPage: FC = () => {
  const { countries } = useAppSelector(appSelector);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    country: '',
    image: '',
    tandc: '',
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLOptionElement>(null);
  const genderMaleRef = useRef<HTMLInputElement>(null);
  const genderFemaleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const tandcRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      age: ageRef.current?.value,
      gender: genderMaleRef.current?.checked
        ? genderMaleRef.current?.value
        : genderFemaleRef.current?.value,
      country: countryRef.current?.value,
      image: imageRef.current?.files?.['0'] || undefined,
      tandc: tandcRef.current?.checked,
    };

    const err: (string | undefined)[][] = [];

    try {
      await schema.validate(formData, { abortEarly: false });
    } catch (e) {
      if (e instanceof ValidationError)
        e.inner.forEach((error) => {
          err.push([error.path, error.message]);
        });
    }

    setErrors(Object.fromEntries(err));
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="input-field">
        <label>Name</label>
        <input ref={nameRef} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="input-field">
        <label>Email</label>
        <input ref={emailRef} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="input-group">
        <div className="input-field input-field_large">
          <label>Password</label>
          <input ref={passwordRef} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="input-field input-field_large">
          <label>Repeat password</label>
          <input ref={confirmPasswordRef} />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
      </div>
      <div className="input-group">
        <div className="input-field">
          <label>Age</label>
          <input ref={ageRef} />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="input-field">
          <label>Country</label>
          <select className="input_select">
            {countries.map((country, index) => (
              <option key={index} value={country} ref={countryRef}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>
        <div className="input-field">
          <label>Gender</label>
          <div className="input-group">
            <div className="input_radio">
              <label>Male</label>
              <input
                type="radio"
                value="Male"
                name="gender"
                ref={genderMaleRef}
                checked
              />
            </div>
            <div className="input_radio">
              <label>Female</label>
              <input
                type="radio"
                value="Female"
                name="gender"
                ref={genderFemaleRef}
              />
            </div>
          </div>

          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
      </div>
      <div className="input-field">
        <label>Image</label>
        <label className="input-file">
          <input type="file" accept=".jpeg, .png" ref={imageRef} />
          <span className="input-file-btn">Выберите файл</span>
        </label>
        {errors.image && <p className="error">{errors.image}</p>}
      </div>
      <div className="input-field input-field_left">
        <label>T&C </label>
        <input className="input_checkbox" type="checkbox" ref={tandcRef} />
        {errors.tandc && <p className="error">{errors.tandc}</p>}
      </div>
      <input type="submit" className="input_submit" value={'Submit'} />
    </form>
  );
};

import './user.css';

import { FC } from 'react';

import { FormInput } from '../../types';

type Props = {
  user: FormInput;
};

export const User: FC<Props> = ({ user }) => {
  const { name, email, password, age, gender, country, image, tandc } = user;
  return (
    <div className="user">
      <img className="user__image" src={image} alt="image" />
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Country: {country}</p>
        <p>T&C: {tandc.toString()}</p>
      </div>
    </div>
  );
};

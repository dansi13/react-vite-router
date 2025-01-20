// src/pages/LoginPage/LoginPage.tsx
import React from 'react';
import Layout from '../../containers/Layout/Layout';
import Section from '../../containers/Section/Section';
import Card from '../../containers/Card/Card';
import LoginForm from '../../screens/LoginForm/LoginForm';
import { LoginPageProps } from './types';

const LoginPage: React.FC<LoginPageProps> = ({ data, error, onSubmit }) => {
  return (
    <Layout>
      <Section>
        <Card>
          <LoginForm onSubmit={onSubmit} email={''} password={''} onEmailChange={function (email: string): void {
                      throw new Error('Function not implemented.');
                  } } onPasswordChange={function (password: string): void {
                      throw new Error('Function not implemented.');
                  } } />
        </Card>
        {data && <div>{data.message}</div>}
        {error && <div>Error: {error}</div>}
      </Section>
    </Layout>
  );
};

export default LoginPage;

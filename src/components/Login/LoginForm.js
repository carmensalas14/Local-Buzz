import React from 'react';

function LoginForm() {
  return (
    <section className="LoginFormComponent">
      <form id="loginForm" action="/login" method="post">
        <fieldset>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />

          <input type="submit" value="Log In" />
        </fieldset>
      </form>
    </section>
  );
}

export default LoginForm;

import React from 'react';
import goose from './svg/goose.svg';

export default function MainPage() {
  return (
    <section>
      <img src={goose} alt="goose" />
      <h1>GooseTrack</h1>
      <nav>
        <li>
          <a>Sign up</a>
        </li>
        <li>
          <a>Log in</a>
        </li>
      </nav>
    </section>
  );
}
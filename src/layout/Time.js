function Time() {
  const date = Date();

  return (
    <header>
      <nav>
        <ul>
          <li>Hong Kong Time</li>
          <li>
            <small>{date}</small>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Time;

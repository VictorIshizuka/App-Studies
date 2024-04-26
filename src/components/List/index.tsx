export const List = ({ list }) => {
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

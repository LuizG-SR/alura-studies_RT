import style from '../Lista.module.scss';

export default function Item(props: {
  key: any;
  tarefa: string;
  tempo: string;
}) {
  const { key, tarefa, tempo } = props;
  return (
    <li key={key} className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}

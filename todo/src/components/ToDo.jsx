import classNames from "classnames";
import 'bulma/css/bulma.css';

export const ToDo = (props) => {
    //stateを作成
    const {todo, onCheck } = props;
    //チェックボックスを押したとき，ToDoAppクラスの「handleCheck」関数を実行
    const handleCheck = () => {
        onCheck(todo);
    }

    return (
        <label className="panel">
            <input
                type="checkbox"
                checked={todo.done}
                onChange={handleCheck}
            />
            <span
                className={classNames({
                    'has-text-grey-light':todo
                })}>
                    {todo.text}
            </span>
        </label>
    )
}
export default ToDo;
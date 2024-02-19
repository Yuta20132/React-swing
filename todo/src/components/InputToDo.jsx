import React, {useState} from "react";
import 'bulma/css/bulma.css';

export const InputToDo = (props) => {

    //stateを作成
    const [text, setText] = useState('');

    //入力値にtextを反映
    const handleChange = (e) => {
        setText(e.target.value);
    };

    //Enter押下時，Todoに追加
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            //入力値が空白の場合終了
            if (!text.match(/\S/g)) return;
            //TodoAppクラスの「handleAdd関数を実行」
            props.onAdd(text);
            setText('');
        };
    };

    return (
        <diva className="panel-block">
            <input
            class="input"
            type="text"
            placeholder="Enter to add"
            value={text}
            onChange={handleChange}
            onKeyDown={handleEnter}

            />
        </diva>
    )

}
export default InputToDo;
import {useSelector, useDispatch} from "react-redux";
import '../../App.css';
import {checked, remove} from "../../store/actionsCreators";
import {change} from "../../store/actionsCreators";

function Lists() {
    const lists = useSelector((state) => state)
    const dispatch = useDispatch();
    const check=(e)=>{

        dispatch(checked(e.target.checked,e.target.id));
    }


}

export default Lists
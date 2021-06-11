import PropTypes from 'prop-types';

import { ListItem, ListText } from "./item.styles";

const Item = ({ id, text, done, toggleTodo }) => (
  <ListItem done={done}>
    <ListText>&#10003; {text}</ListText>
    <button onClick={()=>toggleTodo(id)}>&#10007;</button>
  </ListItem>
);

Item.prototype = {
  id: PropTypes.number,
  text: PropTypes.string,
  done: PropTypes.bool,
  toggleTodo: PropTypes.func
};

export default Item;
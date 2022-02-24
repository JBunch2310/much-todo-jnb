import { useState, useEffect } from 'react';
import { List } from 'antd';

export default function Tasks({ item }) {
  const [itemStyle, setItemStyle] = useState({})
  useEffect(() => {
    if(item.done) {
      setItemStyle({ color: 'grey', textDecoration: 'line-through' });
    } else {
      setItemStyle({ color: 'black', textDecoration: 'none' });
    }
  }, [item])
  return <List.Item style={itemStyle}>{item.task}</List.Item>
}
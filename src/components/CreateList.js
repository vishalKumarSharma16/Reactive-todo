import React from 'react';

export default function CreateList(props){
  return (
    <input type="text" placeholder="Create List" onKeyDown={(e) => {
      if(e.key === "Enter"){
        props.addList(e.target.value)
        e.target.value = "";
      }
    }}/>
  )
}

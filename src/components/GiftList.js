import React from 'react'


const GiftList = (props) =>
<ul>
  {props.gifts.map(gift => {
    return (<h2 key={gift.id}> ∆ {gift.description} (for {gift.person.name})</h2>)
  })}
</ul>

export default (GiftList);

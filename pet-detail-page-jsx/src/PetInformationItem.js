import React from 'react'

const PetInformationItem = (props) =>
    <React.Fragment>
        <dt>{props.name}</dt>
        <dd>{props.value}</dd>
    </React.Fragment>
;

PetInformationItem.defaultProps = {
    value: "Loading..."
}
  
export default PetInformationItem;
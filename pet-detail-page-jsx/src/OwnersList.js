import React from 'react'
import OwnerLink from './OwnerLink'

const OwnersList = (props) =>
    <React.Fragment>
        <h2>Owners</h2>
        <ul>
        { props.owners.map(owner =>
            <li key={owner.id}>
                <OwnerLink href={owner.href} firstName={owner.firstName} lastName={owner.lastName}></OwnerLink>
            </li>
        )}
        </ul>
    </React.Fragment>
;

OwnersList.defaultProps = {
    owners: [],
}

export default OwnersList;
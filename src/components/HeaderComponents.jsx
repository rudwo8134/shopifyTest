import React, { useState } from 'react';
import * as Styles from '../style/homeStyle.jsx';
import { allText } from '../textContents';
import { useMediaQuery } from 'react-responsive';

const HeaderComponents = () => {
  const [showContact, setShowContact] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 625px)' });

  return (
    <Styles.Header>
      <Styles.HeaderTitle mobileContact={Boolean(isMobile && showContact)}>
        {isMobile && showContact
          ? `${allText.header.Owner.name}(${allText.header.Owner.Email})`
          : allText.header.title}
      </Styles.HeaderTitle>
      {isMobile ? (
        !showContact ? (
          <Styles.ContactIcon
            onClick={() => setShowContact(true)}
          ></Styles.ContactIcon>
        ) : (
          <Styles.CancelButton
            onClick={() => setShowContact(false)}
          ></Styles.CancelButton>
        )
      ) : (
        <Styles.ContactInfo>
          <h4 className="name">
            <b>Name:</b> {allText.header.Owner.name}
          </h4>
          <div className="email">
            <b>Contact:</b> {allText.header.Owner.Email}
          </div>
        </Styles.ContactInfo>
      )}
    </Styles.Header>
  );
};

export default HeaderComponents;

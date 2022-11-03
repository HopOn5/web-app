import React from "react";
import "./AddressDetails.scss";

const AddressDetails = (props) => {
  const { data } = props;
  return (
    <div className="address-details__card">
      <div className="address-details">
        {data?.firstName} {data?.lastName}
      </div>
      <div className="address-details__add">
        {data?.houseNumber} {data?.street}
      </div>
      <div className="address-details__add">
        {data?.city} {data?.county}
      </div>
      <div className="address-details__add">{data?.postalCode}</div>
    </div>
  );
};

export default AddressDetails;

import React, { useEffect, useState } from "react";
import useInput from "../helpers/useInput";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import useOnOutsideClick from "../helpers/useOutsideClick";
import { useRef } from "react";

const AutocompleteAddress = ({ handleSelection, inputProps }) => {
    const address = useInput({ inputProps });
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef();

    useOnOutsideClick(ref, () => setShowMenu(false));

    useEffect(() => {
        if (address.suggestions?.length > 0) {
            setShowMenu(true);
        } else setShowMenu(false);
    }, [address.suggestions]);

    const handleAddressSelection = (address) => handleSelection(address);

    return (
        <div className="autocomplete-address" ref={ref}>
            <TextField placeholder="Address" {...address} />
            {showMenu && (
                <SuggestionWrapper>
                    {address.suggestions.map((suggestion, index) => {
                        return (
                            <Suggestion
                                key={index}
                                onClick={() => {
                                    handleAddressSelection(suggestion);
                                    address.setValue(suggestion.place_name);
                                    address.setSuggestions([]);
                                }}
                            >
                                {suggestion.place_name}
                            </Suggestion>
                        );
                    })}
                </SuggestionWrapper>
            )}
        </div>
    );
};

export default AutocompleteAddress;

const SuggestionWrapper = styled.div`
    background: white;
    position: absolute;
    width: 400px;
    padding: 10px 20px;
    border-radius: 0px 0px 10px 10px;
    z-index: 12;
`;

const Suggestion = styled.p`
    cursor: pointer;
    max-width: 400px;
`;

import React from "react";

import {Search, SearchIconWrapper, StyledInputBase} from "../../../theme/searchTheme";
import SearchIcon from "@mui/icons-material/Search";

import style from "./Search.module.css";


const SearchInput = (props) => {

    const handleSearch = (e) => {
        props.searchItems(e.target.value);
    }

    return (
        <Search className={style.search}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
                onChange={handleSearch}
            />
        </Search>
    )
}

export default SearchInput;
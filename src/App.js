import {ThemeProvider} from "@mui/material";

import {HeaderContainer} from "./components/Header/HeaderContainer";
import {GoodsListContainer} from "./components/Goods/GoodsListContainer";
import {theme} from "./theme/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <ThemeProvider theme={theme}>

            <HeaderContainer/>

            <Routes>
                <Route element={<div>asd</div>} path={"/"} />
                <Route element={<GoodsListContainer/>} path={"/:productName"} />
            </Routes>

        </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;

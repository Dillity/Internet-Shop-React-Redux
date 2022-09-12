import {ThemeProvider} from "@mui/material";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {GoodsListContainer} from "./components/Goods/GoodsListContainer";
import {theme} from "./theme/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderContainer/>
            <GoodsListContainer/>
        </ThemeProvider>
    );
}

export default App;

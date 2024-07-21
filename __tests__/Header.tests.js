import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";
import{render,screen} from "@testing-library/react"
import "testing-library/jest-dom";
import {Provider} from "react-redux";



test("Should render body component and find login button", () => {
    render(
        <BrowserRouter>
        <Provider> store = {appStore}
    <Header/>
    </Provider>
    </BrowserRouter>)
const loginButton = screen.getByRole("LOGIN");
expect(loginButton).toBeInTheDocument();

});
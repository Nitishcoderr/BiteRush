import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("Should render Header component with a login button", () => {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByText("Login" )
    // const loginButton = screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginButton);

    const logoutButton = screen.getByText("Logout")

    expect(logoutButton).toBeInTheDocument()

})
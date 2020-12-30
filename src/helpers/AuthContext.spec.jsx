import React from 'react'
import {AuthProvider, Consumer} from "./AuthContext"
import {render} from "@testing-library/react"
import {act} from "react-dom/test-utils"

describe("AuthContext", () => {
    describe("#logIn", () => {
        it("sets 'isLoggedIn' to true", () => {
            let isLoggedIn;
            let logIn;

            render(
                <AuthProvider>
                    <Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.logIn;
                            return null;
                        }}
                    </Consumer>
                </AuthProvider>
            )

            expect(isLoggedIn).toBe(false)
            act(() => {
                logIn("test@test.com", "123123");
            })
            expect(isLoggedIn).toBe(true)
        })
    })

    describe("#logOut", () => {
        it("sets 'isLoggedIn' to false", () => {
            let isLoggedIn;
            let logOut;
            let logIn;

            render(
                <AuthProvider>
                    <Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.logIn;
                            logOut = value.logOut;
                            return null;
                        }}
                    </Consumer>
                </AuthProvider>
            )

            act(() => {
                logIn("test@test.com", "123123");
            })
            act(() => {
                logOut();
            })
            expect(isLoggedIn).toBe(false)
        })
    })
})
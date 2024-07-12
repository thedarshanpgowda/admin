import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [user, setUser] = useState(null);

    return (
        <ShopContext.Provider value={{ user, setUser }}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;

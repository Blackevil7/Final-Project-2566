import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

export default function App() {
  return (
    <Autocomplete
      
      placeholder="ค้นหา"
      defaultSelectedKey="cat"
      className="max-w-xs"
      scrollShadowProps={{
        isEnabled: false
      }}
    >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
    </Autocomplete>
  );
}

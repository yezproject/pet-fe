import Autocomplete from "@mui/joy/Autocomplete"
import AutocompleteOption from "@mui/joy/AutocompleteOption"
import FormLabel from "@mui/joy/FormLabel"
import * as React from "react"

import { useController } from "react-hook-form"

export function BaseAutocomplete({ control, name, label, ...restProps }) {
    const {
        field: { onChange, value },
    } = useController({
        name,
        control
    })
    return (
        <>
            <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
            {/* props of autocomplete is default the upstream could override it, it could make this break, use that with understand */}
            <Autocomplete
                getOptionLabel={(option) => option?.name || ""}
                renderOption={(props, option) => (
                    <AutocompleteOption {...props} key={option.id} >
                        {option.name}
                    </AutocompleteOption>
                )}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={(event, selectedOption) => {
                    onChange(selectedOption)
                }}
                value={value}
                {...restProps}
            />
        </>
    )
}
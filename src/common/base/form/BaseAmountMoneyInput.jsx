import BaseNumericFormatAdapter from "@/common/base/form/BaseNumericFormatAdapter"
import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"
import * as React from "react"

import { useController } from "react-hook-form"

export default function BaseAmountMoneyInput({ control, name, label }) {
    const { field } = useController({
        name,
        control
    })
    return (
        <>
            <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
            <Input {...field}
                endDecorator="₫"
                slotProps={{
                    input: {
                        component: BaseNumericFormatAdapter,
                    },
                }} />
        </>

    )
}
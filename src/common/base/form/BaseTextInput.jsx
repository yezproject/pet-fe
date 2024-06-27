import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"
import { useController } from "react-hook-form"

const BaseTextInput = ({ control, name, label }) => {
    const { field } = useController({
        name,
        control
    })
    return (
        <>
            <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
            <Input type="text"
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                value={field.value}
                slotProps={{
                    input: {
                        ref: field.ref
                    },
                }} />
        </>
    )
}

export default BaseTextInput
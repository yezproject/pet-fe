import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"
import { useController } from "react-hook-form"

const DateInput = ({ control, name, label }) => {
    const { field } = useController({
        name,
        control
    })
    return (
        <>
            <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
            <Input type="date" {...field} />
        </>
    )
}

export default DateInput
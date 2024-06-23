import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Stack from "@mui/joy/Stack"

import TextInput from "@/common/base/form/TextInput.jsx"
import { useForm } from "react-hook-form"

export default function UpdateCategoryForm({ category, updateCategory }) {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: category.name,
        }
    })

    const onSubmit = (data) => {
        const updatedCategory = {
            ...category,
            name: data?.name,
        }
        updateCategory(updatedCategory)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <TextInput
                    control={control}
                    name="name"
                    label="Name"
                />
            </Box>

            <Stack gap={4} sx={{ mt: 4 }}>
                <Button type="submit">Update category</Button>
            </Stack>
        </form >
    )
}

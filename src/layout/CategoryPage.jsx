import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Typography from "@mui/joy/Typography"

import BaseTableMenu from "@/common/base/table/BaseTableMenu.jsx"
import BaseModal from "@/common/base/modal/BaseModal"
import AddCategoryForm from "@/components/category/AddCategoryForm"
import CategoryList from "@/components/category/CategoryList"
import UpdateCategoryForm from "@/components/category/UpdateCategoryForm"
import categoryService from "@/services/category-service"
import { AddBox } from "@mui/icons-material"
import { useCallback, useEffect, useState } from "react"

export default function CategoryPage() {
    const [categories, setCategories] = useState([])
    const [openAddModal, setOpenAddModal] = useState(false)
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({})

    const transactionAction = useCallback((row) => {
        return <BaseTableMenu menuItems={[
            { label: "Update", action: () => onClickUpdate(row) },
            { label: "Delete", action: () => onClickDelete(row.id) },
        ]} />
    }, [])

    const fetchCategories = () => {
        categoryService.getCategories().then((response) => {
            setCategories(response.data)
        })
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const onCreate = async (category) => {
        const { status } = await categoryService.addCategory(category)
        if (status === 201) {
            fetchCategories()
        }
        setOpenAddModal(false)
    }

    const onUpdate = async (category) => {
        const { status } = await categoryService.updateCategory(category.id, category)
        if (status === 204) {
            fetchCategories()
        }
        setOpenUpdateModal(false)
    }

    const onClickDelete = async (itemId) => {
        const { status } = await categoryService.deleteCategory(itemId)
        if (status === 204) {
            fetchCategories()
        }
    }

    const onClickUpdate = async (category) => {
        setSelectedCategory(category)
        setOpenUpdateModal(true)
    }

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    mb: 1,
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "start", sm: "center" },
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                <Typography level="h2" component="h1">
                    Category
                </Typography>
                <Button color="primary" startDecorator={<AddBox />} size="sm" onClick={() => setOpenAddModal(true)}>
                    Add category
                </Button>
            </Box>
            <CategoryList
                categories={categories}
                menu={transactionAction}
            />
            <BaseModal
                open={openAddModal}
                body={
                    <AddCategoryForm
                        addCategory={(transaction) => onCreate(transaction)}
                    />
                }
                title={"Add category"}
                onClose={() => setOpenAddModal(false)}
            />
            <BaseModal
                open={openUpdateModal}
                body={
                    <UpdateCategoryForm
                        category={selectedCategory}
                        updateCategory={(transaction) => onUpdate(transaction)}
                    />
                }
                title={"Update category"}
                onClose={() => setOpenUpdateModal(false)}
            />
        </Box>
    )
}

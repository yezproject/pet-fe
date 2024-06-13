import * as React from "react"
import ModalClose from "@mui/joy/ModalClose"
import {Typography} from "@mui/joy"
import Sheet from "@mui/joy/Sheet"
import Modal from "@mui/joy/Modal"
import PropTypes from "prop-types"
import Stack from "@mui/joy/Stack"

export default function BaseModal(props) {
    return (
        <>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={props.open}
                onClose={() => props.setOpen()}
                sx={{display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10000}}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 400,
                        width: "100%",
                        borderRadius: "md",
                        p: 3,
                        boxShadow: "lg",
                    }}
                >
                    <ModalClose variant="plain" sx={{m: 1}}/>
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        {props.title}
                    </Typography>
                    <Stack gap={12} sx={{mt: 2}}>
                        {props.body}
                    </Stack>
                </Sheet>
            </Modal>
        </>
    )
}

BaseModal.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
}

BaseModal.defaultProps = {
    open: false,
    title: "This is the modal title",
}

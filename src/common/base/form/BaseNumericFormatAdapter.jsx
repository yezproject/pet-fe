import { forwardRef } from "react"
import { NumericFormat } from "react-number-format"

const BaseNumericFormatAdapter = forwardRef(
    (props, ref) => {
        const { onChange, ...other } = props

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    })
                }}
                thousandSeparator
                valueIsNumericString
            />
        )
    },
)

export default BaseNumericFormatAdapter
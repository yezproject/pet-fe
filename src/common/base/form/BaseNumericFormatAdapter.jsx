import { PropTypes } from "prop-types"
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

BaseNumericFormatAdapter.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default BaseNumericFormatAdapter
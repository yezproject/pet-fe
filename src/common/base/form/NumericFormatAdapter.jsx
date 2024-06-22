import { PropTypes } from "prop-types"
import { forwardRef } from "react"
import { NumericFormat } from "react-number-format"

const NumericFormatAdapter = forwardRef(
    function NumericFormatAdapter(props, ref) {
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

NumericFormatAdapter.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default NumericFormatAdapter
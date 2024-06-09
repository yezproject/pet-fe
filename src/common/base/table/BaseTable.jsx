import * as React from 'react';
import {Fragment, useState} from 'react';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Link from '@mui/joy/Link';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import BaseTableFilters from "@/common/base/table/BaseTableFilters.jsx";
import PropTypes from "prop-types";
import BasePagination from "@/common/base/BasePagination.jsx";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
}

function RowMenu() {
    return (
        <Dropdown>
            <MenuButton
                slots={{root: IconButton}}
                slotProps={{root: {variant: 'plain', color: 'neutral', size: 'sm'}}}
            >
                <MoreHorizRoundedIcon/>
            </MenuButton>
            <Menu size="sm" sx={{minWidth: 140}}>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Rename</MenuItem>
                <MenuItem>Move</MenuItem>
                <Divider/>
                <MenuItem color="danger">Delete</MenuItem>
            </Menu>
        </Dropdown>
    );
}

export default function BaseTable({rows, isCheckbox, isRowMenu, isPagination}) {
    const [order, setOrder] = useState("desc");
    const [selected, setSelected] = useState([]);

    return (
        <Fragment>
            <BaseTableFilters/>
            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    display: {xs: 'none', sm: 'initial'},
                    width: '100%',
                    borderRadius: 'sm',
                    flexShrink: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-paddingY': '4px',
                        '--TableCell-paddingX': '8px',
                    }}
                >
                    <thead>
                    <tr>
                        {isCheckbox && <th style={{width: 48, textAlign: 'center', padding: '12px 6px'}}>
                            <Checkbox
                                size="sm"
                                indeterminate={
                                    selected.length > 0 && selected.length !== rows.length
                                }
                                checked={selected.length === rows.length}
                                onChange={(event) => {
                                    setSelected(
                                        event.target.checked ? rows.map((row) => row.id) : [],
                                    );
                                }}
                                color={
                                    selected.length > 0 || selected.length === rows.length
                                        ? 'primary'
                                        : undefined
                                }
                                sx={{verticalAlign: 'text-bottom'}}
                            />
                        </th>}
                        <th style={{width: 100, padding: '12px 6px'}}>
                            <Link underline="none"
                                  color="primary"
                                  component="button"
                                  onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
                                  fontWeight="lg"
                                  endDecorator={<ArrowDropDownIcon/>}
                                  sx={{
                                      '& svg': {
                                          transition: '0.2s',
                                          transform:
                                              order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                                      },
                                  }}>
                                Name
                            </Link>
                        </th>
                        <th style={{width: 120, padding: '12px 6px'}}>Transaction Date</th>
                        <th style={{width: 100, padding: '12px 6px'}}>Id</th>
                        <th style={{width: 100, padding: '12px 6px'}}>Category Id</th>
                        <th style={{width: 60, padding: '12px 6px'}}>Amount</th>
                        {isRowMenu && <th style={{width: 30, padding: '12px 6px'}}></th>}
                    </tr>
                    </thead>
                    <tbody>
                    {stableSort(rows, getComparator(order, 'name')).map((row) => (
                        <tr key={row.id}>
                            {isCheckbox && <td style={{textAlign: 'center', width: 120}}>
                                <Checkbox
                                    size="sm"
                                    checked={selected.includes(row.id)}
                                    color={selected.includes(row.id) ? 'primary' : undefined}
                                    onChange={(event) => {
                                        setSelected((ids) =>
                                            event.target.checked
                                                ? ids.concat(row.id)
                                                : ids.filter((itemId) => itemId !== row.id),
                                        );
                                    }}
                                    slotProps={{checkbox: {sx: {textAlign: 'left'}}}}
                                    sx={{verticalAlign: 'text-bottom'}}
                                />
                            </td>}
                            <td>
                                <Typography level="body-xs">{row.name}</Typography>
                            </td>
                            <td>
                                <Typography level="body-xs">{row.transactionDate}</Typography>
                            </td>
                            <td>
                                <Typography style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer'
                                }}
                                            level="body-xs"
                                            title={row.id}>
                                    {row.id}
                                </Typography>
                            </td>
                            <td>
                                <Typography level="body-xs">{row.categoryId}</Typography>
                            </td>
                            <td>
                                <Typography level="body-xs">{row.amount}</Typography>
                            </td>
                            {isRowMenu && <td>
                                <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                                    <RowMenu/>
                                </Box>
                            </td>}
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Sheet>
            {isPagination && <BasePagination/>}
        </Fragment>
    );
}

BaseTable.propTypes = {
    rows: PropTypes.array.isRequired,
    isCheckbox: PropTypes.bool,
};

BaseTable.defaultProps = {
    isCheckbox: true,
    isRowMenu: true,
    isPagination: true,
};

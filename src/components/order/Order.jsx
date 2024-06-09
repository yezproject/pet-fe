import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded.js';
import Link from '@mui/joy/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded.js';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {getTransactions} from '@/services/join-service.js';
import {AddBox} from "@mui/icons-material";
import BaseModal from "@/common/base/modal/BaseModal.jsx";
import AddTransactionsModal from "@/components/order/AddTransactionsModal.jsx";

const BaseTable = React.lazy(() => import('@/common/base/table/BaseTable.jsx'));

export default function Order() {
    const [transactions, setTransactions] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getTransactions().then(data => {
            setTransactions(data.data);
        });
    }, [])

    return <Box
        component="main"
        className="MainContent"
        sx={{
            px: {xs: 2, md: 6},
            pt: {
                xs: 'calc(12px + var(--Header-height))',
                sm: 'calc(12px + var(--Header-height))',
                md: 3,
            },
            pb: {xs: 2, sm: 2, md: 3},
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
        }}
    >
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Breadcrumbs
                size="sm"
                aria-label="breadcrumbs"
                separator={<ChevronRightRoundedIcon fontSize="sm"/>}
                sx={{pl: 0}}
            >
                <Link
                    underline="none"
                    color="neutral"
                    href="#some-link"
                    aria-label="Home"
                >
                    <HomeRoundedIcon/>
                </Link>
                <Link
                    underline="hover"
                    color="neutral"
                    href="#some-link"
                    fontSize={12}
                    fontWeight={500}
                >
                    Dashboard
                </Link>
                <Typography color="primary" fontWeight={500} fontSize={12}>
                    Orders
                </Typography>
            </Breadcrumbs>
        </Box>
        <Box
            sx={{
                display: 'flex',
                mb: 1,
                gap: 1,
                flexDirection: {xs: 'column', sm: 'row'},
                alignItems: {xs: 'start', sm: 'center'},
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}
        >
            <Typography level="h2" component="h1">
                Orders
            </Typography>
            <Button color="primary"
                    startDecorator={<AddBox/>}
                    size="sm"
                    onClick={() => setOpenModal(true)}>
                Add transactions
            </Button>
        </Box>
        <BaseTable rows={transactions}/>
        <BaseModal open={openModal}
                   body={<AddTransactionsModal/>}
                   title={'Add transaction'}
                   setOpen={() => setOpenModal(false)}/>
    </Box>;
}

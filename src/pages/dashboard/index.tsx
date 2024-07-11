import { Box, Grid } from '@mui/material';
import WeeklyActivity from 'components/sections/dashboard/activity/WeeklyActivity';
import BalanceHistory from 'components/sections/dashboard/balance/BalanceHistory';
import MyCards from 'components/sections/dashboard/creditCards/MyCards';
import ExpenseStatistics from 'components/sections/dashboard/expense/ExpenseStatistics';
import InvoiceOverviewTable from 'components/sections/dashboard/invoice/InvoiceOverviewTable';
import RecentTransactions from 'components/sections/dashboard/transactions/RecentTransaction';
import QuickTransfer from 'components/sections/dashboard/transfer/QuickTransfer';

const Dashboard = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      {/* ------------- Card section ---------------- */}
      <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
        <Grid item xs={12} xl={8} zIndex={1}>
          <MyCards />
        </Grid>
        <Grid item xs={12} xl={4} zIndex={1}>
          <RecentTransactions />
        </Grid>
      </Grid>

      {/* ------------- Chart section ---------------- */}
      <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={{ xs: 0, sm: 1.5 }}>
        <Grid item xs={12} lg={8} zIndex={1}>
          <WeeklyActivity />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ExpenseStatistics />
        </Grid>
      </Grid>
      {/* ------------- Slider section ---------------- */}
      <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={{ xs: 0, sm: 1.5 }}>
        <Grid item xs={12} lg={5} xl={4} zIndex={1}>
          <QuickTransfer />
        </Grid>
        <Grid item xs={12} lg={7} xl={8} zIndex={1}>
          <BalanceHistory />
        </Grid>
      </Grid>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={{ xs: 0, sm: 1.5 }}>
        <Grid item xs={12}>
          <InvoiceOverviewTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

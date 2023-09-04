import TableUI from "@/components/Table";
import DashboardLayout from "@/components/DashboardLayout";
const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };
const Dashboard = function () {
  return (
    <DashboardLayout>
      <TableUI />
    </DashboardLayout>
  );
};

export default Dashboard;

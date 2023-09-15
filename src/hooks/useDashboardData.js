import { DASHBOARD_MENU } from "@/constants";
import UserContext from "@/contexts/userContext";
import client from "@/utils/axios";
import { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState({
    menu: null,
    data: null,
  });
  const [error, setError] = useState(null);
  const { user, isLoading } = useContext(UserContext);
  const cookie = new Cookies();
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await client.get(url);
        const result = await response.json();

        if (response.ok) {
          setDashboardData({ menu: DASHBOARD_MENU.ADMIN, data: result });
        } else {
          throw new Error("مشکلی در دریافت اطلاعات پیش آمده است");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    const token = cookie.get("auth");
    if (token) {
      if (!isLoading) {
        console.log("user.role", user);
        if (user.role === "USER") {
          setDashboardData({ menu: DASHBOARD_MENU.USER, data: [] });
        } else if (user.role === "ADMIN") {
          fetchData("/mentor/list");
        } else {
          setDashboardData({ menu: DASHBOARD_MENU.MENTOR, data: [] });
        }
      }
    }
  }, [user]);

  return { dashboardData, error, isLoading };
};

export default useDashboardData;

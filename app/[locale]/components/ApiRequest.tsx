import {
  Box,
  Pagination,
  Grid,
  Card,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import { endPoint } from "@/api/endPoint";
import { useEffect, useMemo, useState } from "react";
import useApiRequest from "../CustomHooks/useApiRequest";

const ApiRequest = () => {
  const { data, request, loading }: any = useApiRequest(endPoint.users);
  const [count, setCount] = useState(0);

  useEffect(() => {
    request();
  }, []);

  /*   const sortData = data?.sort((a: any, b: any) => {
    console.log("direct use");
    a.name.localeCompare(b.name);
  }); */

  const sortData = useMemo(() => {
    console.log("with useMemo");
    return data?.slice().sort((a: any, b: any) => a.name.localeCompare(b.name));
  }, [data,count]);

  return (
    <Box sx={{ p: 4 }}>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Users List
      </Typography>

      <Grid container spacing={3}>
        {loading
          ? Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                  <CardContent>
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          : sortData?.map((user: any) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 2,
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {user.name}
                    </Typography>
                    <Typography color="text.secondary">
                      {user.email || "No email available"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default ApiRequest;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

type User = {
  id: number;
  name: string;
  email: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

export default function ReactQueryTest() {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  console.log(isLoading,isError,error);
  

  if (isLoading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container sx={{ mt: 5 }}>
        <Alert severity="error">Error: {error.message}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        User List
      </Typography>

      <Grid container spacing={3}>
        {users?.map((user: any) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              variant="outlined"
              sx={{
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

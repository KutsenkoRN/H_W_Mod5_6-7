import React, { ReactElement, FC, useEffect, useState, useContext } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import * as resourceApi from "../../api/modules/users";
import UserCard from "./UserCard";
import { IUser } from "../../interfaces/users";
import { AppStoreContext } from "../../App";

const User: FC<any> = (): ReactElement => {
  const [resources, setResources] = useState<IUser[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { authStore } = useContext(AppStoreContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const res = await resourceApi.getByPage(currentPage);
        setResources(res.data);
        setTotalPages(res.total_pages);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        }
      }
      setIsLoading(false);
    };
    getUser();
  }, [currentPage]);

  if (!authStore.isLogined) {
    return (
      <p
        style={{
          fontSize: "24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        You need to Log In or Sign Up to view this page.
      </p>
    );
  }

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" my={4}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {resources?.map((item) => (
              <Grid key={item.id} item lg={2} md={3} xs={6}>
                <UserCard {...item} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
        />
      </Box>
    </Container>
  );
};

export default User;

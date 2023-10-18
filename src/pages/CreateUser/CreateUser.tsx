import React, { ReactElement, FC, } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import UserForm from "../../components/UserForm";

const CreateUser: FC<any> = (): ReactElement => {
  return (
    <Container>
      <UserForm />
    </Container>
  );
};

export default CreateUser;

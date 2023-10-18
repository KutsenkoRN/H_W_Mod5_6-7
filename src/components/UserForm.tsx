import React, { FC, ReactElement, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { IUser } from "../interfaces/users";
import * as userApi from "../api/modules/users";
import { userUpdate } from "../interfaces/userUpdate";
import { Console } from "console";

const UserForm: FC<any> = (user: IUser | undefined): ReactElement => {
  const [message, setMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userUpdate>({ defaultValues: user });

  const onSubmit: SubmitHandler<userUpdate> = async (data: userUpdate) => {
    
    if(user?.id) {
      data.id = user?.id;
      const res = await userApi.updateUser(data);
      setMessage(res.createdAt);
    } else {
      const res = await userApi.createUser(data);
      setMessage(res.createdAt);
    }  
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              {...register("first_name", {
                required: "First Name is required",
              })}
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              {...register("last_name", { required: "Last Name is required" })}
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {message && (
        <Typography variant="body2">User update at {message}</Typography>
      )}
    </Container>
  );
};

export default UserForm;

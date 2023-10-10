import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import { FC, ReactElement } from "react";
  import { useNavigate } from "react-router-dom";
  import { IResource } from "../../interfaces/resources";
  
  export const ResourceCard: FC<IResource> = (props): ReactElement => {
    return (
      <Card sx={{ maxWidth: 250, backgroundColor: props.color }}>
        <CardContent>
            <Typography noWrap gutterBottom variant="h6" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.pantone_value}
            </Typography>
          </CardContent>
      </Card>
    );
  };
  
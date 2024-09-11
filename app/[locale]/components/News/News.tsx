
import { Grid, Typography, useMediaQuery } from "@mui/material";
import NewsImage1 from "../../assets/images/1.png";
import NewsImage2 from "../../assets/images/2.png";
import NewsImage3 from "../../assets/images/3.png";
import Image from "next/image";
import "./News.css";
import { buttonPrimaryColor, primaryColor } from "../../constant/color";

const News = () => {
  const newsArray = [
    {
      image: NewsImage1,
      title: " The Complete JavaScript Course 2020: Build Real Projects!",
      content:
        "Convallis vitae, nunc ut venenatis, lectus. Tellus nunc orci dolor nec facilisis et lacus, eu aliquet. Amet imperdiet ac venenatis, lacus. Tortor interdum quisque et, eu etiam ac.",
    },
    {
      image: NewsImage2,
      title: " The Complete JavaScript Course 2020: Build Real Projects!",
      content:
        "Convallis vitae, nunc ut venenatis, lectus. Tellus nunc orci dolor nec facilisis et lacus, eu aliquet. Amet imperdiet ac venenatis, lacus. Tortor interdum quisque et, eu etiam ac.",
    },
    {
      image: NewsImage3,
      title: " The Complete JavaScript Course 2020: Build Real Projects!",
      content:
        "Convallis vitae, nunc ut venenatis, lectus. Tellus nunc orci dolor nec facilisis et lacus, eu aliquet. Amet imperdiet ac venenatis, lacus. Tortor interdum quisque et, eu etiam ac.",
    },
  ];
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      spacing={10}
      padding={10}
    >
      <Grid item textAlign={"center"}>
        <Typography
          variant="h4"
          color={buttonPrimaryColor}
          fontFamily={"Nobile"}
          fontWeight={"500"}
        >
          News
        </Typography>{" "}
        <Typography
          variant="caption"
          color={primaryColor}
          fontFamily={"Jost"}
          fontWeight={"400"}
        >
          Home / The Industry / <span style={{ color: "red" }}>News</span>
        </Typography>
      </Grid>
      <Grid
        container
        item
        direction={"row"}
        width={"80%"}
      >
        <Grid container item xs={10} spacing={3} flexDirection={"column"}>
          {newsArray.map((item: any) => {
            return (
              <Grid container item spacing={3} paddingRight={5}>
                <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
                  <Image
                    src={item.image}
                    alt="NewsImage"
                    style={{
                      borderRadius: "10px",
                      width: "250px",
                      height: "300px",
                    }}
                  />
                </Grid>{" "}
                <Grid
                  item
                  xs={6}
                  direction={"column"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  <Typography
                    variant="h6"
                    color={primaryColor}
                    fontFamily={"Jost"}
                    fontWeight={"500"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color={primaryColor}
                    fontFamily={"Jost"}
                    fontWeight={"400"}
                  >
                    {item.content}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={2} >
          <p>aaaa</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default News;

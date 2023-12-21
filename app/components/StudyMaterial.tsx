import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { STUDY_MATERIAL } from "../../assets/contants/contant";
import * as styles from "./styles/studyMaterialStyle";

export const StudyMaterial = () => {
  return (
    <Box sx={styles.mainCon}>
      <Typography component="h1" sx={styles.headerStyle}>
        Checkout study materials
      </Typography>
      <Box sx={styles.cardCon}>
        {STUDY_MATERIAL?.map((ele) => (
          <Link
            href={{
              pathname: "/search",
              query: { search: ele.searchFor },
            }}
            style={{ textDecoration: "none" }}
          >
            <Box sx={styles.cardStyle(ele.color)} key={ele.id}>
              <Typography sx={styles.cardHeaderText} component="p">
                {ele.searchFor} Notes
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

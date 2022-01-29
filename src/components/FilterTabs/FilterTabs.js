import * as React from "react";
import { Tabs, Container, Tab, Typography, Box } from "@mui/material/";

const FilterTabs = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="1920">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Item One" {...a11yProps(1)} />
            <Tab label="Item Two" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <FilterTabs value={value} index={0}>
          All Items
        </FilterTabs>
        <FilterTabs value={value} index={1}>
          Item One
        </FilterTabs>
        <FilterTabs value={value} index={2}>
          Item Three
        </FilterTabs>
      </Box>
    </Container>
  );
}

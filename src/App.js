import { useState, useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { setInLocalStorage, getFromLocalStorage } from "./utils";
import { globalStyles } from "./globalStyles";
import { changeLanguage } from "./redux/actions";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Flag from "react-world-flags";

const App = () => {
  const languageKey = "languageRealHimik";
  const dispatch = useDispatch();
  const lang = !!getFromLocalStorage(languageKey);

  const [isLanguageSet, setIsLanguageSet] = useState(false);

  useEffect(() => {
    setIsLanguageSet(lang);
  }, [lang]);

  const setLanguage = (lng) => {
    setInLocalStorage(languageKey, lng);
    dispatch(changeLanguage(lng));
    setIsLanguageSet(true);
  };

  return (
    <div className="App">
      {!isLanguageSet ? (
        <div className="App-modal">
          <Card sx={{ minWidth: 275, backgroundColor: "#cacaca" }}>
            <CardContent>
              <Typography
                sx={globalStyles.fontSize}
                color="text.secondary"
                gutterBottom
              >
                Оберіть будь ласка мову:
              </Typography>
            </CardContent>
            <CardActions style={styles.cardActions}>
              <Flag
                code="ua"
                height="36"
                width="36"
                onClick={() => setLanguage("Ua")}
              />
              <Flag
                code="ru"
                height="36"
                width="36"
                onClick={() => setLanguage("Ru")}
              />
            </CardActions>
          </Card>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

const styles = {
  cardActions: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    margin: "0 auto",
    padding: "0 0 15px 0",
  },
};

export default App;

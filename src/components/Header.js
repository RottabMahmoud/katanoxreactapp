import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "white" }} position="static">
        <Toolbar>
          <Typography
            color="black"
            variant="h4"
            component="div"
            sx={{ flexGrow: 10 }}
          >
            <img
              style={{ width: "1em" }}
              alt="Katanox"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAAGFBMVEX///+z0f8CZf7M4P/o8f86h/9hn/+Pu/94oXitAAAEAElEQVR4nO2c0ZarIAxFtWr9/z++nemME6oIOTkJ3LU477V7tdkBBZmmkZGRkZGRkZG+sz/Vmc1fui76vD72fKizW0lndZb376pnfa5NSKdp1rNuBtYFJ319GGBdbmDYpPJ3WTc9LCiXHnRO/8E1SC6kTE+1BrDq5TIIJQM0Aq1cJqFkkEagkotG+rqUr1xG9dMgjaBWLqBMb0ixRlAnF0JauKSTXCT17azFqxKFSi6rZy3JRRUquTBbLj1oJSnWCJ75qzmSTtAom5PLRSgZmlxOQskAo+yVXAGkJLn0oJoyNbGmcjkLJb/JKJfDWJoPwnqUmrv6aYBG8Pj5vhChZJBGsDchReVa3Ub9u0CjrB6UQDoBcgGk1j//N0q5GpIqWfeWpKrpNkBKKdMjtXJtzUlrWTc9KJ10qmoETYWSKcrVDWlxlG2sfpq7UbYHoWTycnUilGTNyAWQnp9Gs3PJ2pFQMheNoCuhZE6NoFvSz0bQm/ppZCPoT/2PHHIhQoWSHnJ1qn6auXOhZJbOhUpY9aCzbSMBGuBBz74dD18iA/ymbxXtO1+iSO07X3RBHvT8zXPySxwOpHrQWQ7Glp0vsaRxrEiZnu4eQhqBQSiZgEagB52vb3K8GwFSprlnHb6NwC5UlFxcUk9WklAyTo3AgdSnETCFkuE3Ai9SfiNgC5WwUuWijKXZMBuBi1AyrEaATE6168icRuAnlAylEZgm/NXh1KuaFVhAZpmlKwGF+kd4vVXDimzMoI5Y/w9pdcECQvFnV1WsiFAO88AK1obqpynJBanvdB9wz9qBUDI3pIhQrvfX2YLtQv0q1k7UL7MiQkU8YTvLhQgV84z1k7Uz9W9Yu1M/zWIjDV1lOVi7VP+KtVf106yo+g3WA9fehRKowJ//2FussSKbsL8W5eNZka3t770j0evBiFC/u1xiWRGh/vaOBLIiL7eku1yiChZTP53ixLAib2Sed7lEsOLqp/EvWGgsvSD1ZzULFcXKECqmYBHS+92NXqyQ+rekXqyI+uXdjR4FC92XFkk9WKFpdAXpbHgh9DJ8oWSYBYtMozUbm3msPkJ5sELvsqpIWXIh6itBOazQO+ILsmHYTAo+PkFYbQWLnxEQdzbAO/DL4eGshlfuv/8SPSsql3kDQhQr4xAmyklrZVLK6TsRBUs7J8idFVE/U2bOBUs9f8uVlXyqmd+pJvyDGL3k8jje0ofV6dBQh8NN3I5ipcuFHHBbAzrR5XI92ZTJ6n1eLO80HmAs1S7sklgR9dWzIAoroD6yp4NQsID62MKumRVQH74Z1heBYAXUt+yUMBQsor7pnh1mDRJKBijYL9bluWlj3ykBHMLf5hX4kZGRkZGRkRFF/gH34lQQmcxlGAAAAABJRU5ErkJggg=="
            />
          </Typography>
          <Button
            component={Link}
            to="/stats"
            variant="outlined"
            style={{ color: "#3f51b5", backgroundColor: "white" }}
          >
            Hotel Stats
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
